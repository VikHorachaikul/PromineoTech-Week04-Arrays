//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//

    let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages);
//using console.log helps me see if the array called ages was created properly, i.e., printed out properly in the console via liveserver

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] – ages[0] is not allowed!
   console.log(ages[ages.length -1] - ages[0]);
//using ages[ages.length-1] gives me access to the value of the last element in the array. I can then subtract it from the first element at ages[0]

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
   // .push() adds an element to the end of an array. 

    ages.push(33);
    console.log(ages);
    console.log(ages[ages.length -1] - ages[0]);


//1c. Use a loop to iterate through the array and calculate the average age. 
    function average(ages){
        let sum = 0
      
    for( let i = 0;i <= ages.length - 1; i++) {
        sum += ages[i];
    } 
    return sum / ages.length;
}
console.log(average(ages));


//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    let names = ["Sam","Tommy","Tim","Sally","Buck","Bob"];
    console.log(names);
    console.log(names.length);
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
    //we want the sum of letters divided by names which is 23 / 6 = 3.833.
    let sum = 0;

    for(i=0; i<names.length; i++)

        {
    sum = sum + names[i].length;

    }

    console.log(sum/names.length);
    
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
    //I declared concat first then wrote a for loop. I initialized i=1 so the name Sam did not repeat.

    let concat = names[0];
    

    for (let i = 1; i< names.length; i++)

    {   concat = concat.concat(" ",names[i]);

    }

    console.log(concat);

//3.  How do you access the last element of any array?
     //By using the arrayName.length - 1

//4.  How do you access the first element of any array?
     //"By using the arrayName[index]";

//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    let nameLengths = [];

    for( let i = 0; i < names.length; i++)

    { nameLengths[i] = names[i].length;
        }

        console.log(nameLengths);
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// We want to iterate over the namesLength aray and calculate the sum of all the elements in the array which is 3+5+3+5+4+3=23
    let total =0;

    for(let i = 0; i < nameLengths.length; i++)

        { total = total + nameLengths[i];

        }

    console.log(total);

////7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
    let someFunction = (word, n) => {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += word;
        }
        return result;
    };
    console.log(someFunction('Hello', 3));

//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
    //simple concatenation here, I used a + " " + with spacing between the quotes to create space between my name
    function fullName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    console.log(fullName("Vik", "Das"));


//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    //I left arr = '', since its like we are taking an imaginary array of numbers. After declaring arr I can proceed to write the 
    // shell of the function with a for loop and a boolean to determine if it is greater than 100

    let arr = '';
    function isTotalGreaterThan100(arr){

   sum=0;

    for(i=0; i<arr.length; i++)

    { sum = sum + arr[i];

    }  if(sum > 100)

    { return true;

    }  else

{

return false;

    }

}
console.log(isTotalGreaterThan100(arr));
//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
    let array = '';
    function average(array) {
     let sum = 0;

    for(let i = 0; i < array.length; i++)

        { sum = sum + array[i];
    }   
    return (sum/array.length);

    }
    console.log(average(array));

//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
        //I created 2 arr's to make the answer more concrete for my understanding.
        //I used the for loop concepts that I previously used above to find the average here for
        // both arr1 and arr2

        let arr1 = [1,2,3,4,5,6];
        let arr2 = [7,8,9,10,11];

    function compareAverage(arr1,arr2){
            let sumA = 0;
            for(let i = 0; i < arr1.length; i++){
                sumA += arr1[i]
            }
            let sumB = 0;
            for(let i = 0; i < arr2.length; i++){
                sumB += arr2[i]
            }
        if ((sumA / arr1.length) > (sumB / arr2.length)){
            return true;
        } else {
            return false;
        }
        }
        console.log(compareAverage(arr1,arr2));


//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
    //Here I used a simple boolean expression with an && to make sure both expressions are true before we can buy a drink.

    function willBuyDrink(isHotOutside, moneyInPocket) {
        if(isHotOutside && moneyInPocket > 10.50 == true){

        }
        return "Let's buy a drink"
    }
 console.log(willBuyDrink());
    

//13.  Create a function of your own that solves a problem. 
let newArr = [10,20,30,40,50,60,70,80,90,100];
let newSum = 0;
for(let  i = 0; i < newArr.length; i++){
    newSum = newSum + newArr[i];
}
    console.log(newSum/newArr.length);


//In comments, write what the function does and why you created it.//
// The function finds the average of all the numbers on the array.
//This is simple function, but I feel it is a summation of everything I've learned above.