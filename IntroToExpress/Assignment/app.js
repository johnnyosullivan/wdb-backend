var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// Visting "/speak/pig" should print "The pig says 'Oink'"
// Visting "/speak/cow" should print "The cow says 'Moo'"
// Visting "/speak/dog" should print "The dog says 'Woof Woof!'"
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        rooster: "Cock-a-doodle-doo!"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'"); 
});

// Visting "/repeat/hello/3" should print "hello hello hello"
// Visting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:randomWord/:number", function(req, res) {
    var word = req.params.randomWord;
    var num = Number(req.params.number);
    var result = "";
    for(var i=1; i<=num; i++){
        result += word + " ";
    }
    res.send(result);
});

// If a user visits any other route, print:
// "Sorry, page not found...What are you doing with your life?"
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?")
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!")
});