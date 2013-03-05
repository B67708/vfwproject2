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
// Creates form for make drop down menu.
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
	
// Creates form for model drop down menu.
function dropDown2(){
	var formTag = document.getElementsByTagName("form"),
		pickLi = gid("model"),
		createSelect = document.createElement("select");
		createSelect.setAttribute("id", "model");
		for(var i=0, j=modelList.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optionTxt = modelList[i];
			makeOption.setAttribute("value", optionTxt);
			makeOption.innerHTML = optionTxt;
			createSelect.appendChild(makeOption);
		}		
		pickLi.appendChild(createSelect)
}

//Find value of selected radio button
function getRadio(){
	var rad = document.forms[0].newUsed;
		for(var i=0; i<rad.length; i++){
			if(rad[i].checked){
				newUsedValue = rad[i].value;
			}
		}
}

// Making switch case function to toggle links

function toggle(x){
	switch(x){
		case "on":
			gid("vehLib").style.display = "none";
			gid("clear").style.display = "inline";
			gid("display").style.display = "none";
			gid("addCar").style.display = "inline";
			break;
		case "off":
			gid("vehLib").style.display = "block";
			gid("clear").style.display = "inline";
			gid("display").style.display = "inline";
			gid("addCar").style.display = "none";
			gid("item").style.display = "none";
			break;
		default:
			break;
			return false;
		}
	
}

	
// Variable Defaults
var makeList = ["--Choose a make--", "Chevrolet", "Ford", "Buick", "Dodge", "Jeep"],
	modelList = ["--Choose a model--", "Cruze", "Impala", "Cobalt", "Camaro", "Focus", "Explorer", "Fusion", "F-150", "Regal", "Lacrosse", "Enclave", "Century", "Viper", "Ram", "Dart", "Durango", "Wrangler", "Liberty", "Patriot", "Compass"];
dropDown1();
dropDown2();



// Links and submit button
var display = gid("display");
display.addEventListener("click", getData);

var clear = gid("clear");
clear.addEventListener("click", clearData);

var submit = gid("submit");
submit.addEventListener("click", submitData);


	


})