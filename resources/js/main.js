$(window).on('load',function(){
    $(".loading").fadeOut(2000);
    
    $(".container").fadein(1000);
})


const searchBtn = document.querySelector('.searchBtn')
const searchIcon = document.querySelector('.search-icon')
const search_query = document.querySelector('.search-query')
const searching = document.querySelector('.searching')
const bg = document.querySelector('.bg')

const BlueSky = document.querySelector('.BlueSky')
const operationHappy = document.querySelector('.Lucky')

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
}

search_query.addEventListener('mouseover',()=>{
    h1.add('active')
})
search_query.addEventListener('mouseout',()=>{
    h1.remove('active')
})