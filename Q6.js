var readlineSync = require('readline-sync');
let input = readlineSync.question('what is your linkedin url? ');

const linkedinUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

if (linkedinUrlPattern.test(input)) {
    console.log(`${input} is a valid LinkedIn profile URL.`);
} else {
    console.log(`${input} is not a valid LinkedIn profile URL.`);
}