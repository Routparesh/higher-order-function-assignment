var readlineSync = require('readline-sync');
let input = readlineSync.question('what is your website name? ');

const urlPattern = /^(https?:\/\/)[\w\d.]+[a-zA-Z]+$/;

if(urlPattern.test(input)){
    console.log('Matched')
}else{
    console.log('not matched')
}