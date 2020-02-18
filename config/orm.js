var connection = require("./connection")

var orm = {
    selectAll:function(tableName,modelCallback){
     var statement=   connection.query("select * from ?? ", tableName, function(err,data){
         console.log(data)
            modelCallback(data)
        })

        console.log(statement.sql)
    },
    insertOne:function(tableName,columns,newBurger,modelCallback){
  var statement=     connection.query("insert into ?? (??,??) values(?,?)",[tableName,...columns,newBurger.burger_name,false],function(err,data){
            modelCallback(data)
        } )

        console.log(statement.sql)
    } ,
    updateOne:function(tableName, columns, values, modelCallback){
    var statement =     connection.query("update ?? set ?? = ? where ?? = ?", [tableName,columns[0],values[0],columns[1],values[1]],function(err,data){
            modelCallback(data)
        })
        console.log(statement.sql)
    }
}


module.exports = orm