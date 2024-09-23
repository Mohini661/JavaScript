function reverseWords(string) {
	return string.split(" ").reverse().join(" ").trim()
}
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  ") );
console.log(reverseWords("a good example"));


