
// //  Write code for creating a new sorted array from two 
// sorted arrays in O (n + m) time complexity 
// //  where n and m are the size of the unsorted arrays.



 function merge(nums1, m, nums2, n) {
    let result = Array(m + n).fill(0);
    let i = 0; // iterate on nums 1
    let j = 0; // iterate on nums 2
    let k = 0; // iterate on result

    while(i < m && j < n) {
        if(nums1[i] < nums2[j]) {
            result[k] = nums1[i];
            i++;
            k++;
        } else {
            result[k] = nums2[j];
            j++;
            k++;
        }
    }
    // The above while loop will end when any one array exhausts
    while(i < m) {
        // nums1 still got some elements left
        result[k] = nums1[i];
        i++;
        k++;
    }
    while(j < n) {
        // nums2 still got some elements left
        result[k] = nums2[j];
        j++;
        k++;
    }
    // because the question demands
    for(let i = 0; i < result.length; i++) {
        nums1[i] = result[i];
    }

};
nums1 = [2,5,8];

nums2 = [1,3,4];
console.log(merge(nums1,m,nums2,n));





// Write code for finding the smallest element in an array.


const numbers = [2, 5, 9, 1, 6, 7, 4, 8];


function smallestNum(numbers){
let result = numbers[0];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] < result) {
        result = numbers[i];
    }
}

console.log("Smallest number is: " + result);
}
smallestNum(numbers);
