document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rezervoForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const trainer = document.getElementById("trainer").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const trainerError = document.getElementById("trainerError");
    const dateError = document.getElementById("dateError");
    const timeError = document.getElementById("timeError");
    const successMessage = document.getElementById("successMessage");

    // Pastro gabimet
    nameError.textContent = "";
    emailError.textContent = "";
    trainerError.textContent = "";
    dateError.textContent = "";
    timeError.textContent = "";
    successMessage.textContent = "";

    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      nameError.textContent = "Shkruani emrin tuaj (min 2 shkronja).";
      valid = false;
    }

    if (!emailRegex.test(email)) {
      emailError.textContent = "Shkruani një email të vlefshëm.";
      valid = false;
    }

    if (trainer === "") {
      trainerError.textContent = "Ju lutem zgjedhni një trajner.";
      valid = false;
    }

    if (date === "") {
      dateError.textContent = "Zgjedhni një datë.";
      valid = false;
    }

    if (time === "") {
      timeError.textContent = "Zgjedhni një orar.";
      valid = false;
    }

    if (valid) {
      successMessage.textContent = "Rezervimi u bë me sukses! 📅✅";
      form.reset();
    }
  });
});