function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById('age').value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let male = document.getElementById('m').checked;
  let female = document.getElementById('f').checked;
  console.table({ age, weight, height, male, female });

  let bmi = weight / ((height / 100) * (height / 100));

  if (
    (age >= 19 && age <= 24 && bmi >= 19 && bmi <= 24) ||
    (age >= 25 && age <= 34 && bmi >= 20 && bmi <= 25) ||
    (age >= 35 && age <= 44 && bmi >= 21 && bmi <= 26) ||
    (age >= 45 && age <= 54 && bmi >= 22 && bmi <= 27) ||
    (age >= 55 && age <= 64 && bmi >= 23 && bmi <= 28) ||
    (age >= 65 && bmi >= 24 && bmi <= 29)
  ) {
    alert('Healthy Weight');
  } else if (bmi < 18.5) {
    alert('Underweight');
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert('Healthy Weight');
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert('Overweight');
  } else if (bmi >= 30) {
    alert('Above Obesity');
  }
}
