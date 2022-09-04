//Variaveis para as imagens do Slider Projeto 1
const projeto1Image1 = document.querySelector('.imagens-projeto .img-1-projeto-1')
const projeto1Image2 = document.querySelector('.imagens-projeto .img-2-projeto-1')
const projeto1Image3 = document.querySelector('.imagens-projeto .img-3-projeto-1')
const projeto1Image4 = document.querySelector('.imagens-projeto .img-4-projeto-1')
const projeto1Image5 = document.querySelector('.imagens-projeto .img-5-projeto-1')
const projeto1Image6 = document.querySelector('.imagens-projeto .img-6-projeto-1')
//Variaveis para as imagens do Slider Projeto 2
const projeto2Image1 = document.querySelector('.imagens-projeto .img-1-projeto-2')
const projeto2Image2 = document.querySelector('.imagens-projeto .img-2-projeto-2')
const projeto2Image3 = document.querySelector('.imagens-projeto .img-3-projeto-2')
const projeto2Image4 = document.querySelector('.imagens-projeto .img-4-projeto-2')
const projeto2Image5 = document.querySelector('.imagens-projeto .img-5-projeto-2')
const projeto2Image6 = document.querySelector('.imagens-projeto .img-6-projeto-2')
//Variaveis para as imagens do Slider Projeto 3
const projeto3Image2 = document.querySelector('.imagens-projeto .img-2-projeto-3')
const projeto3Image3 = document.querySelector('.imagens-projeto .img-3-projeto-3')
const projeto3Image1 = document.querySelector('.imagens-projeto .img-1-projeto-3')
const projeto3Image4 = document.querySelector('.imagens-projeto .img-4-projeto-3')
const projeto3Image5 = document.querySelector('.imagens-projeto .img-5-projeto-3')
const projeto3Image6 = document.querySelector('.imagens-projeto .img-6-projeto-3')


//Variaveis para os botões das imagens Projeto 1
const btnImage1Projeto1 = document.querySelector('.buttons-projeto-1 .button-img-1')
const btnImage2Projeto1 = document.querySelector('.buttons-projeto-1 .button-img-2')
const btnImage3Projeto1 = document.querySelector('.buttons-projeto-1 .button-img-3')
const btnImage4Projeto1 = document.querySelector('.buttons-projeto-1 .button-img-4')
const btnImage5Projeto1 = document.querySelector('.buttons-projeto-1 .button-img-5')
const btnImage6Projeto1 = document.querySelector('.buttons-projeto-1 .button-img-6')
//Variaveis para os botões das imagens Projeto 2
const btnImage1Projeto2 = document.querySelector('.buttons-projeto-2 .button-img-1')
const btnImage2Projeto2 = document.querySelector('.buttons-projeto-2 .button-img-2')
const btnImage3Projeto2 = document.querySelector('.buttons-projeto-2 .button-img-3')
const btnImage4Projeto2 = document.querySelector('.buttons-projeto-2 .button-img-4')
const btnImage5Projeto2 = document.querySelector('.buttons-projeto-2 .button-img-5')
const btnImage6Projeto2 = document.querySelector('.buttons-projeto-2 .button-img-6')
//Variaveis para os botões das imagens Projeto 3
const btnImage1Projeto3 = document.querySelector('.buttons-projeto-3 .button-img-1')
const btnImage2Projeto3 = document.querySelector('.buttons-projeto-3 .button-img-2')
const btnImage3Projeto3 = document.querySelector('.buttons-projeto-3 .button-img-3')
const btnImage4Projeto3 = document.querySelector('.buttons-projeto-3 .button-img-4')
const btnImage5Projeto3 = document.querySelector('.buttons-projeto-3 .button-img-5')
const btnImage6Projeto3 = document.querySelector('.buttons-projeto-3 .button-img-6')


//Eventos para alternar imagens atraves dos botões Projeto 1
btnImage1Projeto1.addEventListener('click', showImage1Project1)
btnImage2Projeto1.addEventListener('click', showImage2Project1)
btnImage3Projeto1.addEventListener('click', showImage3Project1)
btnImage4Projeto1.addEventListener('click', showImage4Project1)
btnImage5Projeto1.addEventListener('click', showImage5Project1)
btnImage6Projeto1.addEventListener('click', showImage6Project1)
//Eventos para alternar imagens atraves dos botões Projeto 2
btnImage1Projeto2.addEventListener('click', showImage1Project2)
btnImage2Projeto2.addEventListener('click', showImage2Project2)
btnImage3Projeto2.addEventListener('click', showImage3Project2)
btnImage4Projeto2.addEventListener('click', showImage4Project2)
btnImage5Projeto2.addEventListener('click', showImage5Project2)
btnImage6Projeto2.addEventListener('click', showImage6Project2)
//Eventos para alternar imagens atraves dos botões Projeto 3
btnImage1Projeto3.addEventListener('click', showImage1Project3)
btnImage2Projeto3.addEventListener('click', showImage2Project3)
btnImage3Projeto3.addEventListener('click', showImage3Project3)
btnImage4Projeto3.addEventListener('click', showImage4Project3)
btnImage5Projeto3.addEventListener('click', showImage5Project3)
btnImage6Projeto3.addEventListener('click', showImage6Project3)


//Funções para alterar imagens pelos botões  Projeto 1

