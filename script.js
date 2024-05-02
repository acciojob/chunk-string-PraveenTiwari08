function stringChop(str, size) {
    size = size || 1; // If size is not provided, default to 1
    let array = [];
    // If the chunk size is greater than or equal to the length of the string, return the whole string
    if (size >= str.length) {
        return [str];
    }
    // Loop through the string
    for (let i = 0; i < str.length; i += size) {
        // Get a substring of size 'size'
        let substr = str.slice(i, i + size);
        // Push the substring to the array
        array.push(substr);
    }
    return array;
}

// Test the function
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size.")); // Convert input to integer
alert(stringChop(str, size));
