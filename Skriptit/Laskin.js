function laske() {
  const eka = Number(document.getElementById("num1").value);
  const toka = Number(document.getElementById("num2").value);
  const merkki = document.getElementById("merkki").value;
  const resultElement = document.getElementById("tulos");

  let vastaus;

  switch (merkki) {
    case "+":
      vastaus = eka + toka;
      break;
    case "-":
      vastaus = eka - toka;
      break;
    case "*":
      vastaus = eka * toka;
      break;
    case "/":
      if (toka === 0) {
        resultElement.textContent = "Virhe: ei voi jakaa nollalla";
        return;
      }
      vastaus = eka / toka;
      break;
  }

  resultElement.textContent = "Tulos: " + vastaus;
}
