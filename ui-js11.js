var keys = [];

var j = 0;

var save = 0;

localStorage.setItem("keylist",JSON.stringify(keys));

function myfun()
{
	document.getElementById('bd').addEventListener('keypress', keyprsd);
}

function chooseele(char) {
	switch (char) {
		case 'A':
		case 'a':
			var hl = document.getElementById('a');
			var aa = document.getElementById('aa');
			playaudio(aa);
			highlight(hl);
			break;
		case 'S':
		case 's':
			var hl = document.getElementById('s');
			var aa = document.getElementById('ss');
			playaudio(aa);
			highlight(hl);
			break;
		case 'D':
		case 'd':
			var hl = document.getElementById('d');
			var aa = document.getElementById('dd');
			playaudio(aa);
			highlight(hl);
			break;
		case 'F':
		case 'f':
			var hl = document.getElementById('f');
			var aa = document.getElementById('ff');
			playaudio(aa);
			highlight(hl);
			break;
		case 'G':
		case 'g':
			var hl = document.getElementById('g');
			var aa = document.getElementById('gg');
			playaudio(aa);
			highlight(hl);
			break;
		case 'H':
		case 'h':
			var hl = document.getElementById('h');
			var aa = document.getElementById('hh');
			playaudio(aa);
			highlight(hl);
			break;
		case 'J':
		case 'j':
			var hl = document.getElementById('j');
			var aa = document.getElementById('jj');
			playaudio(aa);
			highlight(hl);
			break;
		case 'K':
		case 'k':
			var hl = document.getElementById('k');
			var aa = document.getElementById('kk');
			playaudio(aa);
			highlight(hl);
			break;
		case 'L':
		case 'l':
			var hl = document.getElementById('l');
			var aa = document.getElementById('ll');
			playaudio(aa);
			highlight(hl);
			break;
		default:
			break;
	}
}

function keyprsd(event){
	var ch = event.char || event.charCode || event.which ;
	document.getElementById('sp').innerHTML=ch;
	var char=String.fromCharCode(ch);
	chooseele(char);
}

function StartRecord(){
	localStorage.setItem("keylist",JSON.stringify(["q"]));
	document.addEventListener('keypress', record);
	document.getElementById('rec').style.visibility = "hidden";
	document.getElementById('strec').style.visibility = "visible";
	document.getElementById('play').style.visibility = "hidden";
}

function record(event){
	var ch=event.char || event.charCode || event.which;
	var char=String.fromCharCode(ch);
	chooseele(char);
	var keys=JSON.parse(localStorage.getItem("keylist"));
	keys.push(char);	
	localStorage.setItem("keylist",JSON.stringify(keys));
}

function StopRec() {
	var keys=JSON.parse(localStorage.getItem("keylist"));
	if (keys.length != 1) {
		document.getElementById('rec').style.visibility = "hidden";
		document.getElementById('strec').style.visibility = "hidden";
		document.getElementById('play').style.visibility = "visible";
	}
	else {
		alert('No Keys Are Recorded');
		document.getElementById('rec').style.visibility = "visible";
		document.getElementById('strec').style.visibility = "hidden";
	}
	localStorage.setItem("keys1", JSON.stringify(keys));
}

function StartPlaying(i) {
	j = i;
	var keys = JSON.parse(localStorage.getItem("keys1"));
	if (j < keys.length && j>=0) {
		var s = setTimeout(() => { play(keys, j) }, 150);
		document.getElementById('play').style.visibility = "hidden";
		document.getElementById('rec').style.visibility = "hidden";
		document.getElementById('strec').style.visibility = "hidden";
		document.getElementById('pause').style.visibility = "visible";
		document.getElementById('stop').style.visibility = "visible";
		document.getElementById('resume').style.visibility = "hidden";
	}
	else if (j == -1) {
		return;
	}
	else if (j == 0) {
		return;
	}
	else {
		document.getElementById('play').style.visibility = "visible";
		document.getElementById('rec').style.visibility = "visible";
		document.getElementById('strec').style.visibility = "hidden";
		document.getElementById('pause').style.visibility = "hidden";
		document.getElementById('stop').style.visibility = "hidden";
		document.getElementById('resume').style.visibility = "hidden";
		j = 0;
		return;
	}
}

function play(keys, i) {
	if (j == -1) {
		j = i;
		return;
	}
	if (j == 0) {
		return;
	}
	chooseele(keys[i++]);
	StartPlaying(i);
}

function Pause() {
	save = j;
	document.getElementById('play').style.visibility = "visible";
	document.getElementById('stop').style.visibility = "visible";
	document.getElementById('resume').style.visibility = "visible";
	document.getElementById('pause').style.visibility = "hidden";
	StartPlaying(-1);
}

function Resume() {
	StartPlaying(save);
}

function Stop() {
	document.getElementById('play').style.visibility = "visible";
	document.getElementById('rec').style.visibility = "visible";
	document.getElementById('stop').style.visibility = "hidden";
	document.getElementById('resume').style.visibility = "hidden";
	document.getElementById('pause').style.visibility = "hidden";
	j = 0;
	StartPlaying();
}


function playaudio(aa){
	aa.play();
	s=setTimeout(()=>{aa.pause();aa.currentTime=0;},100);
}
function highlight(hl){
	hl.style.backgroundColor='white';
	var s=setTimeout(()=>{hl.style.backgroundColor='black'},50);
}
