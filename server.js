var express = require ("express")
//app creates listener and creates requests: post ,put, get, delete and includes other libraries into the server
var app = express ()

var expressHandlebars = require ("express-handlebars")

var PORT = process.env.PORT || 8080

app.engine ("handlebars", expressHandlebars({defaultLayout:"main"}))
app.set("view engine", "handlebars")

app.use (express.static("public"))

app.use (express.urlencoded({extended:true}))
app.use (express.json())

var burger_controller = require("./controllers/burgers_controller")

burger_controller (app)

app.listen (PORT, function(){
    console.log ("app is listening on http://localhost:" + PORT)
})