const container=document.querySelector('.counter');
const buttonDiv=document.querySelector('.buttons');
const secInput=document.getElementById('seconds');

var seconds;
var remseconds;
var minutes;
var tocount=false;

function tosubmit(){
	display('start');
	remove('seconds');
	remove('ok');
	seconds=Number(secInput.value);
	counting();
}

function display(e){
	document.getElementById(e).style.display='block';
}

function remove(e){
	document.getElementById(e).style.display='none';
}

function check(start){
	tocount=start.value;
	if(start.id=="start"){
		display("stop");
		remove("start");
	}
	else if(start.id=="stop"){
		display("continue");
		remove("stop");
	}
	else{
		display("stop");
		remove("continue");
	}
}

function count(){
	if(seconds>0){
		if(tocount == true){
			seconds--;
			remseconds=seconds%60;
			minutes=Math.floor(seconds/60);
			if(minutes<10){
				minutes="0" + minutes;
			}	

			if(seconds<10){
				seconds="0" + seconds;
			}
			container.innerHTML=minutes+" : "+seconds;
		}
	}
	else{
		container.innerHTML="DONE!";
	}
}

function counting(){
	remseconds=seconds%60;
	minutes=Math.floor(seconds/60);
	if(minutes<10){
		minutes="0" + minutes;
	}

	if(seconds<10){
		seconds="0" + seconds;
	}
	container.innerHTML=minutes+" : "+seconds;
	setInterval(count,1000);

}