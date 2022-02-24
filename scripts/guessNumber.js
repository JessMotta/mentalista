// sorteio do numero
var secretNumber = parseInt(Math.random() * 11);
console.log(secretNumber);

// contagem de tentativas
var numberOfAttempts = 0;

// compare
for (numberOfAttempts = 0; numberOfAttempts < 3; numberOfAttempts++) {
  function GuessNumber() {
    // read typed number and convert to integer
    var typedNumber = parseInt(document.getElementById("guessNumber").value);
    var result = document.getElementById("result");

    console.log(numberOfAttempts);

    if (typedNumber == secretNumber) {
      result.innerHTML = "Parabéns, você acertou! Tente adivinhar novamente";
      numberOfAttempts = 0;
    }
    document.getElementById("guessNumber").value = "";
    if (typedNumber < 0 || typedNumber > 10) {
      result.innerHTML = "Digite um número entre 0 e 10";
    } else if (numberOfAttempts < 2 && typedNumber != secretNumber) {
      result.innerHTML = "Você errou, tente novamente";
      numberOfAttempts++;
    } else if (numberOfAttempts >= 2 && typedNumber != secretNumber) {
      result.innerHTML = `Suas changes acabaram, o número que eu estava pensado era ${secretNumber}`;
      numberOfAttempts = 0;
    }
  }
}
numberOfAttempts = 0;
