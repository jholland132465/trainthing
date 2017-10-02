/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
 var config = {
    apiKey: "AIzaSyDzj6uK-lnMlu097KVI24fyBrVRorduYTc",
    authDomain: "trainthing-c568e.firebaseapp.com",
    databaseURL: "https://trainthing-c568e.firebaseio.com",
    projectId: "trainthing-c568e",
    storageBucket: "trainthing-c568e.appspot.com",
    messagingSenderId: "17099464899"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#employee-name-input").val().trim();
  var trainArrival = $("#role-input").val().trim();
  var trainDestination = $("#start-input").val().trim();
  var moreTrainStuff = $("#rate-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    role: trainArrival,
    start: trainDestination,
    rate: moreTrainStuff
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);


  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainArrival = childSnapshot.val().role;
  var trainDestination = childSnapshot.val().start;
  var moreTrainStuff = childSnapshot.val().rate;

  // Employee Info


  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainArrival + "</td><td>" + moreTrainStuff + "</td><td>")
});



