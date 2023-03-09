// Get the button element
var button = document.getElementById("button2");
//call button inside the function

// Listen for the mouse position
document.addEventListener("mousemove", function (event) {

    // Get the current position of the button
    // var x = parseInt(window.getComputedStyle(button).getPropertyValue("left"));
    // var y = parseInt(window.getComputedStyle(button).getPropertyValue("top"));
    
    var transformValue = window.getComputedStyle(button).getPropertyValue("transform");
    console.log(transformValue);
    var xyValues = transformValue.match(/-?\d+\.?\d*/g);
    var x = parseInt(xyValues[4]);
    var y = parseInt(xyValues[5]); 
    console.log(x, y);


    // Calculate the distance between the button and the cursor
    var distance = Math.sqrt(Math.pow((x - event.clientX), 2) + Math.pow((y - event.clientY), 2));
    console.log(distance)
    // If the distance is less than 150 pixels, move the button away from the cursor
    if (distance < 150) {
        // Calculate the new position of the button
        var newX = x + ((x - event.clientX) / distance) * 20;
        var newY = y + ((y - event.clientY) / distance) * 20;

        // Update the position of the button
        // button.style.left = newX + "px";
        // button.style.top = newY + "px";
        button.style.transform = "translateX(${newX}%) translateY(${newY}%)";
    }
});

// Add a click event listener to the button
button.addEventListener("click", function () {
    // Reset the position of the button to the center of the screen
    button.style.left = "50%";
    button.style.top = "50%";
    button.style.transform = 'translate(56%, 74%)';
});