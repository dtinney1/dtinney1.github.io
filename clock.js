"use strict";

/*
 
*/
runClock();

setInterval("runClock()", 1000)
function runClock()
{


   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   var newYear = new Date("May 10, 2023");
   var nextYear = currentDay.getFullYear();
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   var minLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minLeft - Math.floor(minLeft)) * 60;

   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}