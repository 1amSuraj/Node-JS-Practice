const readline=require('readline');
const a=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
a.question('Enter a value : ',(userInput)=>{
console.log('Your value:',(userInput));
a.close();
});