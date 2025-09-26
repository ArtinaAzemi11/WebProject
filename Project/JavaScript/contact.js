document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Merr vlerat
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Merr div-at e errorit
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Pastro errorat e vjetër
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Regex
    const nameRegex = /^[A-Za-zÇçËë\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    // Validimi i emrit
    if (!nameRegex.test(name)) {
      nameError.textContent = "Ju lutem shkruani një emër të vlefshëm (së paku 2 shkronja).";
      valid = false;
    }

    // Validimi i email-it
    if (!emailRegex.test(email)) {
      emailError.textContent = "Ju lutem shkruani një email të vlefshëm.";
      valid = false;
    }

    // Validimi i mesazhit
    if (message.length < 5) {
      messageError.textContent = "Ju lutem shkruani një mesazh më të gjatë se 5 karaktere.";
      valid = false;
    }

    // Nëse gjithçka në rregull
    if (valid) {
      // Mund të shfaqësh mesazh sukses me ngjyrë jeshile ose alert
      alert("Mesazhi u dërgua me sukses! 🎉");
      form.reset();
    }
  });
});