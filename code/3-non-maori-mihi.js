// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  // Ask questions.
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  alert('What is your name?')
  let name = prompt()
  alert("What's your mountain?")
  let mountain = prompt()
  alert("What's your river/ocean/lake/bay-harbour")
  let river = prompt()
  alert("What's your hometown")
  let hometown = prompt()
    
  // Make non maori mihi based on the answer of the question.
  alert('Your mihi:')
  alert('Kei te mihi au ki a' + mountain)
  alert('Kei te mihi au ki a' + river)
  alert('Ko Te Tiriti o Waitangi te waka')
  alert('Ko Aotearoa te iwi')
  alert('Nō' + hometown +'au')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}