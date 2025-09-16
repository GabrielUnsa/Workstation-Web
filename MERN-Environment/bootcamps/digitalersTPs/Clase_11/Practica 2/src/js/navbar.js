/**
 * Crea el NavBar de nuestra pagina
 * @date 2025-04-09
 * @param { Object } {app, pages} - Objeto que contiene el div principal y las paginas de nuestra aplicacion.
 */
function navbar( {app, pages} ){
    if (!app) return; //Si no tengo el div principal donde se encontrará mi contenido, termino la ejecucion
    
    //Links que contendra mi pagina
    const links = [
    {hash: 'home', title: 'inicio'},
    {hash: 'about', title: 'nosotros'},
    {hash: 'products', title: 'productos'},
    {hash: 'contact', title: 'contacto'},
];
    
    //Creamos la lista que contrendra el navbar con cada link (bootstrap)
    const linksTemplate = links.map( ({ hash, title}) =>
        `
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#${hash}">${title.charAt(0).toUpperCase()}${title.slice(1)}</a>
        </li>
        `
    ).join(''); 

    //Creamos el navbar con la lista de link que creamos en la seccion anterior
    const template = ` 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#home">JS SPA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            ${linksTemplate}
        </ul>
        </div>
    </div>
    </nav>
    `
    const header = document.createElement('header');
    header.innerHTML = template;
    app.appendChild(header);

    document.querySelectorAll('.nav-link').forEach( elem => {
        elem.addEventListener('click', e => {
            const {hash} = e.target;
            if(hash){
                const page = pages[hash.replace('#','')] || pages.home;
                const sectionElement = document.querySelector('section');
                if (sectionElement) {
                    sectionElement.innerHTML = page();
                    return;
                }
                const newSectionElement = document.createElement('section');
                newSectionElement.innerHTML = page();
                app.innerHTML(newSectionElement);
                //window.location = hash;
            }
        })
    });
}
