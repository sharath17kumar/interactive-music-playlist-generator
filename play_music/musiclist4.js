let All_song = [
    {
      name: "Funk-upbeat",
      path: "music/16.mp3",
      img: "images/16.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "Funk-casino",
      path: "music/17.mp3",
      img: "images/17.jpg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "Christmas funky",
      path: "music/18.mp3",
      img: "images/18.jpg",
      singer: "Audio Library"
    },
    {
      name: "Hip-hop",
      path: "music/19.mp3",
      img: "images/19.jpg",
      singer: "imshahed"
    },
    {
      name: "On-funk",
      path: "music/20.mp3",
      img: "images/20.jpg",
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
 
 
 