// supported 
// > in node 12.10.0 not in LTS node 10.16.3
// > chrome 77

// NOTES
// flat map will map each element with a function and then flattens the array.
// In other words it's a combination of flat and map.

const me = ['I am a Nodejs developer', 'I wish to be a full stack developer'];

const splitMe = me.flatMap(element => element.split(''));

console.log(splitMe); /* output:
[
  'I', ' ', 'a', 'm', ' ', 'a', ' ', 'N', 'o',
  'd', 'e', 'j', 's', ' ', 'D', 'e', 'v', 'e',
  'l', 'o', 'p', 'e', 'r', 'I', ' ', 'w', 'i',
  's', 'h', ' ', 't', 'o', ' ', 'b', 'e', ' ',
  'a', ' ', 'f', 'u', 'l', 'l', ' ', 's', 't',
  'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l',
  'o', 'p', 'e', 'r'
]
*/

// another simple example
// add 1 in the array, count of 1 should be equal to length of the original array
const arr = [1, 2, 3, 4, 5];

const result = arr.flatMap(e => [e, 1]);

console.log(result); // [ 1, 1, 2, 1, 3, 1, 4, 1, 5, 1]