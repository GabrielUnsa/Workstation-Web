window.onload = function() {
    //Elementos
    const elements = {
        app: document.getElementById('app'),
        pages: {
            home: homePage,
            about: aboutPage,
            products: productsPage,
            contact: contactPage
        }
    };
    //Metodos
    navbar(elements);
    content(elements);
    //Listeners
    //API
    console.log('Cargo el sitio');
}