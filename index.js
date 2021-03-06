//armazenando as perguntas
const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask() //chamando a função das perguntas

const answers = [] //criando array para armazenar as respostas

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`O que você aprendeu hoje foi: ${answers[0]}\n
  O que te aborreceu hoje foi: ${answers[1]}\n
  O que te deixou feliz hoje foi: ${answers[2]}\n
  Você ajudou ${answers[3]} pessoas hoje! \n\n
  Volte amanhã para mais reflexões
  `)
})
