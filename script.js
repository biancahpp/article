const shareBtn = document.getElementById('share-btn');

function share () {

    const avatar = document.querySelector('.coco');
    const icon = document.querySelector('.share-icon');
    const backg = document.querySelector('.michelle-img');
    const buttonIcon = document.querySelector('#share-icon');    

    if (avatar.style.display !== 'none') {
        avatar.style.display = 'none';
        backg.style.background = 'hsl(217, 19%, 35%)';
        icon.style.display = 'flex';
        shareBtn.style.background = 'hsl(214, 17%, 51%)';
        buttonIcon.style.fill = 'red';
        
    }
    else if (avatar.style.display == 'none'){
        avatar.style.display = 'flex';
        backg.style.background = '#fff';
        icon.style.display = 'none';
        shareBtn.style.background = 'hsl(210, 46%, 95%)';
    }

}

shareBtn.addEventListener('click', share);