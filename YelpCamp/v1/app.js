var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1510277861473-16b27b39c47a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1479127820278-07bc8118cf6a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1510277861473-16b27b39c47a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1479127820278-07bc8118cf6a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name
    var image = req.body.image
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
})