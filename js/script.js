window.onload = function() {
    // Defina o valor inicial de 'resultado' como '0' quando a página carregar
    document.getElementById("resultado").innerHTML = "0";
  };
  
  function insert(num) {
    const resultado = document.getElementById("resultado");
    
    // Se o valor atual for '0', substitua-o pelo número clicado
    if (resultado.innerHTML === "0") {
      resultado.innerHTML = num;
    } else {
      resultado.innerHTML += num; // Caso contrário, adicione o número à string
    }
  }
  
  function clean() {
    document.getElementById("resultado").innerHTML = "0"; // Quando limpa o valor inicial e zero
  }
  
  function back() {
    let resultado = document.getElementById("resultado").innerHTML;
    if (resultado.length > 1) {
      document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
    } else {
      document.getElementById("resultado").innerHTML = "0"; // Se o resultado for um único dígito, reseta para "0"
    }
  }
  
  function calcular() {
    const resultado = document.getElementById("resultado").innerHTML;
    
    if (resultado && resultado !== "0") {
      document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
      document.getElementById("resultado").innerHTML = "Nada...";
    }
  }
  