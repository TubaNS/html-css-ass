document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bck-music');

    // Müziği otomatik olarak başlatma işlemi
    function startMusic() {
        if (music) {
            music.play().then(() => {
                console.log('Müzik başarıyla başladı.');
            }).catch(error => {
                console.log('Müzik otomatik başlatma başarısız:', error);
            });
        }
    }

    // Sayfa yüklendiğinde veya belirli bir süre sonra müziği başlatma
    startMusic();

    // Kullanıcı etkileşimiyle müziği başlatma
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target && target.classList.contains('login')) {
            startMusic();
        }
    });
});