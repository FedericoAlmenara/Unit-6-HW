
var animal = "cat";
$("#cat-button").on("click", function () {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + animal;
    console.log("cat")
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {

            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            var catImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr({"alt": "cat image", "height":"200px", "width":"200px"});

            // Prepending the catImage to the images div
            $("#images").prepend(catImage);
        });
});

$("#dog-button").on("click", function () {
    var dog = "dog";
    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + dog;
    console.log("Dog")
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {

            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            var dogImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            dogImage.attr("src", imageUrl);
            dogImage.attr({"alt": "dog image", "width":"200px", "height":"200px"});

            // Prepending the catImage to the images div
            $("#images").prepend(dogImage);
        });
});

var searchTerm = $("#searchTerm");

$("#search").on("click", function () {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + searchTerm;
    console.log("animal");

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var imageUrl = response.data.image_original_url;

            var animalGif = $("<img>");
            var animalButton = $("<button>");

            animalGif.attr("src", imageUrl);
            animalGif.attr({"alt": "animal gif", "height":"200px", "width":"200px"});

            $("#images").prepend(animalGif);
            $("buttonHolder").prepend(animalButton);

        });
});