// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

function filterLongWords(str){
    let words = str.split(' ');
    let size = 0;
    let max = [' '];

    for(let i = 0; i < words.length; i++){
        if(words[i].length >= size){
            size = words[i].length;
            if(max[max.length - 1].length < words[i].length){
                max = [];
                max.push(words[i])
            }
            else{
                max = [...max, words[i]];
            }
        }
    }
    return [...max];
}
console.log('I woke up early today');
console.log('I went straight to the park');