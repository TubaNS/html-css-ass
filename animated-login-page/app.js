
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bck-music');

    function playMusic() {
        if (music) {
            music.play().then(() => {
                console.log('Müzik başarıyla başladı.');
            }).catch(error => {
                console.log('Müzik oynatma hatası:', error);
            });
        }
    }

    // Kullanıcı bir butona tıkladığında müziği başlat
    const loginButton = document.querySelector('.login');
    loginButton.addEventListener('click', function() {
        playMusic();
    });
});