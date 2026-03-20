let str = 'hello';
//console.log(str.length);// 5
//console.log(str.indexOf('h'));// 0
//console.log(str.indexOf('p'));//c-1
//console.log(str.indexOf('l'));// 2
//console.log(str.indexOf('l')+1);// 3

//console.log(str.includes('ell'));// true
//console.log(str.includes('prateek'));// false
//console.log(str.startsWith('he'));// true
//console.log(str.endsWith('lo'));// true
//console.log(str.endsWith('hello'));// true

//slice
console.log(str.slice());// hello
console.log(str.slice(1,3));
console.log(str.slice(-3));
console.log(str.slice(-1));
console.log(str.slice(0));
console.log(str.slice(-5));

console.log(str.slice(-4, -1));
console.log(str.slice(-3, -1));
console.log(str.slice(-5, -3));

console.log(str.slice(-4, -4));
console.log(str.slice(0, -5));

console.log(str.substring(1,3));

console.log('================')

let st = 'playwright';
console.log(st.charAt(0));
console.log(st.charAt(-1));

console.log("A".charCodeAt());
console.log("a".charCodeAt());
console.log("abc".charCodeAt(2));
console.log(" ".charCodeAt());
console.log("s".charCodeAt());

console.log(st.toUpperCase());
console.log(st.toLowerCase());


console.log("  hello   ",trim());
console.log("  hello ", trimstart());
console.log("  hello ", trimEnd());

//replace
console.log("hi hi", replace("hi", "hey"));
console.log("hi hi", replaceAll("hi", "hey"));

let dob = "01-01-1999";
console.log(dob.replaceAll("-","/"));

//concat
console.log("hello",concat(" ", " Selenium ", " Automation"));

//padding
console.log("7".padStart(3,0));
console.log("7".padEnd(3,0));
console.log("7".padEnd(3,"hi"));
console.log("7".padEnd(7,'hello'));

//repeat
console.log("".repeat(3));

//split
let lang = "java_python_ruby";
let lg = lang.split("_");
console.log(lg[0]);

