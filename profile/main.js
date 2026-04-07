const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const infoBox = document.getElementById("infoBox");
const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayCity = document.getElementById("displayCity");
const displayHobby = document.getElementById("displayHobby");
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const cityError = document.getElementById("cityError");
const hobbyError = document.getElementById("hobbyError");
function validateForm() {
    let isValid = true;
    nameError.textContent = "";
    ageError.textContent = "";
    cityError.textContent = "";
    hobbyError.textContent = "";
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Введите имя";
        isValid = false;
    }
    if (ageInput.value === "") {
        ageError.textContent = "Введите возраст";
        isValid = false;
    } else if (ageInput.value < 1 || ageInput.value > 120) {
        ageError.textContent = "Возраст от 1 до 120";
        isValid = false;
    }
    if (cityInput.value.trim() === "") {
        cityError.textContent = "Введите город";
        isValid = false;
    }
    if (hobbyInput.value.trim() === "") {
        hobbyError.textContent = "Введите хобби";
        isValid = false;
    }
    return isValid;
}
function displayUserInfo() {
    displayName.textContent = nameInput.value;
    displayAge.textContent = ageInput.value;
    displayCity.textContent = cityInput.value;
    displayHobby.textContent = hobbyInput.value;
    infoBox.style.display = "block";
}
function clearForm() {
    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    hobbyInput.value = "";
    nameError.textContent = "";
    ageError.textContent = "";
    cityError.textContent = "";
    hobbyError.textContent = "";
    
    infoBox.style.display = "none";
}
saveBtn.addEventListener("click", function() {
    if (validateForm()) {
        displayUserInfo();
        alert("Профиль сохранён!");
    }
});
clearBtn.addEventListener("click", clearForm);