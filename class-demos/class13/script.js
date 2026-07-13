window.onload = () =>{
	setTimeout(sayHello, 5000)

	// this timeout will not happen because it will be cleared
	let mytimer = setTimeout(hi, 2000)
	console.log(mytimer)

// setting variable mytimeer to an id that is created when timer is set
	clearTimeout(mytimer) //removing timer
	let myint = setInterval(myInterval, 3000)


	// add a time that repeats every 3 seconds
	document.body.addEventListener("click", () =>{
		console.log(myint)
		clearInterval(myint)
		console.log('click')
		document.querySelector('#content').innerHTML = ""
	})

	// create a new date using date class
	let date = new Date()
	console.log(date)
	console.log(date.toString())

	let dateDiv = document.querySelector('#date')
	dateDiv.textContent = date.toString()
	let day = document.createElement('p')
	day.textContent = date.getDate()
	dateDiv.appendChild(day)

	let hours = document.createElement('p')
	hours.textContent = 'hour' + date.getHours()
	dateDiv.appendChild(hours)


	// show the whole time
	// this time is static and doesnt update
	let current = document.createElement('p')
	current.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
	dateDiv.appendChild(current)

	setInterval(() =>{
		let date2 = new Date()
		let currentTime = document.createElement('p')
		currentTime.classList.add('cur-time')
		currentTime.innerHTML = ""

		dateDiv.innerHTML = ""
		let min = date2.getMinutes()
		if(min < 10){
			min = "0" + min
		}
		let sec = date2.getSeconds()
		if(sec < 10){
			sec = "0" + sec
		}
		currentTime.innerHTML = date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds()
		dateDiv.appendChild(currentTime)
	}, 1000)
}


	// document.querySelector('#date').text = date.toString()

// 1st peram function name that is call affter ms has passed
// 2nd param ms before funtion is executed
// setTimeout(sayHello, 5000)
// define sayHello

// only code to be writen after window.onload are function declarations

// function is just like 'let' but to make a function unstead of a variable
function sayHello(){
	console.log("hello")
	document.getElementById('content').textContent = "hello"
}
function hi(){
	console.log('hi')
}


function myInterval(){
	console.log('3 seconds')
	let newElement = document.createElement('span')
	newElement.textContent = "hi "
	document.querySelector('#content').appendChild(newElement)
}

function handleClick(){
	console.log('click')
	document.querySelector('#content').innerHTML = ""
}