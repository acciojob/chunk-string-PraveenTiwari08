function stringChop(str, size) {
  // your code here
let array = [];

	if(str == ""){
		return array=[];
	}
    // Loop through the string
    for (let i = 0; i < str.length; i += size) {
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
