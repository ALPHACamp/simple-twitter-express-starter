(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd68afa"],{"0fbd":function(e,t,s){"use strict";var i=s("97c8"),n=s.n(i);n.a},1615:function(e,t,s){},"18ed":function(e,t,s){"use strict";var i=s("1615"),n=s.n(i);n.a},2957:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user"},[s("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),s("div",[s("router-link",{staticClass:"user-profile-link",attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),e.user.introduction?s("p",[e._v(e._s(e.user.introduction.substring(0,50)))]):s("p",[e._v("no introduction yet")]),e.isFollowing?s("button",{on:{click:function(t){return e.removeFollowing({UserId:e.user.id})}}},[e._v("Unfollow")]):e.account.id!==e.user.id?s("button",{on:{click:function(t){return e.addFollowing({UserId:e.user.id})}}},[e._v("Follow")]):e._e()],1)])},n=[],r=s("cebc"),o=s("2f62"),a={name:"UserCard",props:{user:Object,account:Object},computed:{isFollowing:function(){var e=this;return this.account.Followings.some(function(t){return t.id===e.user.id})}},methods:Object(r["a"])({},Object(o["b"])("account",["addFollowing","removeFollowing"]))},c=a,u=(s("18ed"),s("2877")),l=Object(u["a"])(c,i,n,!1,null,"99ded008",null);t["a"]=l.exports},"2fdb":function(e,t,s){"use strict";var i=s("5ca1"),n=s("d2c8"),r="includes";i(i.P+i.F*s("5147")(r),"String",{includes:function(e){return!!~n(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},3530:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",[s("div",{attrs:{id:"panel-switch"}},[s("div",{attrs:{id:"switch"}},[s("span",{class:{active:!0===e.showTweets},on:{click:e.switchToTweets}},[e._v("Tweets")]),s("span",{class:{active:!0===e.showUsers},on:{click:e.switchToUsers}},[e._v("Users")])])]),s("div",{attrs:{id:"panel"}},[s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showTweets,expression:"showTweets"}],attrs:{id:"tweets"}},[e._l(e.tweets,function(t){return[s("tweet",{key:t.id,attrs:{id:"tweet",tweet:t,user:t.User,account:e.account}}),s("div",{staticClass:"delete",on:{click:function(s){return e.removeTweet(t)}}},[e._v("Delete")])]})],2)]),s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showUsers,expression:"showUsers"}],attrs:{id:"users"}},[s("span",[e._v("Name")]),s("span",[e._v("Tweets")]),s("span",[e._v("Follwers")]),s("span",[e._v("Followings")]),s("span",[e._v("Likes")]),e._l(e.users,function(t){return[s("div",{key:t.id,staticClass:"user"},[s("router-link",{staticClass:"user-name",attrs:{to:"/users/"+t.id+"/tweets"}},[e._v(e._s(t.name))]),s("router-link",{staticClass:"user-tweets",attrs:{to:"/users/"+t.id+"/tweets"}},[e._v(e._s(e.isZero(t.Tweets)))]),s("router-link",{staticClass:"user-followers",attrs:{to:"/users/"+t.id+"/followers"}},[e._v(e._s(e.isZero(t.Followers)))]),s("router-link",{staticClass:"user-followings",attrs:{to:"/users/"+t.id+"/followings"}},[e._v(e._s(e.isZero(t.Followings)))]),s("router-link",{staticClass:"user-likes",attrs:{to:"/users/"+t.id+"/likes"}},[e._v(e._s(e.LikedUsers(t.Tweets)))])],1)]})],2)])],1)])},n=[],r=(s("ac6a"),s("cebc")),o=s("b17a"),a=s("2957"),c=s("d88d"),u=s("2f62"),l={name:"admin",components:{Tweet:o["a"],UserCard:a["a"],ReplyCard:c["a"]},data:function(){return{showTweets:!0,showUsers:!1,showReplies:!1}},computed:Object(r["a"])({},Object(u["e"])("tweet",{tweets:function(e){return e.tweets}}),Object(u["e"])("account",{account:function(e){return e}}),Object(u["e"])("user",{users:function(e){return e.users}})),methods:Object(r["a"])({},Object(u["b"])("tweet",["deleteTweet"]),{removeTweet:function(e){this.deleteTweet(e)},switchToTweets:function(){this.showTweets=!0,this.showUsers=!1},switchToUsers:function(){this.showTweets=!1,this.showUsers=!0},isZero:function(e){return e?e.length:0},LikedUsers:function(e){var t=0;return e&&e.forEach(function(e){return e.LikedUsers&&(t+=e.LikedUsers.length),t}),t}})},d=l,w=(s("0fbd"),s("2877")),p=Object(w["a"])(d,i,n,!1,null,"48d97dfa",null);t["default"]=p.exports},5147:function(e,t,s){var i=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[i]=!1,!"/./"[e](t)}catch(n){}}return!0}},"53ef":function(e,t,s){"use strict";var i=s("a77d"),n=s.n(i);n.a},6762:function(e,t,s){"use strict";var i=s("5ca1"),n=s("c366")(!0);i(i.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"77cc":function(e,t,s){"use strict";var i=s("c2b6"),n=s.n(i);n.a},"97c8":function(e,t,s){},a77d:function(e,t,s){},aae3:function(e,t,s){var i=s("d3f4"),n=s("2d95"),r=s("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==n(e))}},b17a:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"tweets"}},[s("div",{staticClass:"tweet"},[s("img",{attrs:{src:e.user.avatar,alt:e.user.name}}),s("div",[s("div",[s("router-link",{attrs:{to:"/users/"+e.user.id+"/tweets",tag:"span"}},[e._v("@"+e._s(e.user.name))]),s("span",[e._v(", "+e._s(e.date)+", "+e._s(e.time))])],1),s("p",[e._v(e._s(e.tweet.description.substring(0,50)))]),s("div",[s("div",{staticClass:"reply-like"},[s("router-link",{staticClass:"reply",attrs:{to:"/tweets/"+e.tweet.id+"/replies",tag:"span"}},[e._v("Reply("+e._s(e.tweet.Replies.length)+")")]),e.isLiked?s("span",{staticClass:"like",on:{click:function(t){return e.deleteLike(e.account.id,e.tweet.id)}}},[e._v("Unlike("+e._s(e.tweet.LikedUsers.length)+")")]):s("span",{staticClass:"like",on:{click:function(t){return e.postLike(e.account.id,e.tweet.id)}}},[e._v("Like("+e._s(e.tweet.LikedUsers.length)+")")])],1)])]),0!==e.tweet.Replies.length&&this.$route.path.includes("admin")?s("button",{staticClass:"drop-down",on:{click:function(t){e.showReplies=!e.showReplies}}},[!1===e.showReplies?s("i",{staticClass:"fas fa-angle-left"}):e._e(),!0===e.showReplies?s("i",{staticClass:"fas fa-angle-down"}):e._e()]):e._e()]),s("transition",{attrs:{name:"reply-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showReplies,expression:"showReplies"}],attrs:{id:"replies"}},[e._l(e.tweet.Replies,function(e){return[s("reply-card",{key:e.id,attrs:{reply:e}})]})],2)])],1)},n=[],r=(s("6762"),s("2fdb"),s("cebc")),o=s("2f62"),a=s("d88d"),c={name:"tweet",props:{tweet:Object,user:Object,account:Object},components:{ReplyCard:a["a"]},data:function(){return{showReplies:!1}},computed:{isLiked:function(){var e=this;return this.account.LikedTweets.some(function(t){return t.id===e.tweet.id})},date:function(){var e=new Date(this.tweet.createdAt),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;return e.getFullYear()+"-"+t+"-"+e.getDate()},time:function(){var e=new Date(this.tweet.createdAt);return e.getHours()+":"+e.getMinutes()}},methods:Object(r["a"])({},Object(o["d"])("account",["ADD_ACCOUNT_LIKE","REMOVE_ACCOUNT_LIKE"]),Object(o["d"])("tweet",["ADD_TWEET_LIKE","REMOVE_TWEET_LIKE","ADD_TWEETS_LIKE","REMOVE_TWEETS_LIKE"]),Object(o["d"])("user",["ADD_USER_TWEET_LIKE","REMOVE_USER_TWEET_LIKE"]),Object(o["b"])("tweet",["addLike","removeLike"]),{postLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("add like in homepage or Like page or admin page"),this.ADD_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("add like in profile"),this.ADD_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("add like in reply"),this.ADD_TWEET_LIKE({accountId:e})),this.ADD_ACCOUNT_LIKE({id:t}),this.addLike({accountId:e,tweetId:t})},deleteLike:function(e,t){"/tweets"===this.$route.path||this.$route.path.includes("likes")||this.$route.path.includes("admin")?(console.log("remove like in homepage or Like page or admin page"),this.REMOVE_TWEETS_LIKE({accountId:e,tweetId:t})):this.$route.path.includes("users")?(console.log("remove like in profile"),this.REMOVE_USER_TWEET_LIKE({accountId:e,tweetId:t})):(console.log("remove like in reply"),this.REMOVE_TWEET_LIKE({accountId:e})),this.REMOVE_ACCOUNT_LIKE({tweetId:t}),this.removeLike({accountId:e,tweetId:t})},toggleReplies:function(){this.showReplies=!this.showReplies}})},u=c,l=(s("77cc"),s("2877")),d=Object(l["a"])(u,i,n,!1,null,"838bf76c",null);t["a"]=d.exports},c2b6:function(e,t,s){},d2c8:function(e,t,s){var i=s("aae3"),n=s("be13");e.exports=function(e,t,s){if(i(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(n(e))}},d88d:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"replies"},[s("img",{attrs:{src:e.reply.User.avatar}}),s("div",[s("div",[s("router-link",{attrs:{to:"/users/"+e.reply.userId+"/tweets",tag:"span"}},[e._v("Replying to @"+e._s(e.reply.User.name))]),s("br"),s("span",[e._v(e._s(e.reply.createdAt))])],1),s("p",[e._v(e._s(e.reply.comment.substring(0,50)))])])])},n=[],r={name:"ReplayCard",props:{reply:Object}},o=r,a=(s("53ef"),s("2877")),c=Object(a["a"])(o,i,n,!1,null,"8242c580",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-0fd68afa.a662c9a8.js.map