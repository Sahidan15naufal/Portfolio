document.addEventListener('scroll', function() {
    const fadeElement = document.getElementById('fadeElement');
    const rect = fadeElement.getBoundingClientRect();
    
    // Cek apakah elemen berada di dalam viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        fadeElement.classList.add('visible');
    }
});

document.addEventListener('scroll', function() {
    const fadeCok = document.getElementById('fadeCok');
    const rect = fadeCok.getBoundingClientRect();
    
    // Cek apakah elemen berada di dalam viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        fadeCok.classList.add('visible');
    }
});