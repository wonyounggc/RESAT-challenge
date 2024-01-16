<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>RESAT(2)</title>
	<style>
		#container {
			border:solid #000000;
			width:600px;
			height:350px;
			margin:0 auto; 
		}
		#time {
			width:500px; 
			height:240px;
			margin:0 auto; 
			font-size: 40px;
		    font-weight: bolder;
			line-height: 250px;
			text-align: center;
		}
		#btn { 
			width:600px; 
			height:80px;
			margin:0 auto; 
		}
		button {
			background: #ffffff;
			width:120px;  
			height:50px;
			margin:0 38px; 
			font-size: 30px;
			text-align: center;
			border-radius: 10px;
		}
		input {
			width: 120px;
			font-size: 50px;
			text-align: center;				
		}
	</style>
</head>

<body>
	<div id="container">
		<div id ="time">
			<input id="hour" placeholder="23"></input> :
			<input id="min" placeholder="59"></input> :
			<input id="sec" placeholder="59"></input> 
		</div>
		<div id="btn">
			<br>
			<button id="start" onclick="start()">START</button>
			<button id="stop" onclick="stop()">STOP</button>
			<button id="reset" onclick="reset()">RESET</button>
		</div>
	</div>
</body>
</html>

<script>

var sstop = false;

// 입력 받은 시간으로 타이머 설정
function setTimer(){
	let hour = document.querySelector("#hour").value;
	let minute = document.querySelector("#min").value;
	let second = document.querySelector("#sec").value;
	
	let date = new Date();
	date.setHours(hour);
	date.setMinutes(minute);
	date.setSeconds(second);
	
	// 타이머 시간 설정을 0초으로 하면 reset
	if(hour == 0 && minute == 0 && second == 0 ){ 
		reset();
		stop();
	}

	return date;
}

function start(){
	sstop = false;
	console.log("start");

	let date = new Date(setTimer());
	const time = setInterval(function(){
		if(sstop){
			clearInterval(time);
			return;
		}
		date.setSeconds(date.getSeconds()-1);
		console.log(date);
		document.querySelector("#hour").value = date.getHours();
		document.querySelector("#min").value = date.getMinutes();
		document.querySelector("#sec").value = date.getSeconds();

		//설정한 시간이 다 되었으면 "Time is up" 알림 및 reset
		if(date.getHours() == 0 && date.getMinutes() == 0 && date.getSeconds() == 0) {
			console.log("Time is up");
			alert("Time is up !!");
			reset();
			return;
	}
	}, 1000);
}

function stop(){
	console.log("stop");
	sstop = true;
}

function reset() {
	stop();
	document.querySelector("#hour").value = "";
	document.querySelector("#min").value = "";
	document.querySelector("#sec").value = "";
	}

</script>
