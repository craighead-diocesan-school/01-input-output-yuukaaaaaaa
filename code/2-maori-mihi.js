// ####################################
// ###### ----- Maori Mihi ----- ######
// ####################################

function maoriMihi() {
  // Ask questions.
  alert('Māori Mihi')
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
  
  // Make maori mihi based on the answer of the question.
  alert('Your mihi:')
  alert('Tēnā koutou katoa.')
  alert('Ko'+ mountain + 'tōku maunga')
  alert('Ko' + river + 'tōku awa/moana/roto/whanga,')
  alert('Nō' + hometown +'au')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}