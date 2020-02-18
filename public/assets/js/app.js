$("#addBurger").on("click",function(){
    var newBurger = {
        burger_name:$("#burgerName").val()
    }

    $.ajax({
        url:"api/burgers",
        method:"POST",
        data:newBurger
    }).then(function(data){
        location.reload()
    })
})