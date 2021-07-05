const tweetController = require('../controllers/tweetController.js')
const userController = require('../controllers/userController.js')
const replyController = require('../controllers/replyController.js')
const adminController = require('../controllers/admin/adminController.js')
const multer = require('multer')
const upload = multer({ dest: 'temp/' })

const helpers = require('../_helpers')


module.exports = (app, passport) => {

  const authenticated = (req, res, next) => {
    if (helpers.ensureAuthenticated(req)) {
      return next()
    }
    res.redirect('/signin')
  }
  const authenticatedAdmin = (req, res, next) => {
    if (helpers.ensureAuthenticated(req)) {
      if (req.user.role === 'Admin') { return next() }
      return res.redirect('/')
    }
    res.redirect('/signin')
  }

  // Home routes
  app.get('/', (req, res) => { res.redirect('/tweets') })

  // Sign up.in.out routes 
  app.get('/signup', userController.signUpPage)
  app.post('/signup', userController.signUp)
  app.get('/signin', userController.signInPage)
  app.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
  app.get('/logout', userController.logout)

  // tweet routes
  app.get('/tweets', authenticated, tweetController.getTweets)
  app.post('/tweets', authenticated, tweetController.postTweet)

  // users routes
  app.get('/users/:id/tweets', authenticated, userController.getUser)
  app.get('/users/:id/edit', authenticated, userController.editUser)
  //app.get('/users/:id', authenticated, userController.getUser)
  app.post('/users/:id/edit', authenticated, upload.single('image'), userController.putUser)


  // reply routes
  app.get('/tweets/:tweetId/replies', authenticated, replyController.getReply)
  app.post('/tweets/:tweetId/replies', authenticated, replyController.postReply)

  // followship routes
  app.post('/followships', authenticated, userController.postFollowing)
  app.delete('/followships/:followingId', authenticated, userController.deleteFollowing)
  app.get('/users/:id/followings', authenticated, userController.getFollowings)
  app.get('/users/:id/followers', authenticated, userController.getFollowers)

  // like routes
  app.post('/tweets/:id/like', authenticated, tweetController.getLike)
  app.delete('/tweets/:id/unlike', authenticated, tweetController.deleteLike)
  app.get('/users/:id/likes', authenticated, userController.getLikes)

  // admin routes
  app.get('/admin/tweets', authenticatedAdmin, adminController.getTweets)
  app.delete('/admin/tweets/:id', authenticatedAdmin, adminController.deleteTweets)
  app.get('/admin/users', authenticatedAdmin, adminController.getUsers)
  app.delete('/admin/users/:id', authenticatedAdmin, adminController.deleteUsers)
}