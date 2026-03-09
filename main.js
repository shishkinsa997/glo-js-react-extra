// 1
const lang = prompt("Enter language", "en");
const ru = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// a
if (lang === "en") {
  console.log(en);
} else if (lang === "ru") {
  console.log(ru);
} else {
  console.log("Error");
}
// b
switch (lang) {
  case "en":
    console.log(en);
    break;
  case "ru":
    console.log(ru);
    break;
  default:
    console.log("Error");
    break;
}
// c
const langs = { en, ru };
lang === "en"
  ? console.log(langs.en)
  : lang === "ru"
    ? console.log(langs.ru)
    : console.log("Error");

// 2
const namePerson = prompt("Enter name", "Artem");
console.log(
  namePerson === "Artem"
    ? "director"
    : namePerson === "Alexander"
      ? "teacher"
      : "student",
);
