// add solution here
function theBeatlesPlay(musicians, instruments) {
  var fab4 = [];
  for (let i = 0; i < musicians.length; i++) {
   fab4.push(`${musicians[i]} plays ${instruments[i]}`);
 };
  return fab4;
}

function johnLennonFacts(facts) {
  var excitedfacts = [];
  let i = 0
  while (i < facts.length) {
    excitedfacts.push(`${facts[i]}!!!`)
    i += 1
  }
  return excitedfacts
}

function iLoveTheBeatles(num) {
  var love =[]
  let i = 0
  num++
  do {
    love.push("I love the Beatles!")
  } while(num < 15)
    return love
}
