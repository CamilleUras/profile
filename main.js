document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, 
        });
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        document.body.scrollTo({
          top: targetElement.offsetTop - 50, 
    
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const quoteElement = document.querySelector('.text');
  const text = "Fort d'une carrière de 10 ans dans le domaine du commerce, j'ai récemment entrepris une reconversion professionnelle en m'inscrivant à la formation de développeur web chez Simplon. Mon parcours professionnel comprend la création et la gestion de ma propre entreprise, expérience qui a renforcé ma passion pour la technologie. Aujourd'hui, en quête de nouvelles opportunités dans le monde du développement web, je m'investis pleinement dans cette formation pour acquérir les compétences techniques nécessaires à cette transition. Mon objectif est de combiner mon expertise antérieure en commerce avec mes nouvelles compétences en développement web pour créer des solutions innovantes et conviviales dans le monde numérique en constante évolution.";
  const speed = 40; 
  const delay = 1000;

  typeText(quoteElement, text, speed, delay);

});

function typeText(element, text, speed, delay) {
  let index = 0;

  function type() {
    element.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
      setTimeout(type, speed);
    }
  }

  setTimeout(type, delay);
}