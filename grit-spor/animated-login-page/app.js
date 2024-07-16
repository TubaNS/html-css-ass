document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bck-music');
    const playMusic = () => {
      music.play().catch(error => {
        console.log('Otomatik oynatma başarısız oldu:', error);
      });
    };
  
    if (music) {
      playMusic(); // Sayfa yüklenir yüklenmez müziği çalmayı dener
    }
  });


  alert("Şarkının keyfini çıkartmanız dileğiyle :)")