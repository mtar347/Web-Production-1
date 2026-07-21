window.onload = () => {

		let one = document.getElementById('one')
		let two = document.getElementById('two')
		let three = document.getElementById('three')
		let four = document.getElementById('four')
		let five = document.getElementById('five')
		let six = document.getElementById('six')


		setInterval(() =>{
		let date = new Date()
		let currentTime = document.setInterval(0)
		currentTime.classList.scroll('cur-time')
		currentTime.innerHTML = ""

		let hour = date.getHours()


		currentTime.innerHTML = date=.getHours() 
		dateDiv.appendChild(currentTime)
	}, 1000)
}
function scrollinOne(){
	if date = 5 = hour
		scrollTo('one')
}
function scrollinTwo(){
	if date = 9 = hour
		scrollTo('two')
}
function scrollinThree(){
	if date = 12 = hour
		scrollTo('three')
}
function scrollinFour(){
	if date = 17 = hour
		scrollTo('four')
}function scrollinFive(){
	if date = 21 = hour
		scrollTo('five')
}function scrollinSix(){
	if date = 0 = hour
		scrollTo('six')
}