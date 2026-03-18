const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

week.forEach((day, i) => {
  const dayOfWeek = new Date().getDay() - 1;
  let font

  switch (i) {
    case dayOfWeek:
      font = 'b'
      break;
    case 5:
    case 6:
      font = 'i'
      break;
    default:
      font = 'span'
      break;
  }

  const paragraph = document.createElement("p");
  const text = document.createElement(font);

  text.textContent = day;

  paragraph.append(text);
  document.body.append(paragraph);
});
