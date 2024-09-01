document.getElementById('videoSelect').addEventListener('change', function(event) {
    const videoPath = event.target.value;
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoPath;
    videoPlayer.load();
    videoPlayer.play();
});

// Cargar el primer video por defecto al cargar la página
window.addEventListener('load', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPath = document.getElementById('videoSelect').value;
    videoPlayer.src = videoPath;
    videoPlayer.load();
});
