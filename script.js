const shareBtn = document.getElementById('share-btn');

function share () {

    const avatar = document.querySelector('.coco');
    const icon = document.querySelector('.share-icon');
    const backg = document.querySelector('.michelle-img');
    const buttonIcon = document.querySelector('#share-icon-2');    

    if (avatar.style.display !== 'none') {
        avatar.style.display = 'none';
        backg.style.background = 'hsl(217, 19%, 35%)';
        icon.style.display = 'flex';
        shareBtn.style.background = 'hsl(214, 17%, 51%)';
        // buttonIcon.getSVGDocument().getElementById("M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z").setAttribute("fill", "red");
        
    }
    else if (avatar.style.display == 'none'){
        avatar.style.display = 'flex';
        backg.style.background = '#fff';
        icon.style.display = 'none';
        shareBtn.style.background = 'hsl(210, 46%, 95%)';
    }
    // buttonIcon.getSVGDocument().getElementById("M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z").setAttribute("fill", "red")
}

shareBtn.addEventListener('click', share);