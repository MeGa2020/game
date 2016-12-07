var startTime = 0;
var stopTime;
var timer_is_on = 0;
$(document).ready(function(){

  /*******************************Begin page01********************************************/
  /*
  *page 1
  */
  function valid_name()
	{
    var username = $("#username").val();
    if(username != '')
    {

    }
    else {
      alert("Please Enter your Username");
    }
  }
  /*******************************End page01********************************************/
  /***************************************************************************/
  /*******************************Begin time function********************************************/
  function timedCount()
  {
    document.getElementById("txt").value = startTime;
    startTime = startTime + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
  }
  /***************************************************************************/
  function startCount()
  {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
  }
  /***************************************************************************/
  function stopCount()
  {
    clearTimeout(stopTime);
    timer_is_on = 0;
  }
  /*******************************End time function********************************************/
}
