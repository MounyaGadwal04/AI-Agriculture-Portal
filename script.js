function recommendCrop() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let humidity = parseFloat(document.getElementById("humidity").value);
    let rainfall = parseFloat(document.getElementById("rainfall").value);
    let soil = document.getElementById("soilType").value;

    let crop = "";
    let confidence = 0;

    // 🌾 Rice
    if (humidity > 70 && rainfall > 100) {
        crop = "Rice 🌾";
        confidence = 92;

    // 🌿 Cotton
    } else if (temp >= 25 && temp <= 40 && (soil === "Black Soil" || soil === "Red Soil")) {
        crop = "Cotton 🌱";
        confidence = 90;

    // 🌽 Maize
    } else if (temp >= 20 && temp <= 30 && rainfall >= 50 && rainfall <= 120) {
        crop = "Maize 🌽";
        confidence = 88;

    // 🌾 Wheat
    } else if (temp >= 10 && temp <= 25 && rainfall < 80) {
        crop = "Wheat 🌾";
        confidence = 85;

    } else {
        crop = "Mixed Crops / Unsure ⚠️";
        confidence = 70;
    }

    document.getElementById("result").innerHTML =
        "Recommended Crop: " + crop +
        "<br>Soil Type: " + soil +
        "<br>AI Confidence: " + confidence + "%";
}