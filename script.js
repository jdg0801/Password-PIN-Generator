const sliderValue = document.getElementById("lengthRange");
const LengthDisplay = document.getElementById("pwdlength");
var finalLength = sliderValue.value;
const generateButton = document.getElementById("GenerateResult");
const ResetButton = document.getElementById("ResetForm");
const upperCheck = document.getElementById("uppercaseCheck");
const lowerCheck = document.getElementById("lowercaseCheck");
const numCheck = document.getElementById("numberCheck");
const specialCheck = document.getElementById("specialCharacterCheck");
const displayWord = document.querySelector(".input-field");
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#@/';

const LengthVal = () => {
    finalLength = sliderValue.value;
    LengthDisplay.textContent = sliderValue.value;
};
LengthVal();


const finalRes = () => {
    console.log(finalLength);
    let password =  generatedResult(finalLength);
    displayWord.value = password;
}


const processingString = (characters)=>{
  if (!upperCheck.checked) {
    characters = characters.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
  }

  if (!lowerCheck.checked) {
    characters = characters.replace('abcdefghijklmnopqrstuvwxyz', '');
  }

  if (!specialCheck.checked) {
    characters = characters.replace('*#@/', '');
  }

  if (!numCheck.checked) {
    characters = characters.replace('0123456789', '');
  }

  if (!upperCheck.checked && !lowerCheck.checked && !specialCheck.checked && !numCheck.checked) {
    alert('Select at least one');
    return;
  }
  return characters;
}


const generatedResult = (finalLength) => {
  let result = '';
  let processedString = processingString(characters);
  const charactersLength = processedString.length;
  let counter = 0;
  while (counter < finalLength) {
    result += processedString.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

sliderValue.addEventListener('input', LengthVal);
generateButton.addEventListener('click',  finalRes);
ResetButton.addEventListener('click', ()=>{
  LengthDisplay.textContent = 4;
  finalLength = 4;
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#@/';
});






