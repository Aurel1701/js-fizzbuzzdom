const numbers = document.querySelector('.numbers')

for (let i = 1; i <= 100; i++){
    

    numbers.insertAdjacentHTML("beforeend", `<div class="number">${i}</div>`)

  

   

}