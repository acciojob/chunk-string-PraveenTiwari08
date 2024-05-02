function stringChop(str, size) {
  // your code here
size = size || 1; // If size is not provided, default to 1
    let array = [];
    // Loop through the string
    for (let i = 0; i < str.length; i += size) {
        // Get a substring of size 'size'
        let substr = str.slice(i, i + size);
        // Push the substring to the array
        array.push(substr);
    }
    return array;
	

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
