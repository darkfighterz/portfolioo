console.log("Welcome To Spotify");
let songIndex = 0;

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');



let songs = [
        { songName: "Let Me Love You", filePath: "./songs/1.mp3" },

    ]
    // audioElement.play();
songs.forEach(song => {
        let audioElement = new Audio(song.filePath);
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
        }

    })
    //Handle play/pause click 
masterPlay.addEventListener('click', () => {

    //Listen to Events

    myProgressBar.addEventListener('time', () => {
        console.log('timeupdate');
        //Update Seekbar
    })
})