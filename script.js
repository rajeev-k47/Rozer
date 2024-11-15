//foreground working js
let initial = Date.now()
let prev
function handleKeyDown(event) {
    initial=Date.now()
    console.log('Key pressed:',event.key);
    //  document.getElementById('text').innerText=event.key

    if(initial-prev<200 ){
      chrome.runtime.sendMessage({key: event.key})
    }
    if(event.key==='.'|| event.key==='Alt'){
      prev=initial

    }
  }
document.addEventListener('keydown', handleKeyDown);
  
// document.getElementById('text').innerText=Date.now()
