var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restful_blog_demo_2", {useMongoClient: true});

var Post = require("./models/post");
var User = require("./models/user")

Post.create({
   title: "How to cook the best burger pt. 4",
   content: "yum yum yum"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
         if(err){
            console.log(err)
         } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
               if(err){
                  console.log(err);
               } else {
                  console.log(data);
               }
            });
         }
    });
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Find user
// find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//    if(err){
//        console.log(err);
//    } else {
//        console.log(user);
//    }
// });