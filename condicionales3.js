let urlcarafeliz = "https://images.emojiterra.com/google/android-10/512px/1f60a.png"
let urlcaratriste = "https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
let imgHtml = document.querySelector("#imagencara")
do{
    nota1 = parseInt(prompt("ingrese su nota "))
} while (isNaN (nota1))
do{
    nota2 = parseInt(prompt("ingrese su nota "))
} while (isNaN (nota2))
do{
    nota3 = parseInt(prompt("ingrese su nota "))
} while (isNaN (nota3))
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+ p)
if (p>6){
    imgHtml.src = urlcarafeliz
}
else{
    imgHtml.src = urlcaratriste
}
