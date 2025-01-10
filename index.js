

function calculateAge(){
  const date1 = new Date();
  const month1 = date1.getMonth() + 1;
  const day1 = date1.getDate();
  const year1 = date1.getFullYear();

  const userDob = document.getElementById('dob').value;

  const dob = new Date(userDob);
  const month2 = dob.getMonth() + 1;
  const day2 = dob.getDate();
  const year2 = dob.getFullYear();

  let age = year1 - year2;
  if (month1 < month2 || (month1 === month2 && day1 < day2)) {
    age--;
  }

  let month = month1 - month2;
  if (month1 < month2){
    month--;
  }
  if (month < 0){
    month = 12 + month;
  }

  let day = day1 - day2;
  if (day1 < 0){
    const daysInLastMonth = new Date(year1, month1 - 1, 0).getDate();
    day += daysInLastMonth;
  }

  document.getElementById('result').innerHTML = `You are ${age} years, ${month} months and ${day} days old`;
}