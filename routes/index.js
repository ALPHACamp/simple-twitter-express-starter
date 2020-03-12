const helpers = require('../_helpers')
const userController = require('../controllers/userController')
const tweetController = require('../controllers/tweetController')
const replyController = require('../controllers/replyController')
const passport = require('../config/passport')
const multer = require('multer')
const upload = multer({
  dest: 'temp/'
})

module.exports = (app, passport) => {
  const authenticated = (req, res, next) => {
    if (helpers.ensureAuthenticated(req)) {
      return next()
    }
    res.redirect('/signin')
  }

  app.get('/chat/:id', (req, res) => {
    res.sendFile(__dirname + '/chat/chat.html')
  })

  app.get('/', (req, res) => res.redirect('/tweets'))

  app.get('/tweets', authenticated, tweetController.getTweets)
  app.post('/tweets', authenticated, tweetController.postTweets)
  app.post('/tweets/:id/like', authenticated, tweetController.addLike)
  app.post('/tweets/:id/unlike', authenticated, tweetController.removeLike)
  app.get('/tweets/:tweet_id/replies', authenticated, replyController.getReplies)
  app.post('/tweets/:tweet_id/replies', authenticated, replyController.postReply)

  app.post('/followships', authenticated, userController.addFollowing)
  app.delete(
    '/followships/:follwingId',
    authenticated,
    userController.removeFollowing
  )

  app.get('/users/:id/tweets', userController.getUser)
  app.get('/users/:id/likes', authenticated, userController.getLike)
  app.get('/users/:id/followers', authenticated, userController.getFollower)
  app.get('/users/:id/followings', authenticated, userController.getFollowing)
  app.get('/users/:id/edit', userController.editUser)
  app.post('/users/:id/edit', upload.single('avatar'), userController.putUser)

  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)

  app.get('/signin', userController.signInPage)
  app.post(
    '/signin',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      failureFlash: true
    }),
    userController.signIn
  )

  app.get('/logout', userController.logout)
}
