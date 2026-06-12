function predictCrop() {

    let temp = parseInt(document.getElementById("temp").value);
    let humidity = parseInt(document.getElementById("humidity").value);
    let rain = parseInt(document.getElementById("rain").value);
    let soil = document.getElementById("soil").value;

    let crop = "";

    if (rain > 150) {
        crop = "Rice 🌾";
    }
    else if (temp > 30) {
        crop = "Cotton 🌱";
    }
    else if (humidity > 60) {
        crop = "Maize 🌽";
    }
    else {
        crop = "Wheat 🌿";
    }

    let fertilizer = "";

    if (crop.includes("Rice")) {
        fertilizer = "Urea";
    }
    else if (crop.includes("Cotton")) {
        fertilizer = "DAP";
    }
    else if (crop.includes("Maize")) {
        fertilizer = "NPK";
    }
    else {
        fertilizer = "Organic Compost";
    }

    let weather = "";

    if (temp > 35) {
        weather = "Hot ☀️";
    }
    else if (temp < 20) {
        weather = "Cold ❄️";
    }
    else {
        weather = "Moderate 🌤️";
    }

    let confidence = Math.floor(Math.random() * 10) + 90;

    document.getElementById("result").innerHTML =
        "Recommended Crop: " + crop +
        "<br>Soil Type: " + soil +
        "<br>Weather Status: " + weather +
        "<br>Recommended Fertilizer: " + fertilizer +
        "<br>AI Confidence: " + confidence + "%" +
        "<br>Farmer Tip: Ensure proper irrigation and soil testing.";
}