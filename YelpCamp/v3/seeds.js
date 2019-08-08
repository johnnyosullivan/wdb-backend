var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Clouds Rest",
        image: "https://images.unsplash.com/photo-1457368406279-ec1ecb478381?auto=format&fit=crop&w=967&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Sleep above the clouds with the angels!"
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1479244209311-71e35c910f59?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Dusty, dry, and delightful!"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Can a canyon camp can yons?"
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                // add a few comments
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created a new comment!");
                        }
                    });
                }
            });
        });
    }); 
}

module.exports = seedDB;
