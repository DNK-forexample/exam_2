let calculator = function() {
  let result;
  let resultButton = document.querySelector('.calculator__result');

  resultButton.addEventListener('click', function () {
    let a = document.getElementById('firstNumber');
    console.log(a);
      
    let b = document.getElementById('secondNumber');
    console.log(b);
      
    let operation = document.getElementById('select');
  
    a = +a.value;
    b = +b.value;
    operation = operation.value;
  
      switch (operation) {
        case 'Plus':
          result = a + b;
          break;
        case 'Minus':
          result = a - b;
          break;
        case 'Divide':
          result = a / b;
          break;
        case 'Multiply':
          result = a * b;
          break;
        default:
          result = 'Error';
      }
  
      let resultInput = document.querySelector('.calculate__result_show');
      resultInput.innerText = result;
    });
  };
  
  
