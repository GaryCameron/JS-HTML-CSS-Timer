
// import Swal from 'node_modules/sweetalert2/dist/sweetalert2.js'
// const Swal = require('node_modules/sweetalert2/dist/sweetalert2.js')


let seconds = document.getElementById("seconds")
let minutes = document.getElementById("minutes")
let hours = document.getElementById("hours")
// let millisecs = seconds / 3600

const start = document.getElementById('start')

let alarm = new Audio("Assets/sounds/Annoying_Alarm_Clock-UncleKornicob-420925725.mp3")

startFunction = () => {
    secondCount()
    startAnimation()
    start.disabled = true;
}

secondCount = () => {
    reducer = setInterval(function(){
        document.getElementById('hours').style.color = 'white'
        document.getElementById('minutes').style.color = 'white'
        document.getElementById('seconds').style.color = 'white'
        document.getElementById("timerDisplay").textContent = makeTwoDigits(hours.value) + " : " + makeTwoDigits(minutes.value) + " : " + makeTwoDigits(seconds.value)

        if (seconds.value==""&&minutes.value==""&&hours.value==""){
            return
            
        
        }
        if (seconds.value!=""||minutes.value!=""||hours.value!=""){
            seconds.value--
        }
        if (seconds.value == 0 && minutes.value == 0 && hours.value >= 1){
            hours.value--
            minutes.value = 59
            seconds.value = 59  
        } 
        if (hours.value == 0 && seconds.value == 0 & minutes.value >= 1){
            minutes.value--
            seconds.value = 59
        }
        if (hours.value >= 1 && seconds.value == 0 && minutes.value >=1){
            minutes.value--
            seconds.value = 59
            seconds.value--
        }
        if (minutes.value == 0 && hours.value >= 1){
            hours.value--
            minutes.value = 59
        }
        if (hours.value == 1 && minutes.value == 1 && seconds.value == 0){
            hours.value--
            minutes.value = 59
            seconds.value = 59
        }
        if (hours.value == 0 && seconds.value <= 0 && minutes.value == 0){
        timeup()
        }
        }, 1000)
}

resetFunction = () => {
    if (seconds.value != 0){
        seconds.value = 0
    }
    if (minutes.value != 0){
        minutes.value = 0
    }
    if (hours.value != 0){
        hours.value = 0
    }
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0){   
        location.reload() 
    }  
    pauseAlarm() 
    start.disabled = false 
}

stopFunction = () => {
    clearInterval(reducer)
    start.disabled = false 
    removeAnimation()
    pauseAlarm()
    return 
}


timeup = () => {
    if(seconds.value == 0){
        seconds.value = 00
        minutes.value = 00
        hours.value = 00
        clearInterval(reducer)
        document.getElementById("timerDisplay").textContent = makeTwoDigits(hours.value) + " : " + makeTwoDigits(minutes.value) + " : " + makeTwoDigits(seconds.value)
        timerAnimation()
        return
    } 
}

startAnimation = () => {
    let element = document.getElementById("timerDisplay")
    element.classList.add("animated", "jackInTheBox")
}

timerAnimation = () => {
    playAlarm()
    let element = document.getElementById("displays")
    element.classList.add("animated", "flash", "infinite")
    element.style.color = 'red'
    let element1 = document.getElementById("timerDisplay")
    element1.style.color = 'red'
}

removeAnimation = () => {
    let element = document.getElementById("displays")
    element.classList.remove("animated", "flash", "infinite")
    element.style.color = 'white'
}

makeTwoDigits = (n) => {
        return (n < 10 && n >= 0 ? "0" : "") + n
}

playAlarm = () => {
    alarm.play()
}

pauseAlarm = () => {
    alarm.pause()
}



























// //Set date counting down to
// let countDownDate = new Date("Aug 29, 2019 10:38:00").getTime()

// //Swap out for user entered time********



// let inputday = document.getElementById("userDays").value 
// let inputhour = document.getElementById("userHours").value
// let inputmins = document.getElementById("userMins").value
// let inputsecs = document.getElementById("userSecs").value




// clicker = () => {
//     let inputsecs = document.getElementById("userSecs").value
//     console.log(inputhour) //printing inputsecs value
//     console.log(inputmins) //printing inputsecs value
//     console.log(inputsecs) //printing inputsecs value
//     event.preventDefault()
// }






//Update count every one second
// let timer = setInterval(function() {

//     //Get todays date and time
//     let now = new Date().getTime()

//     //Find distance between now and countdown date
//     let distance = countDownDate - now

//     //Time calcs, days hours mins
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24))
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000)

//     //Display in HTML with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m "+ seconds + "s "

//     //DISPLAY TEXT WHEN COUNT IS FINISHED
//     if (distance < 0) {
//         clearInterval(now)
//         document.getElementById("demo1").innerHTML = "Timer Finished"
        
//         // finished()
//     }
// }, 1000)

// finished = () => {
//     return alert("Timer Finished")
// }