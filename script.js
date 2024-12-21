document.getElementById('calculate').addEventListener('click', function() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(height) || height <= 0) {
      resultDiv.textContent = 'Please enter a valid height.';
      return;
  }

  if (isNaN(weight) || weight <= 0) {
      resultDiv.textContent = 'Please enter a valid weight.';
      return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(2);

  let category = '';
  if (bmi < 18.5) {
      category = 'Underweight';
  } else if (bmi < 24.9) {
      category = 'Normal weight';
  } else if (bmi < 29.9) {
      category = 'Overweight';
  } else {
      category = 'Obese';
  }

  resultDiv.textContent = `Your BMI is ${bmiRounded} (${category})`;
});