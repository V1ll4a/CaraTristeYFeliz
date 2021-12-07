let urlcarafeliz = "https://images.emojiterra.com/google/android-10/512px/1f60a.png"
let urlcaratriste = "https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
let imgHtml = document.querySelector("#imagencara")
let nota1;
do{
    nota1= parseInt(prompt("Ingrese su nota"))
}while(isNaN(nota1)&& nota1 < 0)
let nota2;
do{
    nota2= parseInt(prompt("Ingrese su nota"))
}while(isNaN(nota2)&& nota2 < 0)
let nota3;
do{
    nota3= parseInt(prompt("Ingrese su nota"))
}while(isNaN(nota3)|| nota3 < 0)
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+ p)
if (p>="6"){
    imgHtml.scr = urlcarafeliz
}
else{
    imgHtml.src = urlcaratriste
}