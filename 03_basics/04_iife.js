//Imediately Invoked Function Expressions (IIFE)

(function chai() {
    //NAME IIFE
    console.log(`DB Connected`);
})(); // <-- Added a semicolon here

//()()//1st Parenthesis for function definition 2nd for execution call

( () =>{
    console.log(`DB CONNECTED TWO`);
    
}) ();

( (NAME) =>{
    console.log(`DB CONNECTED TWO ${NAME}`);
    
}) ('PRIYANKA');
