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
  checkVisibility(".container12");
  checkVisibility(".container13");
  checkVisibility(".apropos3");
  checkVisibility(".L’éphèmere");
  checkVisibility(".bijou888");
}

// Ajoute un écouteur d’événements
window.addEventListener("scroll", checkAllVisibility);

// Vérifie immédiatement au chargement
checkAllVisibility();
