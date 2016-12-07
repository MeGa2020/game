var startTime = 0;
var stopTime;
var timer_is_on = 0;
var arraycolor = {firstrow:{}, secondrow:{},thirdrow:{}};
var Colors = {
    aqua: "#00ffff",
    azure: "#f0ffff",
    beige: "#f5f5dc"
  };
/*Colors.names = {
    aqua: "#00ffff",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    black: "#000000",
    blue: "#0000ff",
    brown: "#a52a2a",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    fuchsia: "#ff00ff",
    gold: "#ffd700",
    green: "#008000",
    indigo: "#4b0082",
    khaki: "#f0e68c",
    lightblue: "#add8e6",
    lightcyan: "#e0ffff",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    magenta: "#ff00ff",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    orange: "#ffa500",
    pink: "#ffc0cb",
    purple: "#800080",
    violet: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    white: "#ffffff",
    yellow: "#ffff00"
};*/
Colors.random = function() {
    var result;
    var count = 0;
    for (var prop in this.names)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
};
alert(Colors);
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
  function RandomCalculationNumber(min,max)
  {
    var randomNumber = Math.floor((Math.random() * max) + min);
    return randomNumber;
  }

  function RandomCalculationColor()
  {
    var randomColorNum = 0;
    for(var i=0;i<9;i++)
    {
      if(randomColorNum != 0)
      {
        randomColorNum = Math.floor((Math.random() * 3) + 1);
        if(i < 3)
        {
          arraycolor["firstrow"].push(Colors[randomColorNum]);
        }
        else if (i < 6) {
          arraycolor["secondrow"].push(Colors[randomColorNum]);
        }
        else if (i < 9) {
          arraycolor["thirdrow"].push(Colors[randomColorNum]);
        }
      }
    }
  }
  function shuffle(o) {
    for(var j, x, i = o.length; i;
      j = parseInt(Math.random() * i),
      x = o[--i], o[i] = o[j], o[j] = x);
    return  o;
 };
}
