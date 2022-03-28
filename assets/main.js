const numbers = document.querySelector('.numbers')

for (let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 !== 0){
        numbers.insertAdjacentHTML("beforeend", `<div class="number fizz">Fizz</div>`)

    }else if(i % 5 == 0 && i % 3 !== 0){
        numbers.insertAdjacentHTML("beforeend", `<div class="number buzz">Buzz</div>`)

    }else if(i % 3 == 0 && i % 5 == 0){
        numbers.insertAdjacentHTML("beforeend", `<div class="number fizzbuzz">FizzBuzz</div>`)

    }else{
        numbers.insertAdjacentHTML("beforeend", `<div class="number normal">${i}</div>`)

    }

}


