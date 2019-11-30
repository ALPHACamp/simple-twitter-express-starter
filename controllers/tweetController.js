const db = require("../models");
const Tweet = db.Tweet;
const User = db.User;
const Reply = db.Reply;
const Like = db.Like;
const Sequelize = require("sequelize");

const tweetController = {
  getTweets: (req, res) => {
    User.findAll({
      include: [{ model: User, as: "Followers" }]
    }).then(users => {
      users.sort((a, b) =>
        a.Followers.length > b.Followers.length
          ? -1
          : b.Followers.length > a.Followers.length
          ? 1
          : 0
      );
      let top_ten_users = users.slice(0, 10);
      Tweet.findAndCountAll({
        include: [User, Reply, Like],
        order: [["updatedAt", "DESC"]]
      }).then(result => {
        res.render("tweets", {
          tweets: result.rows,
          top_ten_users
        });
      });
    });
  }
};

module.exports = tweetController;
