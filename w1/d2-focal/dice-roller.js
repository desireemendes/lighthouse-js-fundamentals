function diceRoller() {
  return 1 + Math.floor(Math.random())*6
}
for(let i = 0; i < 5; i++) console.log(diceRoller())