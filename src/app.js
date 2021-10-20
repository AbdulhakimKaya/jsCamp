console.log("Merhaba kodlama.io")

// JS type safe (tip güvenli) değildir

let dolarBugun = 19 

let dolarDun = 9.34
dolarDun = "9.34"

{
    let dolarDun = 9.20
}

console.log(dolarDun)

const euroDun = 11.2  // sabittir (değiştirilemez)
// euroDun = 11 yazarsak hata alırız
console.log(euroDun)
 
//array
let konutKredileri = ["konut kredisi","emlak konut kredisi","kamu konut kredisi"]
console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}

console.log("</ul>")


