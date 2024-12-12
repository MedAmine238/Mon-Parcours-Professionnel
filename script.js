document.addEventListener('DOMContentLoaded', () => {
    const frBtn = document.getElementById('fr-btn');
    const enBtn = document.getElementById('en-btn');
    const sections = document.querySelectorAll('section');

    // Fonction pour changer de langue
    frBtn.addEventListener('click', () => toggleLanguage('fr'));
    enBtn.addEventListener('click', () => toggleLanguage('en'));

    function toggleLanguage(lang) {
        const isEnglish = lang === 'en';
        document.getElementById('site-title').innerText = isEnglish ? 'My Professional Journey' : 'Mon Parcours Professionnel';

        // Modifier d'autres contenus si nécessaire
        document.querySelector('#contact h2').innerText = isEnglish ? 'Contact' : 'Contact';
        document.querySelector('#experience h2').innerText = isEnglish ? 'Experience' : 'Expérience';
        document.querySelector('#formation h2').innerText = isEnglish ? 'Education' : 'Formation';
        document.querySelector('#competences h2').innerText = isEnglish ? 'Skills' : 'Compétences';
        document.querySelector('#langues h2').innerText = isEnglish ? 'Languages' : 'Langues';
        document.querySelector('#distinctions h2').innerText = isEnglish ? 'Awards' : 'Distinctions';
        document.querySelector('#projets h2').innerText = isEnglish ? 'Projects' : 'Projets';

        document.getElementById('contact-button').innerText = isEnglish ? 'Contact Me' : 'Contactez-moi';
    }

    // Animation lors du défilement
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
