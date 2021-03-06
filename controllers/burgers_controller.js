var burgers = require ("../models/burger")
function burger_controller(app){
  app.get("/" , function(req,res){
      burgers.selectAll(function(data){
        console.log(data)
        res.render("index",{burgers:data})
      })
  })

  app.post("/api/burgers",function(req,res) {
    var newBurger = req.body
    burgers.insertOne(newBurger,function(data){
      res.json(data)
    })
  })
  app.put ("/api/burgers/:id",function(req,res){
    var devoured = true
    var id = req.params.id
    burgers.updateOne (devoured,id,function(data){
      res.json (data)
    })
  })
}
module.exports = burger_controller