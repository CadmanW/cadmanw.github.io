document.addEventListener('DOMContentLoaded', function () {
  let calculation = ''
  let history = JSON.parse(localStorage.getItem('history')) || '';
  updateHistory(history);
  
  function updateCalculationBox(str) {
      document.querySelector('.calculationBox').value=str
  };

  function updateHistory(str) {
    document.querySelector('.history').innerHTML = str
    localStorage.setItem('history', JSON.stringify(history))
  }

  
  const button_clearHistory = document.querySelector('.button-clearHistory');
  const button_del = document.getElementById('button-del');
  const button_7 = document.getElementById('button-7');
  const button_8 = document.getElementById('button-8');
  const button_9 = document.getElementById('button-9');
  const button_add = document.getElementById('button-add');
  const button_openParenthesis = document.getElementById('button-openParenthesis');
  const button_4 = document.getElementById('button-4');
  const button_5 = document.getElementById('button-5');
  const button_6 = document.getElementById('button-6');
  const button_subtract = document.getElementById('button-subtract');
  const button_closeParenthesis = document.getElementById('button-closeParenthesis');
  const button_1 = document.getElementById('button-1');
  const button_2 = document.getElementById('button-2');
  const button_3 = document.getElementById('button-3');
  const button_divide = document.getElementById('button-divide');
  const button_CA = document.getElementById('button-CA');
  const button_decimal = document.getElementById('button-decimal');
  const button_0 = document.getElementById('button-0');
  const button_equals = document.getElementById('button-equals');
  const button_multiply = document.getElementById('button-multiply');
  
  button_del.addEventListener('click', event => {
    calculation = calculation.slice(0, -1);
    updateCalculationBox(calculation);
  });
  
  button_7.addEventListener('click', event => {
    calculation += '7';
    updateCalculationBox(calculation);
  });
  
  button_8.addEventListener('click', event => {
    calculation += '8';
    updateCalculationBox(calculation);
  });
  
  button_9.addEventListener('click', event => {
    calculation += '9';
    updateCalculationBox(calculation);
  });
    
  button_add.addEventListener('click', event => {
    calculation += '+'
    updateCalculationBox(calculation);
  });
  
  button_openParenthesis.addEventListener('click', event => {
    calculation += '(';
    updateCalculationBox(calculation);
  });
  
  button_4.addEventListener('click', event => {
    calculation += '4';
    updateCalculationBox(calculation);
  });
    
  button_5.addEventListener('click', event => {
    calculation += '5';
    updateCalculationBox(calculation);
  });
  
  button_6.addEventListener('click', event => {
    calculation += '6';
    updateCalculationBox(calculation);
  });
  
  button_subtract.addEventListener('click', event => {
    calculation += '-';
    updateCalculationBox(calculation);
  });
  
  button_closeParenthesis.addEventListener('click', event => {
    calculation += ')';
    updateCalculationBox(calculation);
  });
  
  button_1.addEventListener('click', event => {
    calculation += '1';
    updateCalculationBox(calculation);
  });
  button_2.addEventListener('click', event => {
    calculation += '2';
    updateCalculationBox(calculation);
  });
  
  button_3.addEventListener('click', event => {
    calculation += '3';
    updateCalculationBox(calculation);
  });
  
  button_divide.addEventListener('click', event => {
    calculation += "/";
    updateCalculationBox(calculation);
  });
  
  button_CA.addEventListener('click', event => {
    calculation = '';
    updateCalculationBox(calculation);
  });
  
  button_decimal.addEventListener('click', event => {
    calculation += '.';
    updateCalculationBox(calculation);
  });
    
  button_0.addEventListener('click', event => {
    calculation += '0';
    updateCalculationBox(calculation);
  });
  
  button_equals.addEventListener('click', event => {
    if (calculation != '') {
      let result = eval(calculation)
      history += `<br/>${calculation} = ${result}`;
      calculation = String(result);

      updateCalculationBox(calculation);
      updateHistory(history);
    } else {
      updateCalculationBox('Error')
    }
  });
  
  button_multiply.addEventListener('click', event => {
    calculation += '*';
    updateCalculationBox(calculation);
  });
  
  button_clearHistory.addEventListener('click', event => {
    localStorage.clear()
    history = ''
    updateHistory(history);
  })
});