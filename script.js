var countShot = 0
var bulletPosition = random(1,6);
var btnShot = document.querySelector("#shot");
var currentPlayer = 1;
var baraban = document.querySelector("#baraban");
btnShot.onclick = start;
// First click on button "Start"

function start(){
	btnShot.className = "off";
	var bullet = document.querySelector("#bullet");
		bullet.style.display = "block";

	var revolver = document.querySelector("#revolver");
		revolver.style.display = "block";


	btnShot.onclick = "";
	
	
	var rotate = 0;
	var timer = setInterval(function() {
	 rotate = rotate + 10;
		baraban.style.transform = "rotate( "+rotate+"deg)";
		if(rotate>300){
			bullet.style.display ="none";
		}
		if (rotate == 720){
			clearInterval(timer);
			btnShot.innerText = "Сделать выстрел";	
			btnShot.onclick = shot;

			btnShot.className = ""
	
} 
			}, 50)

}

function random(min,max) {
	return Math.floor( Math.random() * (max - min) + min );
}
var rotateBaraban = 0;
function shot() {
	countShot = countShot + 1;

	if(bulletPosition== countShot){
		var blood = document.createElement("div");
			blood.id="blood";
		var player = document.querySelector("#player"+currentPlayer);
		console.log(player);
			player.appendChild(blood);
		endGame();
	} else{

		if(currentPlayer == 1){
			rotationRight();
			currentPlayer = 2;
		} else {
			rotationLeft();
			currentPlayer = 1;	
		}
		rotateBaraban = rotateBaraban + 60;
		var rotate = rotateBaraban

		var timer = setInterval(function(){
			rotate = rotate + 10;
			if(rotate == rotateBaraban+60){
				clearInterval(timer)
				rotateBaraban=rotate
			}
			baraban.style.transform ="rotate("+rotate+"deg)";
		},10)
		
	}
}

var revolver = document.querySelector("#revolver");

function rotationRight() {
	revolver.style.background = 'url("images/revolver-right.png") no-repeat'
}

function rotationLeft() {
	revolver.style.background = 'url("images/revolver-left.png") no-repeat'
}

function endGame(){
	btnShot.innerText = "Рестарт";
	alert("Игра закончена");
	rotationLeft();
	revolver.style.display = "";
	btnShot.onclick = restart;
	
}

function restart() {
countShot = 0
bulletPosition = random(1,6);
player = document.querySelector("#player"+currentPlayer);
player.removeChild(blood);
currentPlayer = 1
start();
}