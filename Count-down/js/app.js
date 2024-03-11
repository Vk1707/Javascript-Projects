//Select All Input Tags
const inputs = document.querySelectorAll("input");

const clock = () => {
  //Get Date for countdown
  const inputDate = new Date(document.getElementById("datePicker").value);
  const showDate = inputDate.toDateString();

  //Show Date to User
  document.getElementById("end-date").innerHTML = showDate;

  const end = inputDate;
  const now = new Date();

  //Gives difference b/w time in Milliseconds
  const difference = end.getTime() - now.getTime();

  if (difference <= 0) {
    document.getElementById("end-date").innerHTML = "Invalid input date.";
    return;
  }

  // set interval
  const valId = setInterval( () => {
    const nows = new Date();
    const ends = inputDate;

    //if countdown will complete
    const diff = (ends - nows) / 1000;

    //Calculate Remaining Date
    const days = Math.floor(diff / 3600 / 24);
    inputs[1].value = days;

    // Calculate Remining Hours
    const hours = Math.floor((diff / 3600) % 24);
    inputs[2].value = hours;

    // Calculate Remaining Minutes
    const minutes = Math.floor((diff / 60) % 60);
    inputs[3].value = minutes;

    // Calculate Remaining Seconds
    const seconds = Math.floor(diff % 60);
    inputs[4].value = seconds;

    if (seconds <= 15) {
      sec.classList.add("red");
    } else {
      sec.classList.remove("red");
    }

    //If Countdown will complete
    if (ends <= nows) {
      clearInterval(valId);
      console.log("Interval is Clear");
      
      inputs.forEach(
        (input) =>{
          if (input.value == -1)
           return input.value = "0" ;
          }
      )
      document.getElementById("end-date").innerHTML = "";
      document.getElementById("complete").innerHTML = "Countdown is Over";
      document.getElementById("complete").style.color = 'red';
      document.getElementById("open").innerHTML = "Refresh And Start Again!";
    }
  }, 1000); // Update every second
};
