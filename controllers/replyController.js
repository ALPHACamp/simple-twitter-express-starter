const db = require("../models");
const Tweet = db.Tweet;
const User = db.User;
const Reply = db.Reply;
const Like = db.Like;

const replyController = {
  getReplies: (req, res) => {
    Tweet.findByPk(req.params.tweet_id, {
      include: [
        {
          model: User,
          attributes: ["name", "avatar", "introduction"],
          include: [
            { model: Tweet },
            { model: User, as: "Followers" },
            { model: User, as: "Followings" },
            { model: Like }
          ]
        },
        {
          model: Reply,
          include: [{ model: User, attributes: ["name", "avatar"] }]
        },
        { model: Like }
      ]
    }).then(tweet => {
      // 整理資料
      const twitter = {
        ...tweet.User.dataValues,
        tweetCount: tweet.User.Tweets.length,
        followingCount: tweet.User.Followings.length,
        followerCount: tweet.User.Followers.length,
        likeCount: tweet.User.Likes.length
      };
      res.render("replies", { tweet, twitter });
    });
  },
  postReplies: (req, res) => {
    if (!req.body.replyText) {
      req.flash("error_messages", "there's no text input");
      res.redirect("back");
    } else {
      return Reply.create({
        comment: req.body.replyText,
        TweetId: req.params.tweet_id,
        UserId: req.user.id
      }).then(user => {
        res.redirect("back");
      });
    }
  }
};

module.exports = replyController;
