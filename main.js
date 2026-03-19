const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function declension(num, words) {
  num = Math.abs(num) % 100;
  const lastDigit = num % 10;

  if (num > 10 && num < 20) return words[2];
  if (lastDigit > 1 && lastDigit < 5) return words[1];
  if (lastDigit === 1) return words[0]; // 1

  return words[2];
}

function padZero(num) {
  return num.toString().padStart(2, "0");
}

function formatA(date) {
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekDay = week[date.getDay() - 1];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourWord = declension(hours, ["час", "часа", "часов"]);
  const minuteWord = declension(minutes, ["минута", "минуты", "минут"]);
  const secondWord = declension(seconds, ["секунда", "секунды", "секунд"]);

  return `Сегодня ${weekDay}, ${day} ${month} ${year} года, ${hours} ${hourWord} ${minutes} ${minuteWord} ${seconds} ${secondWord}`;
}

function formatB(date) {
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  const now = new Date();

  document.body.innerHTML = `
    <p>${formatA(now)}</p>
    <p>${formatB(now)}</p>
`;
}, 1000);
