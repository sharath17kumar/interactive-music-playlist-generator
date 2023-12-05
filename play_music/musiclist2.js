let All_song = [
    {
      name: "smoke",
      path: "music/6.mp3",
      img: "images/6.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "silent-night1",
      path: "music/7.mp3",
      img: "images/7.jpg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "Silent-night2",
      path: "music/8.mp3",
      img: "images/8.jpg",
      singer: "Audio Library"
    },
    {
      name: "silent-night60",
      path: "music/9.mp3",
      img: "images/9.jpg",
      singer: "imshahed"
    },
    {
      name: "relax vlog",
      path: "music/10.mp3",
      img: "images/10.jpg",
      singer: "NoCopyrightSounds"
    },
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 