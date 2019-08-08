var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something Went Wrong!")
//     } else {
//         console.log("We Just Saved A Cat to the DB:");
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15, 
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh No, Error!");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
});