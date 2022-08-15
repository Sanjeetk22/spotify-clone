console.log('welcome to spotify');
// initialize the varaibles
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let audioElements=new Audio("./music/2.mp3");
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');




let songs=[
    
    {songName:"Alone",filePath:"./music/0.mp3",coverPath:"./cover/img1.jpg"},
    {songName:"I Like Me Better",filePath:"./music/1.mp3",coverPath:"./cover/img1.jpg"},
    {songName:"Jiyein Kyun",filePath:"./music/2.mp3",coverPath:"./cover/img1.jpg"},
    {songName:"perfect",filePath:"./music/3.mp3",coverPath:"./cover/img1.jpg"},
    {songName:"Tum Ho",filePath:"./music/4.mp3",coverPath:"./cover/img1.jpg"},
]

songItem.forEach((element,i)=>{
    
  element.getElementsByTagName('img')[0].src=songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})

// audio element play();
// handle pplay pause click;
masterPlay.addEventListener ('click', ()=>{
    if(audioElements.paused || audioElements.currentTime<=0){
          audioElements.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity=1;

    }
    else{
        audioElements.pause();
          masterPlay.classList.remove('fa-circle-pause');
          masterPlay.classList.add('fa-circle-play');
          gif.style.opacity=0;
}
});
// listen to events
audioElements.addEventListener('timeupdate',()=>{
    
//  seekh bar
progress=parseInt((audioElements.currentTime/audioElements.duration)*100);

myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElements.currentTime=myProgressBar.value*audioElements.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
// audioElements.src="./music/JiyeinKyun.mp3";
 audioElements.src=`./music/${songIndex}.mp3`;
 masterSongName.innerText=songs[songIndex].songName;
audioElements.currentTime=0;
audioElements.play();
gif.style.opacity=1;

masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');




   })  
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElements.src=`./music/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
audioElements.currentTime=0;
audioElements.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElements.src=`./music/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
audioElements.currentTime=0;
audioElements.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

})
