const trimMe = '    abhishek    ';

console.log(trimMe.trim());

console.log(trimMe.trimLeft().trimRight());

// renamed in es10, functionality remains same
console.log(trimMe.trimEnd().trimStart());