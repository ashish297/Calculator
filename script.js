
let string = '';
let buttonElement = document.querySelectorAll('.button'); //getting all buttons in buttonElement in form of a array
Array.from(buttonElement).forEach((Element)=> {   
  Element.addEventListener('click',(e)=>{
    if(e.target.innerHTML === '=') {
      string = eval(string);
      document.getElementById('input-output-js').value = string;
    } else if (e.target.innerHTML === 'C'){
      string = '';
      document.getElementById('input-output-js').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.getElementById('input-output-js').value = string;
    }
  });
});

