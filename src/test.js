let user = {
    firstname: "ali",
    lastname: "ben ali",
    age: 50,
    adress: {
        zip: 1001,
        street: "16Av jeans"
    }

}
console.log("azer")
let categories = [


    { id: 1, name: "ali" },
    { id: 2, name: "smartphone" }



]


let produits = [


    { id: 1, name: "iphone",prix:"200dt" },
    { id: 2, name: "samsung",prix:"300dt"  }



]
initWebsite()

initWebsitecard();

function initWebsite() {



    let myCategories = document.getElementById("my-categories")
    for (let i = 0; i < categories.length; i++) {

        myCategories.innerHTML = myCategories.innerHTML +
            `<li class ="list-group-item">${categories[i].name} </li>`








    }
}



function initWebsitecard() {



    let myproduit = document.getElementById("my-product")
    for (let i = 0; i < produits.length; i++) {

        myproduit.innerHTML = myproduit.innerHTML +
        
        `<div class="col-lg-4 mt-3">

        <div class="card" style="width: 18rem;">
          <img src="http://placehold.it/700x400" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${produits[i].name}</h5>
            <p class="card-text">${produits[i].prix}</p>
          </div>
          <div class card-footer>
            <button class="btn btn-secondary w-100">
              <i class="fas fa-plus"></i> Add to card
          </button>
          </div>
        </div>


      </div>`


       
        








    }
}


function darkMode(){

let myNavbar=document.getElementById("my-navbar")
let myBtnDarkMode=document.getElementById("my-btn-dark-mode")

let myIconDarkMode=document.getElementById("my-icon-dark-mode")

myNavbar.classList.toggle("navbar-light")
myNavbar.classList.toggle("bg-light")

myNavbar.classList.toggle("navbar-dark")
myNavbar.classList.toggle("bg-dark")


myBtnDarkMode.classList.toggle("btn-light")
myBtnDarkMode.classList.toggle("btn-light")

myIconDarkMode.classList.toggle("fa-moon")
myIconDarkMode.classList.toggle("fa-sun")



}
