"use strict";
'use strict'
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


const refs={
startBtn:document.querySelector( 'button[data-action="start"]'),
stopBtn:document.querySelector( 'button[data-action="stop"]'),
bodycolor:document.querySelector('body')

}
let timerId;
refs.startBtn.addEventListener('click',startClick);
function startClick(e){
   timerId= setInterval(event=>{
         let colorIndex=randomIntegerFromInterval(colors.indexOf(colors[0]),colors.indexOf(colors[5]))
         colorIndex=colors[colorIndex];
         refs.bodycolor.style.backgroundColor=colorIndex;
         refs.startBtn.disabled=true;
   },1000)
    }
refs.stopBtn.addEventListener("click",endClick) 
function endClick()  {
    clearInterval(timerId);
    refs.startBtn.disabled=false;
   
  };
  