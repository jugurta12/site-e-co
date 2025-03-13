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
  checkVisibility(".look");
  checkVisibility(".Clou4");
  checkVisibility(".Space4");
  checkVisibility(".Branch4");
  checkVisibility(".Space2");
  checkVisibility(".Clou2");
  checkVisibility(".Branch2");
  checkVisibility(".parcourir2");
  checkVisibility(".plusencoree");
  checkVisibility(".plusencore11");
  checkVisibility(".plusencore21");
  checkVisibility(".plusencore31");
  checkVisibility(".plusencore12");
  checkVisibility(".plusencore22");
  checkVisibility(".plusencore32");
  checkVisibility(".coll");
  checkVisibility(".col2");
}

// Ajoute un écouteur d’événements
window.addEventListener("scroll", checkAllVisibility);

// Vérifie immédiatement au chargement
checkAllVisibility();
