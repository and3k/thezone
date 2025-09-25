function displayAnswer1(){
    if(document.getElementById('option-11').checked) {
    document.getElementById('block-11').style.border = '3px solid limegreen'
    document.getElementById('result-11').style.color = 'limegreen'
    document.getElementById('result-11').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
}
function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }

