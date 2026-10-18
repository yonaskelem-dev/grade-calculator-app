function calculateGrade() {
  let math = Number(document.getElementById("math").value);
  let english = Number(document.getElementById("english").value);
  let science = Number(document.getElementById("science").value);

  if ([math, english, science].some((score) => score < 0 || score > 100)) {
    alert("Scores must be between 0 and 100!");
    return;
  }

  let average = (math + english + science) / 3;

  document.getElementById("average").textContent = average.toFixed(2) + "%";

  let grade;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 85) {
    grade = "A";
  } else if (average >= 80) {
    grade = "A-";
  } else if (average >= 75) {
    grade = "B+";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent =
    average >= 50 ? "Passed" : "Failed";
}
