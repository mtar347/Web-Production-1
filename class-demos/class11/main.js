// to write coments or hotkey
// crtl + /

// ; are not needed to end a line
// parameter is a value in a function
alert('I\'ve changed this text');
// parameter = this is a javascript alert
// text wrapped in "" or '' is called a string
// \' to make I've not interfear with first ' '
// or " "to differentiate

console.log('this is a console message')

// you need the inspector to see the console stuff function name = log, parameter = 'this is a console message' log belong only to the console or console.log 
// window.addEventListener("load" , () =>{
	// console.log("page is fully loaded")
// })

// window.onload = () =>{
	// console.log("page is loaded")
// }
// both work 

// addEventListener = function, load is parameter, which event we are looking for we are waiting for the window to finish load the html ()=>{} parameter 2, the action / functionexecutewhen the page has fully loaded

window.addEventListener("load", ()=>{
	// all the code that changes the html/css will live inside these {}
	console.log("page has loaded, js connected")
	document.getElementById('big-paragraph').textContent = 'changed with js'
// getElementById is the function to retrieve an element name, 'big-paragraph' name of the id without#, .textContent = html inside of the <p> to change does not accept html tags in the text or .innerHTML = does include the html tags
// querySelector() function to retrieve an element using css selector syntax it retrieves the first item that matches the css selector
document.querySelector('.red-paragraph').innerHTML = '<em> changed again </em>'	

document.querySelector('#big-paragraph').style.backgroundColor = '#454e9e'
// querySelector for ids needs css selector with # to grab the style we use .style, to change a specific style property we use the css property name without hypen(-)
// converting the css rule to js
// grab another id and add a class to it, add() is function name, red-paragraph is parameter of the class name you want to add
document.querySelector('#another').classList.add('red-paragraph')


// creating variable to avoid rewritinggetElementById over and over
let sp = document.getElementById('special')
sp.textContent = 'this is a very special paragraph'
sp.style.color = '#f00699'
sp.style.fontSize = '50px'

// remove elements
let another = document.querySelector('#another')
another.remove()



// add html elements after the page has loaded
// 1. use the createElement() function to decide which tag is being created
let newElement = document.createElement('h1')
// 2. make any changes to the element as needed
newElement.textContent = 'this was added with js'
// .3 add the element to the page
document.body.appendChild(newElement)
	// we can add to the body or the parent container

document.querySelector('#container').appendChild(newElement)

})
// window.onload = () => {} // shorthand
// to change element grab the specific element
