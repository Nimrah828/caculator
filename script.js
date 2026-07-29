let display = document.getElementById("display");

// Display par value show karna
function appendValue(value){
    display.value += value;
}

// Clear button
function clearDisplay(){
    display.value = "";
}

// Equal button
function calculate(){

    if(display.value==""){
        alert("Please enter a calculation.");
        return;
    }

    try{
        display.value = eval(display.value);
    }
    catch(error){
        alert("Invalid Expression");
        clearDisplay();
    }

}

// Keyboard Support
document.addEventListener("keydown",function(event){

    let key = event.key;

    if((key>="0" && key<="9") ||
       key=="+" ||
       key=="-" ||
       key=="*" ||
       key=="/" ||
       key=="%" ||
       key=="."){

        appendValue(key);
    }

    else if(key=="Enter"){
        event.preventDefault();
        calculate();
    }

    else if(key=="Backspace"){
        display.value = display.value.slice(0,-1);
    }

    else if(key=="Escape"){
        clearDisplay();
    }

});
