const startCounter = () => {
  let seconds = 0

  if(sessionStorage.getItem('counter')) {
    seconds = parseInt(sessionStorage.getItem('counter'))
  }

  const timer = document.querySelector('#timer')

  const timerInteral = setInterval(() => {
    seconds++
    timer.textContent = seconds
    sessionStorage.setItem('counter', seconds)
  }, 1000)
}

startCounter();