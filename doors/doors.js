let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
  let openDoor2;
  let openDoor3;
let numClosedDoors = 3;
let currentlyPlaying = true;
const startButton=document.getElementById('start');
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
 

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPat = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath =  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
 doorImage1.onclick = () => {
if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
   playDoor(doorImage1);
}
 
   
   
}
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
   
}
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }

}
 

 startButton.onclick = () => {
   if(!currentlyPlaying) {
startRound();
}

  }
 
 

function randomChoreDoorGenerator()  {
   const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
  openDoor1 = botDoorPath;
    openDoor2 =  beachDoorPat;
    openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) { 
  openDoor2 = botDoorPath;
  openDoor3 =  beachDoorPat;
  openDoor1 = spaceDoorPath;
} else{
  openDoor3 = botDoorPath;
  openDoor2 =  beachDoorPat;
  openDoor1 = spaceDoorPath;
}
 
}



function isClicked(door){
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
}
}



function isBot(door){
   if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
}
function gameOver(status){
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
}else {
  startButton.innerHTML = 'Game over! Play again?'
}
  currentlyPlaying = false;
}
function playDoor(door){
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('win');
}
else if (isBot(door)) {
  gameOver('');
} 
}

function startRound(){
  numClosedDoors=3;
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  startButton.innerHTML='Good luck!';
  currentlyPlaying=true;
  randomChoreDoorGenerator();
}



 startRound();

