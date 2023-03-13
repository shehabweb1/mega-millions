const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const power = document.getElementById('power');

const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const inputNum3 = document.getElementById("inputNum3");
const inputNum4 = document.getElementById("inputNum4");
const inputNum5 = document.getElementById("inputNum5");
const inputPower = document.getElementById("inputPower");

const inputFields = document.querySelectorAll("input[type='number']");


const btnRandomNumber = document.getElementById("btnRandomNumber");
const btnReset = document.getElementById("btnReset");

const result = document.getElementById("result");




/*
 ==== If you don't allow draw by leaving the input field blank then use this code ====
 
btnRandomNumber.addEventListener("click", (event) => {
  let isEmpty = false;
  inputFields.forEach(function(inputField) {
    if (inputField.value.trim() === "") {
      isEmpty = true;
    }
  });

  if(isEmpty){  
    event.preventDefault();
    result.innerHTML = "You Favorites Number Is Empty";
  }else{
    // Code here    
  }
})
*/


btnRandomNumber.addEventListener("click", () => {
  // Start Conditional Coding here
  const min = 1;
  const max = 69;
  const numCount = 5;
  const nums = [];

  // Generate 5 unique random numbers in ascending order
  while (nums.length < numCount) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    if (!nums.includes(num)) {
      nums.push(num);
    }
  }
  nums.sort((a, b) => a - b);

  num1.innerHTML = nums[0];
  num2.innerHTML = nums[1];
  num3.innerHTML = nums[2];
  num4.innerHTML = nums[3];
  num5.innerHTML = nums[4];

  const powerNum = Math.floor((Math.random() * 26) + 1);
  power.innerHTML = powerNum;


  const inputArray = [Number(inputNum1.value), Number(inputNum2.value), Number(inputNum3.value), Number(inputNum4.value), Number(inputNum5.value)];

  // output the array of 5 numbers in ascending order
  const inputNumbers = inputArray; // replace this with your input numbers
  const winningNumbers = nums; // replace this with the predefined set of winning numbers


  const numberOfMatches = inputNumbers.filter((num) =>
    winningNumbers.includes(num)
  ).length;

  if (numberOfMatches === 5 && powerNum === Number(inputPower.value)){
    result.innerHTML = "You Win Mega Million";
  }else{
    switch (numberOfMatches) {
      case 5:
        result.innerHTML ="You Win Five Number";
        break;
      case 4:
        result.innerHTML ="You Win Four Number";
        break;
      case 3:
        result.innerHTML = "You Win Three Number";
        break;
      default:
        result.innerHTML = "Sorry, you didn't win.";
    }
  } 
  
});


function resetNum() {
  num1.innerHTML = 1;
  num2.innerHTML = 2;
  num3.innerHTML = 3;
  num4.innerHTML = 4;
  num5.innerHTML = 5;
  power.innerHTML = 10;

  inputNum1.value = "";
  inputNum2.value = "";
  inputNum3.value = "";
  inputNum4.value = "";
  inputNum5.value = "";
  inputPower.value = "";

  result.innerHTML = "";
}

btnReset.addEventListener("click", resetNum);

function maxNum(number) {
  number.addEventListener("input", () => {
      const max = 69;
      
      if (number.value > max) {
        number.value = max;
      }
  });
}
maxNum(inputNum1);
maxNum(inputNum2);
maxNum(inputNum3);
maxNum(inputNum4);
maxNum(inputNum5);

function powerMaxNum(number) {
  number.addEventListener("input", () => {
      const max = 26;
      
      if (number.value > max) {
        number.value = max;
      }
  });
}
powerMaxNum(inputPower);


