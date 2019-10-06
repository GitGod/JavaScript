const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const numbers2 =[];
function par(numbers){
 numbers.forEach(function(current){
   if (current%2==0){
     numbers2.push(current);
   }
 }                              
                )};
par(numbers);
console.log(numbers2);
