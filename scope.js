let bonus = 20; // global scope
function sum(first, second){
    let result = first + second + bonus;
    //console.log(bonus);
    if(result > 9){
        var mood = "happy";
        mood = "very happy";
        mood = "extremely sad";
        //
    }
    console.log(day);
    let day = "friday";
    
    return result;
}
   
const output = sum(3, 7);
// console.log(output);