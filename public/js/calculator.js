function buttonNum(num) {
    document.getElementById("result").value += num
}

function clearResult() {
  document.getElementById("result").value = "" 
}

function calculateResult() {
    let num = document.getElementById("result").value
    let result = eval(num)

    document.getElementById("result").value = result
}

function plusMinus() {
    let num = document.getElementById("result").value
    let result = eval(num * -1)

    document.getElementById("result").value = result
}

function percentage() {
    let num = document.getElementById("result").value
    let result = eval(num / 100)

    document.getElementById("result").value = result
}