import imgsApiServise from "./img-servise.js"
import imagesTemplate from "../templates/img-card.hbs"
import photoCardTemplate from "../templates/photo-card.hbs"


const refs = {
    serchForm: document.querySelector('.js-serch-form'),
    imgContainer: document.querySelector('.js-img-container'),
    loadMoreBtn: document.querySelector('[data-auction="load-more"]'),
    scrolForm: document.getElementById('scroll'),
}

const imgApiServise = new imgsApiServise();

refs.serchForm.addEventListener('submit', onSerch)
refs.loadMoreBtn.addEventListener('click', loadMoreBtn)


function onSerch (evt) {
    evt.preventDefault()
    clearImgConteiner()
    
    imgApiServise.query = evt.currentTarget.elements.query.value
    imgApiServise.resetPage()
    imgApiServise.fetchImgAsync().then(renderImgs)   
    
}

function renderImgs (img) {
    refs.imgContainer.insertAdjacentHTML('beforeend', imagesTemplate(img))  
}

function loadMoreBtn() {
    imgApiServise.fetchImgAsync().then(renderImgs).then(scrollImg)
}

function clearImgConteiner () {
    refs.imgContainer.innerHTML = ""
}

function scrollImg () {
    setTimeout(() => {
        refs.scrolForm.scrollIntoView({ behavior: 'smooth', block: 'end'})  
    }, 500); 
}

