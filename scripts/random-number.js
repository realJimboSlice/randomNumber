let knap = document.querySelector(".knap");

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

knap.addEventListener("click", function () {
  let max = document.querySelector(".inputfelt").value;
  let maxNum = parseInt(max);
  let result = randomNumber(maxNum);
  if (isNaN(maxNum) || maxNum < 0 || maxNum !== parseFloat(max)) {
    alert(
      "Du skal skrive et positivt heltal!\nDvs. et tal uden decimaler.\nDet må ikke være et minus tal."
    );
    return;
  }
  document.querySelector(".output").textContent = result;
});
