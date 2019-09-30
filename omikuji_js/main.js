var currenHour = 11;
if (currenHour < 12) {
  console.log("AM");
}else if (currenHour > 12) {
  console.log("pm");
}else {
  console.log("noon");
}

var currenHour = 12;
if (currenHour < 12) {
  console.log("AM");
}else if (currenHour > 12) {
  console.log("pm");
}else {
  console.log("noon");
}

var currenHour = 20;
if (currenHour < 12) {
  console.log("AM");
}else if (currenHour > 12) {
  console.log("pm");
}else {
  console.log("noon");
}

//↓関数

function ChackAmpm (currentHour) {
  if (currentHour < 12) {
    console.log("AM");
  }else if (ChackAmpm > 12);{
    console.log("PM");
  }else 
    console.log("noon");
}

checkAmpm (11);
checkAmpm (12);
checkAmpm (20);