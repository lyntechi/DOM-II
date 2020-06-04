// Your code goes here


let header = document.querySelector(".main-navigation")
//mouseover
function launchOne (event){
  header.style.backgroundColor = "lightblue";
 
}

header.addEventListener('mouseover', launchOne)
//mouseout
function launchTwo (event){
  header.style.backgroundColor = "white";
  
}

header.addEventListener('mouseout', launchTwo)



//keydown

function closeOnEsc (event){
  if (event.key === 'Escape'){
    console.log(prompt('Were you satisfied with our content?'))
    
  }
}
document.addEventListener('keydown', closeOnEsc)

//scroll

window.addEventListener('scroll', function (){
  let scrolled = window.scrollY;
  if (scrolled === 1024){
    alert('you have reached the end of the page')
  }

})

//dbclick
let imgFunBus = document.querySelector(".intro img")
imgFunBus.addEventListener('dblclick', function (event){
imgFunBus.src = 'https://images.unsplash.com/photo-1591155660724-7976243c7fb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1446&q=80';
imgFunBus.style.height = "300px";
imgFunBus.style.width = "800px"

})

//contextmenu

let noContext = document.querySelectorAll("p")

noContext.forEach(function(item){
item.addEventListener('contextmenu', function(event){
event.preventDefault();
})
})



// * [ ] Using your [index.js file](js/index.js), create 10 
// [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events).
//  using your creativity to make the Fun Bus site more interactive.  Here are some
//   unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `mouseout`
// 	* [ ] `keydown`
// 	* [ ] `scroll`
// 	* [ ] `dblclick`

// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `select`




