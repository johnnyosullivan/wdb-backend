#Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
* Explain what EJS is and why we use it
* Pass variables to EJS templates

#EJS Control Flow

* Show examples of control flow in EJS templates.
* Write if statements in an EJS file.
    * 2 different set of tags in EJS files
        * <$= %>
            * Will render exactly what's between the tags as HTML rather than run the logic.
        * <$ %>
            * Run the code 
            * Perfect for when we need to write logic such as if statements that we 
            * don't actually want to appear on our webpage.
* Write loops in an EJS file.

#Styles and Partials

* Show to properly include public assets
* Properly configure our to use EJS
* Use partials to dry up our code

#Post Requests!!!

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data
