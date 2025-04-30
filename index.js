 let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0



//  console.log(countEl)
 console.log(saveEl)


function increment() {
  count +=  1
countEl.textContent = count
}



// function saved (){
//     console.log(count) 
// }
//  saved()


 function save (){
    let countStr = count  + " - "
 
saveEl.textContent += countStr
countEl.textContent = 0
count = 0
}
   
  // timming within a specify days
  
  function updateClock (){
    const now = new Date();

    const hours = String(now.getHours()).padStart(2 , "0");
    const minutes = String(now.getMinutes()).padStart(2 , "0");
    const seconds = String(now.getSeconds()).padStart(2 , "0");

    const DaysOfWeek = ["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","Saturday"];
    const DayName = DaysOfWeek[now.getDay()];

    document.getElementById("clock").textContent = `${hours} ${minutes} ${seconds}`;
    document.getElementById("day").textContent = DayName;

  }

  updateClock()
  setInterval(updateClock)


    
