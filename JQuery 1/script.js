

$(document).ready(function () {
 $("h1").text("it easy to learn")
})
// hide image dblclick

$(document).ready(function(){
    $("#btn1").dblclick(function(){
        $("img").hide(4000);
    });
});
//show image 
$(document).ready(function(){
    $("#btn2").click(function(){
        $("img").show(4000);
    });
});

// hide image by mouse

$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).hide(1000);
    })
});



// css in jquery :

$(document).ready(function(){
    $("img").css("width", "300px");
});
$(document).ready(function(){
    $("#p1").css("background", "yellow");
});


$(document).ready(function(){
    $("#h1").css("color", "red");
});


$(document).ready (function(){
$("#btn3").click(function(){
alert($("#h1").text());

})


})

//alert in page:

$(document).ready(function (){
$("btn3").click(function(){
    alert($("#p1").text())


})
})



$(document).ready(function(){
$("h1").text("it is not easy")

})



$(document).ready(function(){
    $("#btn4").click(function(){
    $("a").attr("href", "https://bootcamp.matrixmaster.info/")
    })
})
    



$(document).ready(function(){
    $("#btn3").click(function(){
    alert($("#input").val());

    })

})



$(document).ready(function(){
    $("#btnHtml").click(function(){
   $("div").append("<h5>hi i am html</h5>");

    })

});




