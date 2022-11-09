let sum = 0 
let sumEl = document.getElementById('sum')


console.log(sumEl)

function addOne(){
  sum += 1 
  sumEl.textContent = sum
  console.log(sum)
}

function lowerOne(){
  sum -= 1
  sumEl.textContent = sum
  console.log(sum)
}