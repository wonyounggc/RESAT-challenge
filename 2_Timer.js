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