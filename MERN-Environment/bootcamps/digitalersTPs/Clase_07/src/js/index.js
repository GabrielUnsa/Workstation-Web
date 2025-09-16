const images = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5', 'img-6', 'img-7'];
const app = $('#app');
function createImage(imgName, options = {}){
    const div = document.createElement('div');
    div.classList.add(options.parentClass || 'img-container');
    const img = document.createElement('img');
    img.setAttribute('src', './src/img/' + imgName +'.jpg');
    img.classList.add(options.imageClass || 'img');
    div.appendChild(img);
    return div;
}

function insertImages( imgNames = [] ){
    imgNames.forEach((path) => {
        const myImage = createImage(path);
        app.append(myImage);
    });
}
insertImages(images);
function removeModal( e ){
    e.preventDefault();
    $('.modal').fadeOut(300, function(){
        $(this).remove('modal-image-container');
    });
}

const insertedImages = $('.img').on('click', function (e) {
    e.preventDefault();
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const src = $(this).attr('src');
    const imgName = src.split('/')[3].split('.')[0];
    const img = createImage(imgName, 
        { 
            parentClass: 'modal-image-container', 
            imageClass: 'modal-image' 
        });
    const innerModal = document.createElement('div');
    innerModal.classList.add('modal-inner');
    modal.appendChild(innerModal);
    modal.appendChild(img);
    $('body').append(modal);
    $('.modal').append('<div class="close-modal"><i class="fa-solid fa-circle-xmark"></i></div>'); 
    $('.modal').fadeIn(400).css('display', 'flex').on('click', removeModal);
    $('.close-modal').on('click', removeModal);
});

