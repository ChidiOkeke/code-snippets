export const data = [
{ 
    id : 1,
    name : "Snippet 1",
    category : "basic",
    snippet: 
`function square(number){
    return number * number;
}`
},  
{ 
    id : 2,
    name : "Snippet 2",
    category : "basic",
    snippet :
`function divide(a , b){
    return a / b;
}`
},
{ 
    id : 3,
    name : "Snippet 3",
    category : "basic",
    snippet :
`function multiply(a , b){
    return a * b;
}`
},
{
    id : 4,
    name : "Snippet 3",
    category : "arrays",
    snippet: 
    
`function addArrays(...args) {
    return args.reduce((total,arr)=>total.concat(arr));
}
    
console.log(addArrays([2,3,4],[6,4,9],[34,6,4])) 
// [2, 3, 4, 6, 4, 9, 34, 6, 4]`
},
{
    id : 5,
    name : "Snippet 4",
    category : "arrays",
    snippet: 
    
`function getCharFromString(string, index) {
    return string[index - 1];
 }
    
console.log(getCharFromString('zyxbwpl',5)) 
// 'w'`
},
{
    id : 6,
    name : "Snippet 5",
    category : "basic",
    snippet:

`function getBinaryFromDeciamSum(Dec1, Dec2) {
    return ((Dec1 + Dec2) > 0) ? (Dec1 + Dec2).toString(2) : 'Error';
}
console.log(getBinaryFromDeciamSum(4,1))
// 101`
},
{
    id : 7,
    name : "Snippet 5",
    category : "array",
    snippet:

`function arrayDiff(array1, array2) {
    const newArray = [];
    array1.forEach((element) => {
        !array2.includes(element) ? newArray.push(element) : false;
    });
return newArray;
console.log(arrayDiff([1,2,2,2,3],[2]))
// [1, 3]`
}



];