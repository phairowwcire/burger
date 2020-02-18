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


$(".devouredBtn").on("click",function(){
    var id = $(this).attr("data-id")
    $.ajax({
        url:"api/burgers/"+id,
        method:"PUT"
    }).then(function(){
        location.reload()
    })
})