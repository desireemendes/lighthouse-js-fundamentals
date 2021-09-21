/*const sentence = "hello there from lighthouse labs";
for (const char of sentence) setTimeout(() => {
  process.stdout.write(char)
}, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
*/

const sentence = "hello there from lighthouse labs";
let timer;
let i = 0;
function text () {
  document.write(text[i]);
  i++;
  if (i > text.length)
  clearInterval(timer);
  timer = setInterval(type, 50);
}
console.log(sentence);
