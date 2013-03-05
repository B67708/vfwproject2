// John Cardiff-Winchell
// VFW 1303
// Project week 2

// Wait until DOM is loaded
window.addEventListener("DOMContentLoaded",function(){

// Function to get elements by id
function gid(x){
	var element = document.getElementById(x);
	return element;
}
// Create forms for drop down menu.
function dropDown1(){
	var formTag = document.getElementsByTagName("form"),
		pickLi = gid("make"),
		createSelect = document.createElement("select");
		createSelect.setAttribute("id", "make");
		for(var i=0, j=makeList.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optionTxt = makeList[i];
			makeOption.setAttribute("value", optionTxt);
			makeOption.innerHTML = optionTxt;
			createSelect.appendChild(makeOption);
		}		
		pickLi.appendChild(createSelect)
}	
	
	
// Variable Defaults
var makeList = ["--Choose a make--", "Chevrolet", "Ford", "Buick", "Dodge", "Jeep"];
dropDown1();

// Links and submit button
var display = gid("display");
display.addEventListener("click", getData);

var clear = gid("clear");
clear.addEventListener("click", clearData);

var submit = gid("submit");
submit.addEventListener("click", submitData);




})