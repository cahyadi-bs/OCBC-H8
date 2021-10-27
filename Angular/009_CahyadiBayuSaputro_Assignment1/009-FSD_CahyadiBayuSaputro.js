let a;
let b;



try{
    if(process.argv[2] !== undefined){
        if(process.argv[3] !== undefined)
        {
            a = parseInt(process.argv[2]);
            b = parseInt(process.argv[3]);
        } else {
            throw new Error("You're missing an input");
        }
    } else {
        a = 10;
        b = 5;
    }
}catch (err){
    console.log(err);
    process.exit();
}


console.log("Number 1: "+ a);
console.log("Number 2: "+ b);
console.log("Sum: "+ (a+b));
console.log("Difference: "+ (a-b));
console.log("Product: "+ (a*b));
console.log("Quotient: "+ (a/b));
console.log("Remainder: "+ (a%b));
console.log("Value of num1 after increment: "+ (a++));
console.log("Value of num2 after decrement: "+ (a--));