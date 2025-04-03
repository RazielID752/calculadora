window.onload = function() {
    // Defina o valor inicial de 'resultado' como '0' quando a página carregar
    document.getElementById("resultado").innerHTML = "0";
  };

function ajustarTamanhoFonte() {
    const resultado = document.getElementById("resultado");
    const comprimento = resultado.innerHTML.length;
  
    // Ajuste o tamanho da fonte conforme o comprimento do texto
    if (comprimento >= 10) {
      resultado.style.fontSize = "20px"; // Fonte menor para números grandes
    } else if (comprimento >= 5) {
      resultado.style.fontSize = "25px"; // Fonte média
    } else {
      resultado.style.fontSize = "28px"; // Fonte normal
    }
  }
  
  function insert(num) {
    const resultado = document.getElementById("resultado");
    
    if (resultado.innerHTML === "0") {
      resultado.innerHTML = num;
    } else {
      resultado.innerHTML += num;
    }
  
    ajustarTamanhoFonte(); // Ajusta o tamanho da fonte sempre que um número for inserido
  }
  
  function clean() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "0";
    ajustarTamanhoFonte(); // Ajusta o tamanho da fonte quando limpar
  }
  
  function back() {
    const resultado = document.getElementById("resultado");
    let valorAtual = resultado.innerHTML;
    
    if (valorAtual.length > 1) {
      resultado.innerHTML = valorAtual.substring(0, valorAtual.length - 1);
    } else {
      resultado.innerHTML = "0"; // Se for um único dígito, reseta para "0"
    }
  
    ajustarTamanhoFonte(); // Ajusta o tamanho da fonte ao apagar
  }
  
  const calcular = () => {
    const resultado = document.getElementById("resultado");
    if (!resultado || resultado.innerHTML.trim() === "") {
      resultado.innerHTML = "Nada...";
      return;
    }
  
    try {
      const expressao = resultado.innerHTML;
      if (/\b\/\s*0\b/.test(expressao)) {
        resultado.innerHTML = "Indefinido!";
        return;
      }
      resultado.innerHTML = eval(expressao);
    } catch (erro) {
        resultado.innerHTML = "Indefinido!";
    }
  
    ajustarTamanhoFonte(); // Ajusta o tamnho da fonte ao calcular
  };
  