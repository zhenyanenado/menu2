let c = console.log;
let grids = document.getElementsByClassName('map');
let menu = document.getElementsByClassName('menu');

let photos = [
	"url('1.jpg')",
	"url('2.jpg')",
	"url('3.jpg')",
	"url('4.jpg')",
	"url('5.jpg')",
	"url('6.jpg')",
];

function showMoon(){
	let number = 0;
	
	do{
		grids[number].style.backgroundImage = photos[number];
		grids[number].style.opacity = 1;
		number++;
	}
	while(number <6);
}

function showMenu(){
	let number = 0;
	
	for(let i = 0; i<6; i++){
		if(i != 3) grids[i].style.opacity = 0;
	}

	for(let i = 0; i<2; i++){
		menu[i].style.opacity = 1;
	}
}

let s = setTimeout(showMoon, 1000);
let s2 = setTimeout(showMenu, 2000)