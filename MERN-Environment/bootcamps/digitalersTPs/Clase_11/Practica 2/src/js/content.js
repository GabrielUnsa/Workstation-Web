/**
 * Crea el contendio de la pagina
 *
 * @param {Object} {app, pages} - crea el contenido de la pagina SPA
 */
function content({app, pages}){
    const hash = window.location.hash.replace('#','');
    const page = pages[hash] || pages.home;
    const sectionElement = document.querySelector('section');
    if (sectionElement) {
        sectionElement.innerHTML = page();
        return;
    }
    const newSectionElement = document.createElement('section');
    newSectionElement.innerHTML = page();
    app.appendChild(newSectionElement);
}
