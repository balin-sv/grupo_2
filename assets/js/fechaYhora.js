function display() {
    setInterval(function () {
      var dateAndTime = new Date();
      // get the date as a string
      var date = dateAndTime.toDateString();
      // get the time as a string
      var time = dateAndTime.toLocaleTimeString();
  
      // find the html element with the id of time and date
      // set the innerHTML of that element to the date a space the time
  
      document.getElementById("date").innerHTML = date;
      document.getElementById("time").innerHTML = time;
    }, 1000);
  }
  