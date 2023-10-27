//Sum Zero
function sumZero(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] + array[i] == 0){
                return true
            }
        }
    }
    return false
}

console.log(sumZero([1,2,3,-1]))
console.log(sumZero([1,2,3,4]))
//Uniqe string 
function uniq(str){
     
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}
console.log(uniq('abcdefghijklmnopqrstuvwxyz'))
console.log(uniq('ashfasfas'))
// panagram

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
function pangram(str){
    str = str.toLowerCase()
    return alphabets.every(x => str.includes(x))
}

console.log(pangram("Detect Pangram"));
console.log(pangram("abcd efgh ijkl mnop qrst uvwx yz"));

//Longest Word
function longestWord(arr){
    let longest = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length
        }
    }
    return longest
}

console.log(longestWord(["hi", "hello", "orthodontist"]))
