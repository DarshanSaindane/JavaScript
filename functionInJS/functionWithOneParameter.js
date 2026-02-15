function displayMessage(display){
    console.log(display);
}

displayMessage("hey darshan");
displayMessage("good to see you");

// Function with default parameter

function message(display="function with default parameter"){
    console.log(display);
}

message();
message("function with parameter");