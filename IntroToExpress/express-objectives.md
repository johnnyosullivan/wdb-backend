#Introduction to Express

* What is a framework? How is it different from a library?
    * Inversion of Control
        * All of the control is already in the framework? e.g. Mad Libs
        * Libraries allow you the user much of the control. You call it and use it.
* What is Express?
    * Specifically a Web Development Framework
        * As opposed to an android app development framework or other kinds of framework. 
* Why are we using Express?
    * Most popular Node Development Framework.
        * Lots of tutorials and big community.
    * Heavy vs Light Framework
        * Heavy - Mad Libs analogy - lots of text - few blanks.
        * Light - Many blanks - less text
            * Express - Light (Unopinionated = doesn't force you to use it a certain way)
                * Means we will have to learn how to fill in the blanks and therefore 
                * inner workings of a framework i.e. a great first framework to learn.

#Our First Express App

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!

#NPM Init and Package.json

* Explain what the package.json file does
    * Contains metadata about an application or a package
    * Common to see them or create your own using `npm init`
* Use `npm init` to create a new package.json
    * How a unique package.json is created
    * Provides a walkthrough of the process
* Use the  `--save` flag to install packages
    * Used when installing a package to install the package and save it to the dependencies section of our package.json.
    * Create the package.json first and everytime you add a dependency use  `--save` to save it to the package.json.

#More Routing!
* Show the `*` route matcher
    * Will match with anything other than the predefined routes
* Write routes containng route parameters
    * Used to match a pattern in a route
    * Use : before the defined pattern
* Discuss route order
    *Order of routes matters