//249
const card = document.querySelector('.card')
const im = document.querySelector('.top img')
const pname = document.querySelector('.name')
const info = document.querySelector('.info')
card.addEventListener('mouseover', () => {
    card.style.background = 'orange'
    im.style.background = 'white'
    pname.style.color = 'white'
    info.style.color = 'white'
})
card.addEventListener('mouseout', () => {
    card.style.background = 'white'
    im.style.background = 'orange'
    pname.style.color = 'orange'
    info.style.color = 'black'
})