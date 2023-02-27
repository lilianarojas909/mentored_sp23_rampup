const myRandomBtn = document.getElementById("myRandomBtn");
var img1 = document.createElement("img");
//placeholder
img1.src = "./snack-images/buttercookie.png";
myRandomBtn.addEventListener("click", generateRandom() );

function generateRandom() {

const myDiv = document.getElementById('body');
myDiv.appendChild(img1);

//document.body.innerHTML = "<h1>" + img1 + "</h1>";

//selected_image = 'buttercookie.png'
//document.getElementById('body').src = './snack-images/$(selected_image)'
}

function generateSpecific() {
//if 
}



