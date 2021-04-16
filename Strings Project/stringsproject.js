//Signing up at the library for a library card
let fname = '    Yadelin  ';
let lname = 'Gil   ';
let libraryLocation =  'New York';
let num = '123.456.7890';


let accountSetUp = fname.trim().padStart(fname.trim().length + 1, ' ') + 
lname.trim().padStart(lname.trim().length + 1, ' ') +
libraryLocation.trim().padStart(libraryLocation.trim().length + 1, ' ') +
num.replace('/./','/-/').trim().padStart(num.trim().length + 1, ' ')

console.log(accountSetUp);



accountSetUp = [
    '   Yadelin   ',
    '   Gil   ',
    '   New York   ',
    '   123.456.  7890   '
];
let accountSetUpNew = [];

for (let i = 0; i < accountSetUp.length; i ++){
    if (accountSetUp[i].includes('.')){
        accountSetUpNew.push(
            accountSetUp[i].replace('/.| /','/-/').trim()
        );
   
        }else{
        accountSetUpNew.push(
            accountSetUp[i].trim().replace('/-/',' ')
        );
        }
}
console.log(accountSetUpNew);