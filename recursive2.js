/*
2. Buatlah rekursive function yang akan mengembalikan nilai (return) hasil dari angka faktorial
Contoh perhitungan angka faktorial:
4! = 4 * 3!
4! = 4 * 3 * 2!
4! = 4 * 3 * 2 * 1

Contoh hasil:
f(4) -> 24
f(5) -> 120

*/
function faktorial(n) {
    if (n == 1) {
        return 1
    } else {
        return faktorial(n - 1) * n
    }
}

console.log(faktorial(4))
console.log(faktorial(5))