        // console.log(time)
const hoursElement = document.getElementById("hours")
const minElement = document.getElementById("min")
const secondElement = document.getElementById("second")
const amPmElement = document.getElementById("amPm")

setInterval(() => {
const time = new Date();
let hours = time.getHours();
let amPm  = "AM"
if(hours > 11 ){
   amPm = "PM" 
} if(hours > 12){
  hours -=12
}


 hoursElement.innerHTML=(hours<10?"0":"") + hours;
 minElement.innerHTML =(time.getMinutes()<10?"0":"") + time.getMinutes()     
 secondElement.innerHTML = (time.getSeconds()<10?"0":"")+ time.getSeconds()
 amPmElement.innerHTML = amPm     


}, 1000);