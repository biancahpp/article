const shareBtn = document.getElementById('share-btn');

function share () {

    const avatar = document.querySelector('.avatar-wrapper');

    avatar.style.display == 'none' ? avatar.style.display = 'block' : avatar.style.display = 'none';
}

shareBtn.addEventListener('click', share)