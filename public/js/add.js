// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  
  var firstName=$("#firstName").val().trim();
  var lastName=$("#lastName").val().trim();
  if (firstName == "" || lastName == "" || firstName.length<5 || lastName.length<5){
    alert("Make sure all the fields are filled and they are atleast 5 character long!");
  }
  else{

  // Make a newStudent object=
  var newStudent = {
    FirstName: firstName,
    LastName: lastName,
    Level: $("#level").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newStudent)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#firstName").val("");
  $("#lastName").val("");
  $("#level").val("");
  }
});