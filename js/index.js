// Your code goes here


let header = document.querySelector(".main-navigation")
//mouseover
function launchOne (event){
  header.style.backgroundColor = "lightblue";
  console.log('this is mouseover', event.target)
}

header.addEventListener('mouseover', launchOne)
//mouseout
function launchTwo (event){
  header.style.backgroundColor = "white";
  console.log('this is mouseout', event.target)
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
  console.log(scrolled);
})



// * [ ] Using your [index.js file](js/index.js), create 10 
// [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events).
//  using your creativity to make the Fun Bus site more interactive.  Here are some
//   unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `mouseout`
// 	* [ ] `keydown`
// 	* [ ] `scroll`

// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `select`
// 	* [ ] `dblclick`



