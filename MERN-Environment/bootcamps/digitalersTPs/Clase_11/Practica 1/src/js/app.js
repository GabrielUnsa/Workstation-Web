/* window.onload = function () {
    if (!document.querySelectorAll('section:target').length) {
        window.location = '#home';
    }
}

document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        const {hash} = e.target
        const sectionTarget = document.querySelector(`section${hash}`);
        window.location = sectionTarget ? hash : '#not-found';
    });
}); */
function loadContent(hash){
    if (!hash) {
        window.location = '#home';
        return;
    }
    console.log(hash);
    const sectionTarget = document.querySelector(`section${hash}`);
    window.location = sectionTarget ? hash : '#not-found';
}

window.onload = function(){
    loadContent(window.location.hash);
    document.querySelectorAll('.nav-link').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            return loadContent(e.target.hash);
        });
    });
}