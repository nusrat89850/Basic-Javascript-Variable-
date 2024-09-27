let camelCaseString = "GeeksForGeeks";
let camelCaseString2 = "JavaScript";

let myStr = camelCaseString.split(/(?=[A-Z])/);
let snakeCaseString = myStr.join('_').toLowerCase();
console.log(snakeCaseString);

let myStr2 = camelCaseString2.split(/(?=[A-Z])/);
let snakeCaseString2 = myStr2.join('_').toLowerCase();
console.log(snakeCaseString2);



