var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")

mongoose.Promise = global.Promise;    
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://images.unsplash.com/photo-1510277861473-16b27b39c47a?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//           console.log("Newly Created Campground: ");
//           console.log(campground);
//         }
//     });

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render("index", {campgrounds: allCampgrounds});
       } 
    });
});

// CREATE - add new campground to database
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect to campgrounds page
           res.redirect("/campgrounds"); 
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    // find the campground with provided Id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
})