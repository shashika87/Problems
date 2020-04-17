*
# 261 - Merge K Sorted Arrays

Given an array of sorted arrays of numbers, return 
the result of merging all those sorted arrays into 
a single sorted array

```
Input: arrays , Array of Arrays of Ints, [[Int]]
Output: [Int] 

 Constraints
```
Basic:

Time Complexity: O(N K log NK)
Auxiliary Space Complexity: O(NK)

Advanced:

Time Complexity: O(N K log K)
Auxiliary Space Complexity: O(NK)

K = # of Arrays
N = Avg. Length of Arrays


*/


 
 
 function mergeKSortArray(array){

   let result = [];
   function mergeTwoSortedArray(array1, array2, output) {
     let i = 0;
     let j = 0;
     //console.log("array2", array2)
     while (i < array1.length && j < array2.length) {
       if (array1[i] <= array2[j]) {
         output.push(array1[i]);
         i++;
       } else {
         output.push(array2[j]);
         j++;
       }
     }
       if (i < array1.length) {
         for (let k = i; k < array1.length; k++) {
           output.push(array1[i]);
         }
       }

       if (j < array2.length) {
         for (let k = j; k < array2.length; k++) {
           output.push(array2[j]);
         }
       }
       //(2n), (2n+n), (3n+n)...........k
     
   }
   
   function helperMerge(array, i, j, output){
   if (i == j) {
     for (var p = 0; p < array[i].length; p++){
       output.push(array[i][p]);
     }
     return;
   }

   //if only two arrays are left them merge them  
   if (j - i == 1) {
     mergeTwoSortedArray(array[i], array[j], output);
     
     return;
   } 
   
   let output1=[];
   let output2=[];
   
     helperMerge(array, i, Math.floor((i + j) / 2), output1);
     helperMerge(array, Math.floor(((i + j) / 2))+1, j, output2);

     mergeTwoSortedArray(output1, output2,output);

   }
  
    helperMerge(array, 0, array.length-1, result);
   return result;
    
    /*
        [1,2,3] [4,5,6]  2n ---> 2log2n
    
    */
   
 }
 
let array = [
  [1, 10, 11, 15],
  [2, 4, 9, 14],
  [5, 6, 8, 16],
  [3, 7, 12, 13]
];

let result = mergeKSortArray(array)

console.log(result);
