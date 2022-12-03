function calcula_imc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const nome = document.getElementById('nome').value;
    const imc = peso / (altura * altura);
    if (imc < 15.99) {
      document.getElementById("resultado").innerHTML = `${nome}: Magreza Grave! Vá ao médico URGENTEMENTE!`;
      document.getElementById("resultado").style.backgroundColor = 'blue';
    } else if (imc >= 16 && imc <= 16.99) {
      document.getElementById("resultado").innerHTML = `${nome}: Magreza Modrada! Cuide-se`;
      document.getElementById("resultado").style.backgroundColor = 'grey';
    } else if (imc >= 17 && imc <= 18.5) {
      document.getElementById("resultado").innerHTML = `${nome}: Magreza leve`;
      document.getElementById("resultado").style.backgroundColor = 'yellow';
    } else if (imc >= 18.5 && imc <= 24.9) {
      document.getElementById("resultado").innerHTML = `${nome}: Saudável! Meus parabéns, continue assim`;
      document.getElementById("resultado").style.backgroundColor = 'green';
    } else if (imc >= 25 && imc <= 29.9) {
      document.getElementById("resultado").innerHTML = `${nome}: Sobrepeso`;
      document.getElementById("resultado").style.backgroundColor = 'grey';
    } else if (imc >= 30 && imc <= 34.9) {
      document.getElementById("resultado").innerHTML = `${nome}: Obesidade grau 1! Cuide-se`;
      document.getElementById("resultado").style.backgroundColor = 'orange';
    } else if (imc >= 35 && imc <= 39.9) {
      document.getElementById("resultado").innerHTML = `${nome}: Obesidade grau 2(severa)!! Hora de ir ao médico`;
      document.getElementById("resultado").style.backgroundColor = 'red';
    } else if (imc >= 40) {
      document.getElementById("resultado").innerHTML = `${nome}: Obesidade grau 3(severa)!!! Vá ao médico URGENTEMENTE!`;
      document.getElementById("resultado").style.backgroundColor = 'purple';
    }
  }