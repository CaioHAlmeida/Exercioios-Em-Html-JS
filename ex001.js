var tn1 = Number(document.getElementById("txtn1"))
var tn2 = Number(document.getElementById("txtn2"))
const Calculadora1 =  {
   somar: function() { return(tn1+tn2) },
   subitrair: function() { return(tn1-tn2) },
   dividir: function() { return(tn1/tn2) },
   multiplicar: function() { return(tn1*tn2) }
}


const Somar1 = Calculadora1["somar"]()

const Subitrair1 = Calculadora1["subitrair"]()

const Dividir1 = Calculadora1["dividir"]()

const Multiplicar1 = Calculadora1["multiplicar"]()

res1.InnerHTML = `A soma de ${tn1} e ${tn2} é igual a ${Somar1}`
res2.InnerHTML = `A diferenca de ${tn1} e ${tn2} é igual a ${Subitrair1}`
res3.InnerHTML = `O quociente de ${tn1} e ${tn2} é igual a ${Dividir1}`
res4.InnerHTML = `O produto de ${tn1} e ${tn2} é igual a ${Multiplicar1}`
