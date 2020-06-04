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



let contentDestination = document.querySelector(".content-destination")
let input = document.createElement("input")
let form = document.createElement("form")
form.id = "form"
contentDestination.appendChild(form)
form.appendChild(input)
console.log(form)
input.style.display = "flex"
input.style.width = "600px"
input.style.marginTop = "20px"
input.style.padding = "25px"
let inputButton = document.createElement("button")
inputButton.textContent = "submit"
inputButton.style.margin = "20px 220px"
inputButton.style.padding = "10px"
inputButton.style.width = "150px" 
inputButton.style.backgroundColor = "white"
inputButton.style.color = "black"
inputButton.style.fontSize = "1.4rem"
form.appendChild(inputButton)
let paragraph = document.createElement("p")
contentDestination.appendChild(paragraph)
paragraph.id = "log"
let log = document.querySelector("#log")
console.log(paragraph)


//focus & blur

input.addEventListener('focus', function(event){
event.target.placeholder = "Type away :)"
})
input.addEventListener('blur', function(event){
  event.target.placeholder = "Tell us what your dream destination look like?"
  })


//submit event
form.addEventListener('submit', function(event){
  log.textContent = `Comment submitted! Timestamp: ${event.timeStamp}`
  event.preventDefault()
})


//drag
inputButton.draggable = true;

inputButton.addEventListener('drag', function(event){
event.target.style.backgroundColor = "orange"
console.log('user dragged button')
})


//click

let allH2 = document.querySelectorAll("h2")

allH2.forEach(function(item){
  item.addEventListener('click', function(event){
    event.target.style.fontSize = "6rem"
    event.target.style.color = "purple"
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




