// Connects HTML button to Javascript function.
document.getElementById('submit').addEventListener('click', week)

// Variables store the info that user inputs.
let userAge = 0
let dayOfWeek = 'Saturday'

// This function will occur when the user inserts info into both input boxes and then clicks "Submit".
function week () {
  // These tell the program to take whatever was inserted into those boxes and use them for the calculations below.
  userAge = document.getElementById('age').value
  userAge = parseInt(userAge)
  dayOfWeek = document.getElementById('day').value
  // If the user's age less than or equal to 18, then display the corresponding message below.
  if ((userAge <= 18) && (dayOfWeek !== 'Saturday') && (dayOfWeek !== 'Sunday')) {
    document.getElementById('reveal').innerHTML = 'Time for school! Have fun!'
    // If the statement above is false but the statement below is true, then display the message below.
    // If the user is older than 18 and it's a weekday, then display the message below.
  } else if ((userAge >= 18) && (dayOfWeek !== 'Saturday') && (dayOfWeek !== 'Sunday')) {
    document.getElementById('reveal').innerHTML = 'Time to go to work! Have fun!'
    // If both statements above are false, and for every other scenario, display the message below.
  } else {
    document.getElementById('reveal').innerHTML = 'Time to relax for the weekend! Enjoy!'
  }
}
