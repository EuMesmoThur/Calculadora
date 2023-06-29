function calculo(operation) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");
    var resultado;
  
    if (isNaN(numero1) || isNaN(numero2)) {
      resultadoElement.textContent = "Por favor, insira números válidos.";
      return;
    }
  
    switch (operation) {
      case 'soma':
        resultado = numero1 + numero2;
        break;
      case 'subtracao':
        resultado = numero1 - numero2;
        break;
      case 'multiplicacao':
        resultado = numero1 * numero2;
        break;
      case 'divisao':
        resultado = numero1 / numero2;
        break;
      default:
        resultado = "Operação inválida";
    }
  
    resultadoElement.textContent = "Resultado: " + resultado;
  }