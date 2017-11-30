
//randomly select all <input> elements from inside <form name="gameBoard">
//Also, create a new array which holds the original 

//Create empty array "ranArray[]"
//Use for loop to run a code block the same number of times as the number of elements in 
//   the built-in "forms[]" array (16 times because there are 16 elements in the <form name"gameBoard">)
//In the code block, I 1: declared a variable "nOfInputs" equal to the number of elements inside the <form name"gameBoard">
//  then 2: declared a variable random 


var formArray = document.forms[0];
var newRanArray = [];

function ranButton(){
	for(i = 0; i < formArray.length; i++){
		var nOfInputs = formArray.length;
		var randomButton = formArray.elements[Math.floor(Math.random()*nOfInputs)];
		var newArrayItem = newRanArray.push(randomButton);
	};
}



function randomItem(r){
	var x = newRanArray;
	return x;
}


function addWithLoop(){
	for(i = 0; i < formArray.length; i++){
		newRanArray[i] = function(){
			var nOfInputs = formArray.length;
			var randomButton = formArray.elements[Math.floor(Math.random()*nOfInputs)];
		}
	}
}




//store forms[0] object in new variable
var formObj = document.forms[0];

//store random element from forms[0] in new variable
var ranItem = formObj.elements//[Math.floor(Math.random()*formObj.length)];

//add this element to a new array object
var newArray = new Array(ranItem);

//remove this element from the forms[0] object 






var data = ["brain", "mitochondria", "microsope", "beaker", "beaker-2", "scientist", "cell", "atom"];

while (data.length) {
  document.write(data.splice(data.length * Math.random() | 0, 1)[0] + '<br>');
}




//DO NOT DELETE!!!   DO NOT DELETE!!!   DO NOT DELETE!!!   DO NOT DELETE!!!
//


function color1(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[0].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[0].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[0].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[0].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[0].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[0].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[0].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[0].style.backgroundColor = "black";
			break;
	}
}
function color2(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[1].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[1].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[1].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[1].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[1].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[1].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[1].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[1].style.backgroundColor = "black";
			break;
	}
}
function color3(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[2].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[2].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[2].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[2].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[2].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[2].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[2].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[2].style.backgroundColor = "black";
			break;
	}
}
function color4(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[3].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[3].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[3].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[3].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[3].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[3].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[3].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[3].style.backgroundColor = "black";
			break;
	}
}
function color5(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[4].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[4].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[4].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[4].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[4].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[4].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[4].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[4].style.backgroundColor = "black";
			break;
	}
}
function color6(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[5].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[5].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[5].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[5].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[5].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[5].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[5].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[5].style.backgroundColor = "black";
			break;
	}
}
function color7(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[6].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[6].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[6].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[6].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[6].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[6].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[6].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[6].style.backgroundColor = "black";
			break;
	}
}
function color8(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[7].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[7].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[7].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[7].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[7].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[7].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[7].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[7].style.backgroundColor = "black";
			break;
	}
}
function color9(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[8].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[8].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[8].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[8].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[8].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[8].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[8].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[8].style.backgroundColor = "black";
			break;
	}
}
function color10(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[9].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[9].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[9].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[9].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[9].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[9].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[9].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[9].style.backgroundColor = "black";
			break;
	}
}
function color11(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[10].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[10].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[10].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[10].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[10].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[10].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[10].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[10].style.backgroundColor = "black";
			break;
	}
}
function color12(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[11].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[11].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[11].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[11].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[11].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[11].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[11].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[11].style.backgroundColor = "black";
			break;
	}
}
function color13(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[12].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[12].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[12].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[12].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[12].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[12].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[12].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[12].style.backgroundColor = "black";
			break;
	}
}
function color14(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[13].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[13].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[13].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[13].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[13].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[13].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[13].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[13].style.backgroundColor = "black";
			break;
	}
}
function color15(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[14].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[14].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[14].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[14].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[14].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[14].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[14].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[14].style.backgroundColor = "black";
			break;
	}
}
function color16(){
	var shit = Math.floor(Math.random() * 8 + 1);
	switch(shit){
		case 1: 
			formObj.elements[15].style.backgroundColor = "blue";
			break;
		case 2: 
			formObj.elements[15].style.backgroundColor = "red";
			break;
		case 3: 
			formObj.elements[15].style.backgroundColor = "purple";
			break;
		case 4: 
			formObj.elements[15].style.backgroundColor = "green";
			break;
		case 5:
			formObj.elements[15].style.backgroundColor = "yellow";
			break;
		case 6: 
			formObj.elements[15].style.backgroundColor = "brown";
			break;
		case 7:
			formObj.elements[15].style.backgroundColor = "orange";
			break;
		case 8: 
			formObj.elements[15].style.backgroundColor = "black";
			break;
	}
}

function callFns(){
	for(i = 0; i < 10; i++){
		color1();
		color2();
		color3();
		color4();
		color5();
		color6();
		color7();
		color8();
		color9();
		color10();
		color11();
		color12();
		color13();
		color14();
		color15();
		color16();
	};
}



















