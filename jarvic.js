const topSect = document.querySelector(".top-sect");
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector("#navbar");
// const floatingNav = document.querySelector(".slideUpBtn");
const slideDwnBtn = document.querySelector(".slideDwnBtn")
const slideUpToggle = document.querySelector(".bi1");
const slideDwnToggle = document.querySelector(".bi2")
const dynamicBtnTxt = document.querySelector("#dynamicBtnTxt");
const topContainer = document.querySelector(".top-container")

toggle.onclick = function(){
    toggle.classList.toggle("active");
    navbar.classList.toggle("active");
}
window.addEventListener(`scroll`, e=>{
    console.log(window.scrollY)
})
console.log(window.innerWidth, window.outerHeight)

slideDwnToggle.onclick = function(){
    topContainer.setAttribute(
        'style',
        'transform: translateY(-0%)' 
    );
    slideDwnBtn.setAttribute(
        'style',
        'transform: rotate(90deg) translateX(-90px);',
        'transition-delay: 2s'
    )
}

        
function topSectSlideUp() {  
    topContainer.setAttribute('style', 'position: absolute') 
    topContainer.setAttribute(
        'style',
        'transform: translateY(-100%)' 
    )   
    slideDwnBtn.setAttribute(
        'style',
        'transform: rotate(90deg) translateX(-45px);'
        )
    // topSect.classList.toggle("active")
}

// document.onclick = function(e){
//     if(e.target.id !== 'navbar' && e.target.id !== 'toggle'){
//         toggle.classList.remove('active');
//         navbar.classList.remove('active');
//     };
// };  