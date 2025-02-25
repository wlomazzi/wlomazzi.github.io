/**
* @name: Assignement1
* @Course Code: SODV1201 - 
* @class: Software Development Diploma program.
* @author: Wesley Lomazzi e Souza  / email: w.lomazziesouza407@mybvc.ca
* @description: This is the script file for the Assignment 1. It contains the functions to display the image and the footer information.
*/

/*
Function to display the image name after 10 seconds 
*/
window.addEventListener("load", function() {
    // Wait for 10 seconds (10000 ms)
    setTimeout(function() {
        // Select the necessary elements
        var image = document.getElementById("image");
        var imageName = image.getAttribute("alt");
        var imageElement = document.getElementById("image_name");

        // Show the image name
        imageElement.textContent = imageName;

        // Configure the transition for the size changes and opacity in 10 seconds
        image.style.transition = "width 10s, height 10s, opacity 10s";

        
        // Starts the animation: decreases width, height, and opacity to 0 (at 20 seconds the image disappears)
        image.style.width = "0";
        image.style.height = "0";
        image.style.opacity = "0";
        
        
        // After 10 seconds (totaling 20 seconds from loading), clears the image name
        setTimeout(function() {
            imageElement.textContent = "";
        }, 10000); // 10 segundos adicionais
    }, 10000);
});


/*
    Function to display Copyright and the current date and time in the footer
*/
window.addEventListener("load", function() {
var footer = document.getElementById("footer");

// Formatting date and time as "dd/mm/aaaa hh:mm:ss"
function formatDate(date) {
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = ("0" + date.getSeconds()).slice(-2);
    return "© 2025 Wesley Lomazzi e Souza. All rights reserved |  " +  day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
}


// Function to update the footer content with the current date and time and Copyright
function updateFooter() {
    var now = new Date(); // Get the current date and time
    footer.textContent = formatDate(now);
}

// Update the footer content when the page loads
updateFooter();

// Update the footer content every second
setInterval(updateFooter, 1000);
});
  