let array = [];
for (let i = 1; i < 101; i++) {
    array.push(i);
}

function fizzbuzz(fizz, buzz) {
    const newArray = array.map(number => {
      let hasThree = (number + '').includes(3);
      let hasFive = (number + '').includes(5);
  
      if (typeof number !== 'number') return 'Please provide a number';
      if (number <= 0) return 'Please provide a positive number';
      if (number > 100) return 'Please provide a number up to 100';
      if (number % 3 === 0 && number % 5 === 0) {
        const numberUpdated = `${fizz}${buzz}`;
        return numberUpdated;
      }
      if (number % 3 === 0 || hasThree) {
        const numberUpdated = fizz;
        return numberUpdated;
      }
      if (number % 5 === 0 || hasFive) {
        const numberUpdated = buzz;
        return numberUpdated;
      }
      return number;
    });
    return newArray;
  }


const fizzForm = document.querySelector('#fizzForm');
const inputFizz = document.querySelector('#inputFizz');
const inputBuzz = document.querySelector('#inputBuzz');
const result = document.querySelector('#result');

fizzForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fizzValue = inputFizz.value || 'fizz';
  const buzzValue = inputBuzz.value || 'buzz';
  result.innerText = fizzbuzz(fizzValue, buzzValue).join(', ');
  fizzValue = '';
  buzzValue = '';
});

