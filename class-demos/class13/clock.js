window.addEventListener("load", () =>{
	let dateElement = document.querySelector("#date")
	// let date = new Date()
	let currentTime = Date.now()
	console.log(currentTime)

	// Date.now() get the time since epoch (jan 1 1970) in ms

	document.body.addEventListener("click", ()=>{
		console.log(Date.now())
		let newTime = Date.now()
		// print out time strring (this is a string without cal using getminutes, gethours, getsecond
		let stringTime = newTime.toLocaleTimeString()
		console.log(stringTime)
	})

	// added movement based off time ussing css
	let movement = document.querySelector("#move")

	// setting starting number
	let starting = 50
	// converting to px string for css
	movement.style.top = starting + "px"


// 1st param anonymous function that is the action
	// 2nd param (100): time in ms
	setInterval(() =>{
		// changing position by 1 
		starting =starting + 1
		// if the starting var is > 100 reset it back to original position
		if(starting > 100){
			starting = 50
		}
		movement.style.top = starting + "px"
	}, 100)

})