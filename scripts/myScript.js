//Variables that are run throughout the javascript
var click = 0;
var count = 0;
//Starts the Jquery functions to create the page
$(document).ready(function() {
  //Creates a new row with two buttons and a counter underneath each output
  $('#generateRow').on('click', function(){
  //Count's how many new rows you are making and stores them.
  click++;
  //Creates a new div class for each row that you create
  var newDiv = document.createElement('div');
  newDiv.className = 'container';
  newDiv.id = 'row' + click;
  //Creates the first button change underneath each new div
  var changeButton = document.createElement('button');
  changeButton.textContent = 'change';
  changeButton.className = 'change';
  //Makes it so it is visible to the user to see and click
  newDiv.appendChild (changeButton);
  //Creates a delete button underneath the div right next to the change button
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.className = 'delete';
  //Allows the user to see the delete button and click on it after the row is created
  newDiv.appendChild(deleteButton);
  //Allows the user to visually see them, without the p tag or any tag to bring it to
  //the DOM the user won't be able to see the buttons created
  var clickOutput = document.createElement('p');
  //Makes it visually seeable instead of just the code that runs in the background
  newDiv.appendChild(clickOutput);
  //Allows the user to see the buttons after generate row is created
  $('body').append(newDiv);
  //Allows the user to actually see the number of times the person has clicked the
  //Generate button
  $('p').text(click);
  });
});
//New thread that changes the background of the div
$(document).on('click', '.change', function(){
  //Every time the user presses the change button it is stored within the global variable
  count++;
  //States that I want to look at the parent of the button class, not just the button
  //itself
  var parent = $(this).parent();
  //Inputs from the count variable so if it is even it will be yellow, if it is red it will
  //be red and will compute until you either delete the div or reload the page
  if(count % 2 === 0){
    parent.removeClass().addClass('yellow');
    parent.css({'background-color': 'yellow'});
  } else {
    parent.removeClass().addClass('red');
    parent.css({'background-color': 'red'});
  }
});

//Allows you to delete the div that the button is in. this.parent makes it so that instead
//of just deleting the button you are deleting the div that created that button in the
//first place
$(document).on('click', '.delete', function(){
  $(this).parent().remove();
});
