document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bck-music');

    // Login button click handler
    const loginButton = document.querySelector('.login');
    loginButton.addEventListener('click', function() {
        playMusic();
    });

    const playMusic = () => {
        music.play().catch(error => {
            console.log('Otomatik oynatma başarısız oldu:', error);
        });
    };

    // Otomatik müzik çalma
    if (music && music.autoplay) {
        playMusic();
    }
})