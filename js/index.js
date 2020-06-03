// Your code goes here


let header = document.querySelector("header")
header.onmouseover = mouseOver;
header.onmouseout = mouseOut;

function mouseOver() {
header.style.backgroundColor = "yellow"; 
}

function mouseOut() {
    header.style.backgroundColor = "white"; 
    }
    

    // header.addEventListener("onmouseover", function(event){
    //     event.target.style.backgroundColor = "yellow";
    // })

    // header.addEventListener("onmouseout", function(event) {
    //     event.target.backgroundColor= "white";
       
    // })

document.addEventListener('keydown', alertPopsOut);

function alertPopsOut (event) {
  if (event.target === 'keydown'){
      alert('hi how are you')
  };
}