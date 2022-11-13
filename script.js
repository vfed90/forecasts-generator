/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector(".forecast-btn");
const forecastTitle = document.querySelector(".current-forecast h1");
const forecastSubtitle = document.querySelector(".current-forecast p");
const forecastWrapper = document.querySelector(".forecasts");
const forecastItem = document.querySelector("#forecast-item");

const firstForecast = "Сказке быть!";
const secondForecast = "Живи в удовольствие";
const thirdForecast = "Найдешь то, что давно потерял";
const fourthForecast = "Что бы ни происходило, у тебя есть ТЫ";
const fifthForecast = "Случайная встреча изменит всю твою жизнь";

function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createForecast() {
  const forecast = forecastItem.content.cloneNode(true);
  forecast.querySelector("h3").textContent = forecastTitle.textContent;
  forecast.querySelector("p").textContent = forecastSubtitle.textContent;
  return forecast;
}

forecastButton.addEventListener("click", function () {
  if (forecastTitle.textContent && forecastSubtitle.textContent) {
    const forecast = createForecast();
    forecastWrapper.prepend(forecast);
  }

  let random = generateRandomValue(0, 5);

  switch (random) {
    case 0:
      forecastTitle.textContent = firstForecast;
      break;

    case 1:
      forecastTitle.textContent = secondForecast;
      break;

    case 2:
      forecastTitle.textContent = thirdForecast;
      break;

    case 3:
      forecastTitle.textContent = fourthForecast;
      break;

    case 4:
      forecastTitle.textContent = fifthForecast;
      break;
  }

  let percent = generateRandomValue(0, 100);
  forecastSubtitle.textContent = `Вероятность: ${percent}%`;
});
