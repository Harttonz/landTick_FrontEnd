exports.getDayName = (dateString) => {
  const d = new Date(dateString);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // get day 
  const dayName = days[d.getDay()];

  // get month
  const listMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Juny",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  const Month =listMonth[d.getMonth()];

  const getDayMonth = `${dayName}, ${d.getDate()} ${Month} ${d.getFullYear()}`;
  return getDayMonth;
};
exports.GetIDR = (number) => {
  let reverse = number.toString().split("").reverse().join("");
  let idr = `Rp. ${reverse.match(/\d{1,3}/g).join(".").split("").reverse().join("")}`;
  return idr;
};

exports.intervalTime=(time1, time2)=> {
  let x = time1;
  let y = time2;
  let hour_x = parseInt(x.substring(0, 2)) * 60;
  let hour_y = parseInt(y.substring(0, 2)) * 60;
  let minute_x = parseInt(x.substring(3, 5));
  let minute_y = parseInt(x.substring(3, 5));
  let result_x = hour_x + minute_x;
  let result_y = hour_y + minute_y;
  let diff = result_y - result_x;
  let hour = Math.floor(diff / 60);
  let minute = diff - hour * 60;

  if (hour < 0) hour = hour * -1;
  let time = hour + " h" + "" +  minute + " m";
  return time;
}
exports.timeRange = (dateStart, dateEnd) =>{
  const dStart = new Date(dateStart)
  const dEnd = new Date(dateEnd)
  const miliSec =  dEnd - dStart
  const hour = ( ( (miliSec / 1000) / 60 ) / 60 ).toFixed(0) + ' Jam'
  return hour
}