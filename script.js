function makeid(len) {
  // write your code here
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let ans = '';
	for(let i=0;i<len;i++) {
		ans += characters[Math.floor(Math.random()*characters.length)]
	}
	return ans
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
