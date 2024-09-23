const form = document.querySelector("form");
//this usecase will give you empty value
// const weight = parseInt(document.querySelector('#weight').value)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show results
    // const BMI = (results.innerHTML = `<span>${bmi}</span>`);
    if (bmi < 18.6) {
      results.innerHTML = `${bmi} is under weight BMI`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `${bmi} is normal range BMI`;
    } else {
      results.innerHTML = `${bmi} is over weight BMI`;
    }
  }
});
