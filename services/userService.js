db = require('../models')
const { User, Tweet, Reply, Like } = db
const imgur = require('imgur-node-api')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID
const helpers = require('../_helpers')
const getImgLink = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null)
    imgur.setClientID(IMGUR_CLIENT_ID)
    imgur.upload(file.path, (err, res) => {
      if (err) return reject(err)
      return resolve(res.data.link)
    })
  })
}
const letsCheck = (user, currentUser) => {
  user.isCurrentUser = currentUser.id === user.id ? true : false
  user.isFollowed = currentUser.Followings.map((d) => d.id).includes(user.id)
    ? true
    : false
}
const letsCount = (user) => {
  user.tweetsCount = user.Tweets.length || 0
  user.followingCount = user.Followings.length || 0
  user.followerCount = user.Followers.length || 0
  user.likeCount = user.LikedTweets.length || 0
  delete user.Tweets
  delete user.Followers
  delete user.Followings
  delete user.LikedTweets
}
const userService = {
  getUser: async (req, res, callback) => {
    try {
      let user = await User.findByPk(req.params.id, {
        attributes: ['id', 'email', 'name', 'avatar', 'introduction', 'role'],
        include: [
          { model: Tweet, attributes: ['id'] },
          { model: User, as: 'Followings', attributes: ['id'] },
          { model: User, as: 'Followers', attributes: ['id'] },
          { model: Tweet, as: 'LikedTweets', attributes: ['id'] }
        ]
      })
      user = user.toJSON()
      let currentUser = helpers.getUser(req).toJSON()
      letsCheck(user, currentUser)
      letsCount(user)
      callback({ user })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  getTweets: async (req, res, callback) => {
    try {
      let user = await User.findByPk(req.params.id, {
        include: [
          {
            model: Tweet,
            include: [User, Reply, Like]
          },
          { model: Like },
          { model: User, as: 'Followings' },
          { model: User, as: 'Followers' }
        ]
      })
      callback({ user: user.toJSON() })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  getFollowers: async (req, res, callback) => {
    try {
      let user = await User.findByPk(req.params.id, {
        include: [
          Tweet,
          { model: User, as: 'Followers' },
          { model: User, as: 'Followings' },
          { model: Tweet, as: 'LikedTweets' }
        ]
      })
      let currentUser = helpers.getUser(req).toJSON()
      user = user.toJSON()
      let followers = user.Followers
      user.Followers = followers.map((u) => ({
        ...u,
        isFollowed: currentUser.Followings.map((d) => d.id).includes(u.id)
      }))
      letsCheck(user, currentUser)
      letsCount(user)
      callback({ user })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  getFollowings: async (req, res, callback) => {
    try {
      let user = await User.findByPk(req.params.id, {
        include: [
          Tweet,
          { model: User, as: 'Followers' },
          { model: User, as: 'Followings' },
          { model: Tweet, as: 'LikedTweets' }
        ]
      })
      let currentUser = helpers.getUser(req).toJSON()
      user = user.toJSON()
      user.Followings = user.Followings.map((u) => ({
        ...u,
        isFollowed: currentUser.Followings.map((d) => d.id).includes(u.id)
      }))
      letsCheck(user, currentUser)
      letsCount(user)
      callback({ user })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  getLikes: async (req, res, callback) => {
    try {
      let user = await User.findByPk(req.params.id, {
        include: [
          Tweet,
          { model: User, as: 'Followers' },
          { model: User, as: 'Followings' },
          { model: Tweet, as: 'LikedTweets', include: [User, Reply, Like] }
        ]
      })
      let currentUser = helpers.getUser(req).toJSON()
      user = user.toJSON()
      user.LikedTweets = user.LikedTweets.map((t) => ({
        ...t,
        counter: {
          reply: t.Replies.length || 0,
          like: t.Likes.length || 0
        },
        isLiked: currentUser.LikedTweets.map((ct) => ct.id).includes(t.id)
      }))
      letsCheck(user, currentUser)
      letsCount(user)
      console.log(user.LikedTweets)
      callback({ user })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  getEditPage: async (req, res, callback) => {
    try {
      let user = await User.findByPk(req.params.id)
      callback({ user: user.toJSON() })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  },
  putUser: async (req, res, callback) => {
    try {
      if (!req.body.name) {
        callback({ status: 'error', message: "name didn't exist" })
      }
      const { file } = req
      let imgLink = await getImgLink(file)
      let user = await User.findByPk(req.params.id)
      user.update({
        name: req.body.name || user.name,
        introduction: req.body.introduction,
        avatar: imgLink || user.avatar
      })
      callback({
        status: 'success',
        message: 'user was successfully to update'
      })
    } catch (err) {
      callback({ status: 'error', message: err.toString() })
    }
  }
}

module.exports = userService
