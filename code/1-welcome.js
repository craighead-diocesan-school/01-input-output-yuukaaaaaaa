// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let Yuka = prompt("What's your name?")
  

  alert('We want to know if you like programming!')

  let answer = prompt('Do you like programming ' + Yuka + '?')

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function questionnaire() {
   let name = prompt("What's your name")
   let answer = prompt('What did you have for breakfast?')
   let color = prompt ("What's your favorite color?")
   let age = prompt ('How old are you?')
   age = Number(age)
   age = age+1
   alert('You will be' + age +'on your next birthday')
}
