$(window).on('load',function(){
    $(".loading").fadeOut(2000);
    
    $(".container").fadein(1000);
})


const searchBtn = document.querySelector('.searchBtn')
const searchIcon = document.querySelector('.search-icon')
const search_query = document.querySelector('.search-query')
const searching = document.querySelector('.searching')
const bg = document.querySelector('.bg')
const cover = document.querySelector('.cover')
const dancing = document.querySelector('.dancing')
const BlueSky = document.querySelector('.BlueSky')
const operationHappy = document.querySelector('.Lucky')

const instru1= document.querySelector('.instru1')
const instru2 = document.querySelector('.instru2')

const ring = document.querySelector('.ring')

const h1 = document.querySelector('.h1').classList
function GoogleAPI(){
    const query = `https://www.google.com/search?q=${search_query.value}`
    console.log(query)
    if (search_query.value == ""){

    }else{
        searching.href = query
        searching.click()
    }
}

searchIcon.onclick = ()=>{
    GoogleAPI()
}

searchBtn.onclick = ()=>{
    GoogleAPI()
    
}



operationHappy.onclick= ()=>{
    bg.style.opacity = "100"
    BlueSky.play()
    h1.add('active')
}

search_query.addEventListener('mouseover',()=>{
    h1.add('active')
})
search_query.addEventListener('mouseout',()=>{
    h1.remove('active')
})

BlueSky.addEventListener('timeupdate',()=>{

        seconds = BlueSky.currentTime
        minutes = Math.floor( seconds/ 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        time = minutes + ":" + seconds
        console.log( time )
        if(time == "00:00"){
            ring.src = "./resources/media/img/luckyME2.gif"
            instru1.src = ""
            dancing.src = "./resources/media/img/dance.gif"
            instru2.src = "./resources/media/img/guitar.gif"
        }
        if ( time == "00:04"){
            cover.style.opacity = "1"
            instru2.src = "./resources/media/img/luckyME3.gif"
            dancing.src = "./resources/media/img/luckyME4.gif"
        }else if( time == "00:05"){
            cover.style.opacity = "0"
            instru1.src = "./resources/media/img/luckyME.gif"
            dancing.src = "./resources/media/img/dance2.gif"
        }else if(time =="00:07" ){
            
            dancing.src = "./resources/media/img/dance3.gif"
        }else if(time =="00:11" ){
            instru1.style.transform = "scaleX(1)"
            instru1.src = "./resources/media/img/sing.gif"
            
        }else if (time =="00:14" ){
            instru1.style.transform = "scaleX(-1)"
            instru1.src = "./resources/media/img/sing.gif"
            
        }
        else if (time =="00:19" ){
            instru1.style.transform = "scaleX(1)"
            instru1.src = "./resources/media/img/sing.gif"
            
        }


        if ( time == "00:26"){
            cover.style.opacity = "1"
            instru1.style.transform = "scaleX(-1)"
            dancing.src = "./resources/media/img/luckyME.gif"
            ring.src = "./resources/media/img/ring1.gif"
        }else if( time == "00:27"){
            instru1.style.transform = "scaleX(1)"
            cover.style.opacity = "0"

        }

        if( time == "00:28"){
            instru1.style.transform = "scaleX(1)"
    

        }

        //45   54  109
        if ( time == "00:43"){
            cover.style.opacity = "1"
            dancing.src = "./resources/media/img/luckyME.gif"
            ring.src = "./resources/media/img/ring1.gif"
        }else if( time == "00:44"){
            // 43 49 55 101
            cover.style.opacity = "0"
            instru1.src = "./resources/media/img/sing3.gif"
            instru2.src = ""
             dancing.src = "./resources/media/img/dance4.gif"
        }else if( time == "00:49"){
            instru2.src = ""
            instru1.src = "./resources/media/img/sing2.gif"
        }else if( time == "00:55"){
            instru1.src = "./resources/media/img/sing3.gif"
        }else if(time == "01:02"){
            dancing.src = "./resources/media/img/sleep.gif"
            instru1.src = "./resources/media/img/sing3.gif"
        }
        else if(time == "01:07"){
            dancing.src = "./resources/media/img/luckyMe4.gif"
            instru2.src = "./resources/media/img/sing4.gif"
            instru1.src = "./resources/media/img/luckyME.gif"
        }

        
})