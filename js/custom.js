 // Add event listeners to buttons
 document.getElementById("greetButton").addEventListener("click", function() {
    alert("Hello Jasper");
    
  });
  
  document.getElementById("secondComputation").addEventListener("click", function() {
    let total = sumOfTwoNumbers(firstNumber, secondNumber); // Compute total
    alert("Total computation: " + total);
  });
  
  function displayName(name) {
    document.write("Name: " + name);
  }
  
  function sumOfTwoNumbers(a,  b, elementId) {
    let sum = a + b;
    if (elementId) {
        document.getElementById(elementId).textContent = "Sum: " + sum;
    }
    return sum;
  }

  function computeGrade() {
    let name = prompt("enter your name");
    var totalItem = parseInt(prompt("Enter Your Total Item: "));
    var totalScore = parseInt(prompt("Enter Your Total Score: "));
   var grade = formula(totalItem, totalScore).toFixed(2);
    alert("your Name is: "+ name +"\nYour Grade: " + grade + "\nResult: " + checkResult(grade));
    console.log("your Name is: "+ name+ "\nYour Grade: " + grade + "\nResult: " + checkResult(grade)); 

   document.getElementById("output").innerHTML = "your Name is: "+ name+ "<br>Your Grade: " + grade + "<br>Result: " + checkResult(grade); 
  document.write( "your Name is: "+ name+ "<br>Your Grade: " + grade + "<br>Result: " + checkResult(grade));
}

function checkResult(grade) {
    
    if (grade <= 3.0) {
   return ("you pass");
    }
    else{
      return ("you Fail");
    }
  }
function formula(totalItem, totalScore){
    return -4* (totalScore/totalItem) + 5;

}

computeGrade()