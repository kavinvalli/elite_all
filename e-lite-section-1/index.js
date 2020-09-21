propertyDiv = document.getElementById('properties')

function myFunction() {
    console.log("Hello World")
    for (let i=0; i < properties.length; i++){
        // propertyDiv.innerHTML = propertyDiv.innerHTML + '<div class="propertycard">Name:'+properties[i].Name+"<br>"+"Address:"+properties[i].Address+'<br>Image: <img src="'+properties[i].Image+'" width="290px" height="180px"></div>'
        propertyDiv.innerHTML += '<div class="propertycard"><img src="'+properties[i].Image+'" alt="" class="card-image"><div class="card-text"><p class="heading">'+properties[i].Name+'</p><p class="sub-address">'+properties[i].Address+'</p><p class="more">More -></p></div></div>'
    };
}

// Accordian JS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Search
function search(value) {
    propertyDiv.innerHTML = ''
    l = value.length
    for (let i=0; i < properties.length; i++){
        console.log("property")
        if(((properties[i].Name.toLowerCase()).indexOf(value.toLowerCase()))>-1){
            console.log("property2")
            propertyDiv.innerHTML += '<div class="propertycard"><img src="'+properties[i].Image+'" alt="" class="card-image"><div class="card-text"><p class="heading">'+properties[i].Name+'</p><p class="sub-address">'+properties[i].Address+'</p><p class="more">More -></p></div></div>'
        }
    }
}