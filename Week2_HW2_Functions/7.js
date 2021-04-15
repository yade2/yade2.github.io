// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(str){
    let longestWord = "";
    let words = str.split(" ");
    console.log(words);

    for(let i = 0; i < words.length; i += 1){
        let individualWord = words[i];
        console.log(individualWord);
        if(individualWord.length > longestWord.length){
            longestWord = individualWord
        }
    }
    return longestWord.length;

}
console.log(findLongestWord("good things will happen tomorrow"));

