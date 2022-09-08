const number=document.querySelector('.number')
const operator=document.querySelector('.operator')
const display=document.querySelector('#display')
const buttons =document.querySelector('#button_wrap')
let firstNum, operate, previousKey, previousNum=''
function calculate(n1, operator, n2) {
    let result = 0;
    if (operator === '+') {
      result = Number(n1) + Number(n2);
    }
    if (operator === '-') {
      result= Number(n1) - Number(n2);
    }
    if (operator === '*') {
      result = Number(n1) * Number(n2);
    }
    if (operator === '/') {
      result= Number(n1) / Number(n2);
    }
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    return String( result);
  }
  
buttons.addEventListener('click',(event)=>{
   const target=event.target;
   const buttonclass=target.classList[0];
   const buttonContent = target.textContent

  if(buttonclass==='number'){
    if (!operate) {
      display.value+=buttonContent;
        firstNum=display.value
      } 
      else if (operate&&firstNum)
         {   previousNum=buttonContent
        
        display.value+=previousNum;
     
      }
     
      previousKey = 'number';
     console.log('')
}
if(buttonclass==='operator'){
    if ( previousKey !== 'operator' && previousKey !== 'calculate') {
      
        previousNum=''
      }
     
      operate = buttonContent;
    display.value +=operate;
      previousKey = 'operator';}

if(buttonclass==='clear'){
  firstNum = '';
    operate = '';
    previousNum = '';
    previousKey = 'clear';
  display.value = '';

}
if (buttonclass === 'calculate') {
       
      display.value = calculate(firstNum, operate, previousNum);
   firstNum=display.value
   operate=''
   previousNum=''
       previousKey = 'calculate';

  }
console.log(firstNum,operate,previousNum,display.value)
})


// buttons.addEventListener('click', function (event) {
// const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   const buttonContainerArray = buttons.children;
//   for (let i = 0; i < buttonContainerArray.length; i++) {
//     const childrenArray = buttonContainerArray[i].children;
//     for (let j = 0; j < childrenArray.length; j++) {
//       childrenArray[j].classList.remove('isPressed');
//     }
//   }

//   if (action === 'number') {
//     if display.value === '0' || previousKey === 'operator' || previousKey === 'calculate') {
//      display.value = buttonContent;
//     } else {
//      display.value =display.value + buttonContent;
//     }
//     previousKey = 'number';
//   }

//   if (action === 'operator') {
//     target.classList.add('isPressed');
//     if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
//      display.value = calculate(firstNum, operatorForAdvanced,display.value);
//     }
//     firstNum =display.value;
//     operatorForAdvanced = buttonContent;
//     previousKey = 'operator';
//   }

//   if (action === 'decimal') {
//     if (display.value.includes('.') && previousKey !== 'operator') {
//      display.value =display.value + '.';
//     } else if (previousKey === 'operator') {
//      display.value = '0.';
//     }
//     previousKey = 'decimal';
//   }

//   if (action === 'clear') {
//     firstNum = undefined;
//     operatorForAdvanced = undefined;
//     previousNum = undefined;
//     previousKey = 'clear';
//    display.value = '0';
//   }

//   if (action === 'calculate') {
//     if (firstNum) {
//       if (previousKey === 'calculate') {
//        display.value = calculatedisplay.value, operatorForAdvanced, previousNum);
//       } else {
//         previousNum =display.value;
//        display.value = calculate(firstNum, operatorForAdvanced,display.value);
//       }
//     }
//     previousKey = 'calculate';
//   }
// })
