const myRandomBtn = document.getElementById("myRandomBtn");
const myBtn = document.getElementById("myBtn");
var img1 = document.createElement("img");
img1.className = "recommendation-image";
//placeholder
image_array = [
    'boozmaca.png',
    'buttercookie.png',
    'breadcrumb.png',
    'buttermarshmallow.png',
    'butterpeanuts.png',
    'cheeseburgerburrito.png',
    'cheeseburgerpizza.png',
    'chilepina.png',
    'chocolavacake.png',
    'chocoplatain.png',
    'chocorasb.png',
    'eggsoup.png',
    'fruityyogurt.png',
    'healthyoreos.png',
    'heartattack.png',
    'jellybeanssour.png',
    'ketchupseasoning.png',
    'macronibite.png',
    'mochi.png',
    'oatchoco.png',
    'pbcaramelpopcorn.png',
    'pbchoomarsh.png',
    'pbjsnack.png',
    'picklechip.png',
    'pistachio.png',
    'pretnuggs.png',
    'rataouille.png',
    'reeses.png',
    'seedycheese.png',
    'sourcreamdonut.png',
    'strawberry.png',
    'strawberryicecr.png',
    'takis.png',
    'tangyturtles.png'

]


myRandomBtn.addEventListener("click", generateRandom());
myBtn.addEventListener("click", generateSpecific());

function generateRandom() {
// Get a random index
random_index = Math.floor(Math.random() * image_array.length);

//Set random index to a var
selected_image = image_array[random_index];

//Display image
img1.src = './snack-images/' + selected_image;
const myDiv = document.getElementById('body');
myDiv.appendChild(img1);

//document.getElementById("body").display = img1;
//document.getElementById("body").style.display=img1;

}

function generateSpecific() {
//if 
point = 0
var crave = document.getElementById("craving");
//var value = crave.value;

var intense = document.getElementById("intensity");
//var value = intense.value;

if (crave.value == 'chocolate') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/chocolavacake.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/oatchoco.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/strawberry.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/pbchocomarsh.png';
    }

}
if (crave.value == 'cold') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/mochi.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/fruityyogurt.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/strawberryicecr.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/chocorasb.png';
    }
}
if (crave.value == 'crunchy') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/pistachio.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/chilipeanut.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/boozmaca.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/pbcaramelpopcorn.png';
    }
}
if (crave.value == 'sweet') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/strawberry.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/strawberry.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/reeses.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/heartattack.png';
    }
}
if (crave.value == 'sour') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/chilipina.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/jellybeanssour.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/tangyturtles.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/sourcreamdonut.png';
    }
}
if (crave.value == 'savory') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/eggsoup.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/ratatouille.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/cheeseburgerpizza.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/macronibite.png';
    }
}
if (crave.value == 'salty') {
    if (intense.value == 'whoknows') {
        img1.src = './snack-images/pretnuggs.png';
    }
    if (intense.value == 'classic') {
        img1.src = './snack-images/takis.png';
    }
    if (intense.value == 'american') {
        img1.src = './snack-images/picklechip.png';
    }
    if (intense.value == 'heart-attack') {
        img1.src = './snack-images/pbjsnack.png';
    }
}

    //document.getElementById("body").innerHTML = img1;

//Display image

const myDiv = document.getElementById('body');
myDiv.appendChild(img1);
}



