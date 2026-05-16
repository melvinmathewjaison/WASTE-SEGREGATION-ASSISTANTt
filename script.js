function checkWaste(){

    let waste = document.getElementById("wasteInput").value.toLowerCase().trim();

    let resultBox = document.getElementById("resultBox");

    let wetWaste = [
        "banana peel",
        "vegetable",
        "food",
        "fruit",
        "egg shell",
        "tea waste"
    ];

    let dryWaste = [
        "paper",
        "cardboard",
        "plastic cover",
        "wrapper",
        "cloth"
    ];

    let recyclableWaste = [
        "bottle",
        "plastic bottle",
        "glass",
        "can",
        "metal"
    ];

    let hazardousWaste = [
        "battery",
        "medicine",
        "chemical",
        "bulb",
        "paint"
    ];

    resultBox.style.display = "block";

    if(wetWaste.includes(waste)){
        resultBox.className = "result wet";
        resultBox.innerHTML =
        "🌱 Wet Waste<br><br>" +
        "This waste is biodegradable and can be used for composting.";
    }

    else if(dryWaste.includes(waste)){
        resultBox.className = "result dry";
        resultBox.innerHTML =
        "📦 Dry Waste<br><br>" +
        "This waste should be placed in the dry waste bin.";
    }

    else if(recyclableWaste.includes(waste)){
        resultBox.className = "result recycle";
        resultBox.innerHTML =
        "♻ Recyclable Waste<br><br>" +
        "This item can be recycled.";
    }

    else if(hazardousWaste.includes(waste)){
        resultBox.className = "result hazard";
        resultBox.innerHTML =
        "⚠ Hazardous Waste<br><br>" +
        "Handle carefully and dispose safely.";
    }

    else{
        resultBox.className = "result";
        resultBox.innerHTML =
        "❓ Waste type not found.<br><br>" +
        "Please enter a valid waste item.";
    }
}