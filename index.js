// onmouseenter

var docum = document.getElementById("con");

docum.addEventListener("mouseenter",function(){
    docum.classList.add("onmouse")
    setTimeout(function(){
        docum.classList.remove("onmouse")
    },  500)
   
})

// docum.addEventListener("mouseup",function(){
//     docum.classList.add("container1");
// })