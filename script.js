function stringChop(str, size) {
  // your code here
	let substr = str.splice(size);
	return substr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
