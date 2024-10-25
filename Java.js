// Custom implementation of slice method
function sliceString(str, start, end) {
    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

// Custom implementation of replace method
function replaceString(str, oldChar, newChar) {
    let result = '';
    let replaced = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === oldChar && !replaced) {
            result += newChar;
            replaced = true;
        } else {
            result += str[i];
        }
    }
    return result;
}

// Custom implementation of replaceAll method 
function replaceAllString(str, oldChar, newChar) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === oldChar) {
            result += newChar;
        } else {
            result += str[i];
        }
    }
    return result;
}

// Custom implementation of concat method
function concatStrings(str1, str2) {
    let result = '';
    for (let i = 0; i < str1.length; i++) {
        result += str1[i];
    }
    for (let i = 0; i < str2.length; i++) {
        result += str2[i];
    }
    return result;
}

// Custom implementation of chatAt method
function charAtString(str, index) {
    return str[index];
}



// Testing the functions in the console
// Testing the functions
console.log("Testing sliceString:");
console.log(sliceString("Hello, World!", 0, 5)); // Output: Hello

console.log("Testing replaceString:");
console.log(replaceString("Hello, World!", "o", "a")); // Output: Hella, World!

console.log("Testing replaceAllString:");
console.log(replaceAllString("Hello, World!", "o", "a")); // Output: Hella, Warld!

console.log("Testing concatStrings:");
console.log(concatStrings("Hello", " World!")); // Output: Hello World!

console.log("Testing charAtString:");
console.log(charAtString("Hello, World!", 7)); // Output: W








