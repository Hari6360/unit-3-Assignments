let main = document.querySelector("#main");
main.innerHTML = null;

let Search = document.querySelector("#Search").addEventListener("click", () => {
  let city = document.querySelector("#city").value;
  main.innerHTML = null;
  let map = document.getElementById("gmap_canvas");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a94a92276a7448a1581ead6bec7deb23`;

  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      appendData(res);
      return res;
      // console.log(res);
    })
    .catch(function (err) {
      console.log("err:", err);
    });

  function appendData(data) {
    let city_name = document.createElement("p");
    city_name.innerText = `City: ${data.name}`;

    let humidity = document.createElement("p");
    humidity.innerText = `humidity: ${data.main.humidity}`;

    let temp_max = document.createElement("p");
    temp_max.innerText = `Maximum_Temperature: ${data.main.temp_max}`;

    let temp_min = document.createElement("p");
    temp_min.innerText = `Minimum_Temperature: ${data.main.temp_min}`;

    let current = document.createElement("p");
    current.innerText = `Current Temperature: ${data.main.temp}`;

    let cloud = document.createElement("p");
    cloud.innerText = `Clouds:${data.clouds.all}`;

    let sunrise = document.createElement("div");
    sunrise.setAttribute("id", "sunriseDiv");

    let sunrise_logo = document.createElement("img");
    sunrise_logo.setAttribute("id", "sunriselogo");
    sunrise_logo.setAttribute(
      "src",
      "https://www.animatedimages.org/data/media/278/animated-sun-image-0268.gif"
    );

    let sunrise_temp = document.createElement("p");
    sunrise_temp.innerText = `Sunrise:${data.sys.sunrise}`;

    sunrise.append(sunrise_logo, sunrise_temp);

    let sunset = document.createElement("div");
    sunset.setAttribute("id", "sunsetDiv");
    let sunset_logo = document.createElement("img");
    sunset_logo.setAttribute("id", "sunsetlogo");
    sunset_logo.setAttribute(
      "src",
      "https://www.animatedimages.org/data/media/278/animated-sun-image-0334.gif"
    );

    let sunset_temp = document.createElement("p");
    sunset_temp.innerText = `Sunset:${data.sys.sunset}`;

    sunset.append(sunset_logo, sunset_temp);

    main.append(
      city_name,
      humidity,
      temp_max,
      temp_min,
      current,
      cloud,
      sunrise,
      sunset
    );
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
});
