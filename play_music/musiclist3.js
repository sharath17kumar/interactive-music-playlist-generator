let All_song = [
    {
      name: "inspiring ambient",
      path: "music/11.mp3",
      img: "images/11.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "leva-eternity",
      path: "music/12.mp3",
      img: "images/12.jpg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "awaken",
      path: "music/13.mp3",
      img: "images/13.jpg",
      singer: "Audio Library"
    },
    {
      name: "water-fluid",
      path: "music/14.mp3",
      img: "images/14.jpg",
      singer: "imshahed"
    },
    {
      name: "loneliness of winner",
      path: "music/15.mp3",
      img: "images/15.jpg",
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
 
 
 