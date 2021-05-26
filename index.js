const stopButton = document.getElementById('stopButton')
const stopLight = document.getElementById('stopLight')
const slowButton = document.getElementById('slowButton')
const slowLight = document.getElementById('slowLight')
const goButton = document.getElementById('goButton')
const goLight = document.getElementById('goLight')

stopButton.addEventListener('click', e => {
  
  if(stopLight.style.backgroundColor === 'red'){
    stopLight.style.backgroundColor = 'black'
    console.log(`${e.target.id} bulb off`)
  }else{
    stopLight.style.backgroundColor = 'red'
    console.log(`${e.target.id} bulb on`)
  }

  
  //alert('stop button was clicked')
})

slowButton.addEventListener('click', e => {
  
  if(slowLight.style.backgroundColor === 'yellow'){
    slowLight.style.backgroundColor = 'black'
    console.log(`${e.target.id} bulb off`)
  }else{
    slowLight.style.backgroundColor = 'yellow'
    console.log(`${e.target.id} bulb on`)
  }

  //alert('stop button was clicked')
})

goButton.addEventListener('click', e => {
  
  if(goLight.style.backgroundColor === 'green'){
    goLight.style.backgroundColor = 'black'
    console.log(`${e.target.id} bulb off`)
  }else{
    goLight.style.backgroundColor = 'green'
    console.log(`${e.target.id} bulb on`)
  }

  //alert('stop button was clicked')
})

stopButton.addEventListener('mouseenter', e => {
  console.log(`Entered ${e.target.id} button`)
});

stopButton.addEventListener('mouseleave', e => {
  console.log(`Left ${e.target.id} button`)
});

slowButton.addEventListener('mouseenter', e => {
  console.log(`Entered ${e.target.id} button`)
});

slowButton.addEventListener('mouseleave', e => {
  console.log(`Left ${e.target.id} button`)
});

goButton.addEventListener('mouseenter', e => {
  console.log(`Entered ${e.target.id} button`)
});

goButton.addEventListener('mouseleave', e => {
  console.log(`Left ${e.target.id} button`)
});
