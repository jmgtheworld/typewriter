const sentence = "hellooooo there from lighthouse labs";
let count = 0;

for (const char of sentence) {
  setTimeout(() => {
      process.stdout.write(char);
  }, count * 50);
  count++;
}  

setTimeout( () => {
  console.log('\n')
}, 55 * sentence.length )




