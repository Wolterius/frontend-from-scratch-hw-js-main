// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest() {
    let a = +prompt("Введите число a")
    let b = +prompt("Введите число b")
    let c = +prompt("Введите число c")
    if(a > b && a > c){
        return a
    }else if(b > a && b > c){
        return b
    }else{
        return c
    }
}