function showImage1Project1(){
    projeto1Image1.classList.remove('hide')
    projeto1Image2.classList.add('hide')
    projeto1Image3.classList.add('hide')
    projeto1Image4.classList.add('hide')
    projeto1Image5.classList.add('hide')
    projeto1Image6.classList.add('hide')
}
function showImage2Project1(){
    projeto1Image1.classList.add('hide')
    projeto1Image2.classList.remove('hide')
    projeto1Image3.classList.add('hide')
    projeto1Image4.classList.add('hide')
    projeto1Image5.classList.add('hide')
    projeto1Image6.classList.add('hide')
}
function showImage3Project1(){
    projeto1Image1.classList.add('hide')
    projeto1Image2.classList.add('hide')
    projeto1Image3.classList.remove('hide')
    projeto1Image4.classList.add('hide')
    projeto1Image5.classList.add('hide')
    projeto1Image6.classList.add('hide')
}
function showImage4Project1(){
    projeto1Image1.classList.add('hide')
    projeto1Image2.classList.add('hide')
    projeto1Image3.classList.add('hide')
    projeto1Image4.classList.remove('hide')
    projeto1Image5.classList.add('hide')
    projeto1Image6.classList.add('hide')
}
function showImage5Project1(){
    projeto1Image1.classList.add('hide')
    projeto1Image2.classList.add('hide')
    projeto1Image3.classList.add('hide')
    projeto1Image4.classList.add('hide')
    projeto1Image5.classList.remove('hide')
    projeto1Image6.classList.add('hide')
}
function showImage6Project1(){
    projeto1Image1.classList.add('hide')
    projeto1Image2.classList.add('hide')
    projeto1Image3.classList.add('hide')
    projeto1Image4.classList.add('hide')
    projeto1Image5.classList.add('hide')
    projeto1Image6.classList.remove('hide')
}
//Funções para alterar imagens pelos botões  Projeto 2

function showImage1Project2(){
    projeto2Image1.classList.remove('hide')
    projeto2Image2.classList.add('hide')
    projeto2Image3.classList.add('hide')
    projeto2Image4.classList.add('hide')
    projeto2Image5.classList.add('hide')
    projeto2Image6.classList.add('hide')
}
function showImage2Project2(){
    projeto2Image1.classList.add('hide')
    projeto2Image2.classList.remove('hide')
    projeto2Image3.classList.add('hide')
    projeto2Image4.classList.add('hide')
    projeto2Image5.classList.add('hide')
    projeto2Image6.classList.add('hide')
}
function showImage3Project2(){
    projeto2Image1.classList.add('hide')
    projeto2Image2.classList.add('hide')
    projeto2Image3.classList.remove('hide')
    projeto2Image4.classList.add('hide')
    projeto2Image5.classList.add('hide')
    projeto2Image6.classList.add('hide')
}
function showImage4Project2(){
    projeto2Image1.classList.add('hide')
    projeto2Image2.classList.add('hide')
    projeto2Image3.classList.add('hide')
    projeto2Image4.classList.remove('hide')
    projeto2Image5.classList.add('hide')
    projeto2Image6.classList.add('hide')
}
function showImage5Project2(){
    projeto2Image1.classList.add('hide')
    projeto2Image2.classList.add('hide')
    projeto2Image3.classList.add('hide')
    projeto2Image4.classList.add('hide')
    projeto2Image5.classList.remove('hide')
    projeto2Image6.classList.add('hide')
}
function showImage6Project2(){
    projeto2Image1.classList.add('hide')
    projeto2Image2.classList.add('hide')
    projeto2Image3.classList.add('hide')
    projeto2Image4.classList.add('hide')
    projeto2Image5.classList.add('hide')
    projeto2Image6.classList.remove('hide')
}
//Funções para alterar imagens pelos botões  Projeto 3
function showImage1Project3(){
    projeto3Image1.classList.remove('hide')
    projeto3Image2.classList.add('hide')
    projeto3Image3.classList.add('hide')
    projeto3Image4.classList.add('hide')
    projeto3Image5.classList.add('hide')
    projeto3Image6.classList.add('hide')
}
function showImage2Project3(){
    projeto3Image1.classList.add('hide')
    projeto3Image2.classList.remove('hide')
    projeto3Image3.classList.add('hide')
    projeto3Image4.classList.add('hide')
    projeto3Image5.classList.add('hide')
    projeto3Image6.classList.add('hide')
}
function showImage3Project3(){
    projeto3Image1.classList.add('hide')
    projeto3Image2.classList.add('hide')
    projeto3Image3.classList.remove('hide')
    projeto3Image4.classList.add('hide')
    projeto3Image5.classList.add('hide')
    projeto3Image6.classList.add('hide')
}
function showImage4Project3(){
    projeto3Image1.classList.add('hide')
    projeto3Image2.classList.add('hide')
    projeto3Image3.classList.add('hide')
    projeto3Image4.classList.remove('hide')
    projeto3Image5.classList.add('hide')
    projeto3Image6.classList.add('hide')
}
function showImage5Project3(){
    projeto3Image1.classList.add('hide')
    projeto3Image2.classList.add('hide')
    projeto3Image3.classList.add('hide')
    projeto3Image4.classList.add('hide')
    projeto3Image5.classList.remove('hide')
    projeto3Image6.classList.add('hide')
}
function showImage6Project3(){
    projeto3Image1.classList.add('hide')
    projeto3Image2.classList.add('hide')
    projeto3Image3.classList.add('hide')
    projeto3Image4.classList.add('hide')
    projeto3Image5.classList.add('hide')
    projeto3Image6.classList.remove('hide')
}