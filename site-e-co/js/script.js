const j1 = document.getElementById("j1");
const jj1 = j1.nextElementSibling;
const j2 = document.getElementById("j2");
const jj2 = j2.nextElementSibling;
const j3 = document.getElementById("j3");
const jj3 = j3.nextElementSibling;
const j4 = document.getElementById("j4");
const jj4 = j4.nextElementSibling;
const j5 = document.getElementById("j5");
const jj5 = j5.nextElementSibling;
const j6 = document.getElementById("j6");
const jj6 = j6.nextElementSibling;

j1.addEventListener("mouseenter", () => {
  jj1.classList.add("transi");
});

j1.addEventListener("mouseleave", () => {
  jj1.classList.remove("transi");
});

j2.addEventListener("mouseenter", () => {
  jj2.classList.add("transi");
});

j2.addEventListener("mouseleave", () => {
  jj2.classList.remove("transi");
});

j3.addEventListener("mouseenter", () => {
  jj3.classList.add("transi");
});

j3.addEventListener("mouseleave", () => {
  jj3.classList.remove("transi");
});
j4.addEventListener("mouseenter", () => {
  jj4.classList.add("transi");
});

j4.addEventListener("mouseleave", () => {
  jj4.classList.remove("transi");
});
j5.addEventListener("mouseenter", () => {
  jj5.classList.add("transi");
});

j5.addEventListener("mouseleave", () => {
  jj5.classList.remove("transi");
});
j6.addEventListener("mouseenter", () => {
  jj6.classList.add("transi");
});

j6.addEventListener("mouseleave", () => {
  jj6.classList.remove("transi");
});

function inscrire() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Veuillez entrer une adresse e-mail.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return;
  }

  alert("Inscription réussie !");
  emailInput.value = "";
}

function checkVisibility() {
  const element = document.querySelector(".container3");
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    element.classList.add("visible"); // Ajoute la classe si visible
  } else {
    element.classList.remove("visible"); // Retire la classe si caché
  }
}

// Écoute l'événement scroll
window.addEventListener("scroll", checkVisibility);

// Vérifie immédiatement au cas où l'élément est déjà visible au chargement
checkVisibility();

function checkVisibility2() {
  const element2 = document.querySelector(".container4");
  const rect2 = element2.getBoundingClientRect();
  const windowHeight2 = window.innerHeight;

  if (rect2.top < windowHeight2 && rect2.bottom > 0) {
    element2.classList.add("visible2"); // Ajoute la classe si visible
  } else {
    element2.classList.remove("visible2"); // Retire la classe si caché
  }
}

// Écoute l'événement scroll
window.addEventListener("scroll", checkVisibility2);

// Vérifie immédiatement au cas où l'élément est déjà visible au chargement
checkVisibility2();

function checkVisibility(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.log(`Élément ${selector} introuvable`);
    return;
  }

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    element.classList.add("visible");
    console.log(`${selector}  ✅`);
  } else {
    element.classList.remove("visible");
    console.log(`${selector} ❌`);
  }
}

// Vérifie tous les éléments
function checkAllVisibility() {
  checkVisibility(".container3");
  checkVisibility(".container4");
  checkVisibility(".bijouterie");
  checkVisibility(".collections");
}

// Ajoute un écouteur d’événements
window.addEventListener("scroll", checkAllVisibility);

// Vérifie immédiatement au chargement
checkAllVisibility();
