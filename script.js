//array manipulation - 1

//push()
let arr = ["Jonas","Martha","Claudia","Michelle"];
arr.push("Magnus");
console.log(arr);

//pop
let arr1 = ["Jonas","Martha","Claudia","Michelle"];
arr1.pop("Jonas");
console.log(arr1);

//array searching - 2

//indexOf()
let arr2 = ["Jonas","Martha","Claudia","Michelle"];
console.log(arr2.indexOf("Claudia"));

//find()
let arr3 = ["Jonas","Martha","Claudia","Michelle"];
function find(name){
    if(name === "Claudia"){
        return true;
    }
    else    
        return false;
}
console.log(find("Jonas"));

//array filtering - 3
const voting_age = [20,13,18,22,15];
console.log(voting_age.filter(filtering));

function filtering(voting_age){
    return voting_age >= 18;
}

//array sorting - 4
let arr4 = ["Jonas","Martha","Claudia","Michelle","Magnus"];
let result = arr4.sort();
console.log(result);

//array joining - 5
let arr5 = ["Jonas","Martha","Claudia","Michelle","Magnus"];
let result1 = arr5.join("    ");
console.log(result1);