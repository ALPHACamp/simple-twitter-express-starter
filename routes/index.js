const tweetsCtrller = require('../controllers/tweetsCtrller')
const userCtrller = require('../controllers/userCtrller.js')
const adminTweetsCtrller = require('../controllers/adminTweetsCtrller')

const { isAuth, isAdminAuth } = require('../middleware/auth')

const multer = require('multer')
const upload = multer({ dest: 'temp/' })

module.exports = (app, passport) => {
  app.get('/', isAuth, (req, res) => res.redirect('/tweets'))

  app.use('/tweets', isAuth)
  app.get('/tweets', tweetsCtrller.getTweets)
  app.post('/tweets', tweetsCtrller.postTweet)
  app.post('/tweets/:id/like', tweetsCtrller.like)
  app.post('/tweets/:id/unlike', tweetsCtrller.unlike)

  app.use('/users', isAuth)
  app.get('/users/:id', (req, res) => res.redirect(`/users/${req.params.id}/tweets`))
  app.get('/users/:id/tweets', userCtrller.getUserTweets)
  app.get('/users/:id/edit', userCtrller.editPage)
  app.post('/users/:id/edit', upload.single('image'), userCtrller.postProfile)
  app.get('/users/:id/followers', userCtrller.getFollowers)
  
  app.use('/admin', isAdminAuth)
  app.get('/admin', (req, res) => res.redirect('/admin/tweets'))
  app.get('/admin/tweets', adminTweetsCtrller.getTweets)

  app.get('/signup', userCtrller.signUpPage)
  app.post('/signup', userCtrller.signUp)

  app.get('/signin', userCtrller.signInPage)
  app.post('/signin', userCtrller.signIn.bind(null, passport))
  app.get('/logout', userCtrller.logout)

  app.use('/followships', isAuth)
  app.post('/followships', userCtrller.follow)
  app.delete('/followships/:followingId', userCtrller.unfollow)
}