function startTime (){
	today = new Date()
	var hours = today.getHours()
	var minutes = today.getMinutes()
	var seconds = today.getSeconds()

	if (hours >= 13) {
		hours = hours - 12
	}
	


	minutes = checkTime(minutes)
	seconds = checkTime(seconds)

	document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds

 	setTimeout(function () {
        startTime()
    }, 1000)

	function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

    
}
}
document.getElementById('clock').addEventListener('onload', startTime(), false)
