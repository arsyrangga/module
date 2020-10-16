import App from '../App.js'



//let image = 22

// untuk change image
//window.onload = function () {
//   let hero = document.querySelector('.hero')
// let backi = document.querySelector('.backi')
//  let forwa = document.querySelector('.forwa')


//  backi.onclick = function () {
//      hero.style.backgroundImage = `url(https://picsum.photos/seed/${Hero.state.imageNo -= 1}/900)`
//     console.log(image)
//  }
// forwa.onclick = function () {
//      hero.style.backgroundImage = `url(https://picsum.photos/seed/${Hero.state.imageNo += 1}/900)`
//      console.log(image)
//  }
//}


const Hero = () => {
    return `
        <section class="hero" style="
        width:100vw;
        height:80vh;
        display:flex;
        align-items:center; 
        justify-content: space-between;
        padding:0 3%;
        background-image:url(https://picsum.photos/seed/${Hero.state.imageNo}/400) ; 
        background-size:cover;
        color:white;
        text-shadow:5px 4px 5px black;
        z-index:3;
         
        " > 
            <span class="material-icons backi"style="font-size:5rem;cursor:pointer;" onclick="prev()">navigate_before</span>
            <div>
                <h1 style="cursor:pointer;" onclick="showModal()">${Hero.state.text}</h1> 
                ${Hero.state.showModal === true ? (
            "<input style='width:15.5vw;height:32px;' placeholder='masukkan judul' onchange='ubahText(event)'/>") : ''}    
 
            </div>    
            <span class="material-icons forwa" style="font-size:5rem ; cursor:pointer;"onclick="next()">navigate_next</span>
        </section>
    `
}

Hero.state = {
    text: "Ubah",
    setText: (event) => {
        Hero.state.text = event
        App()
    },

    imageNo: 622,
    imgPrev: () => {
        Hero.state.imageNo -= 1
        App()
    },
    imgNext: () => {
        Hero.state.imageNo += 1
        App()
    },
    showModal: false,
    setShowModal: () => {
        Hero.state.showModal = !Hero.state.showModal
        App()
    }
}

window.prev = () => {
    Hero.state.imgPrev()
    // console.log(Hero.state.imageNo)
}
window.next = () => {
    Hero.state.imgNext()
    // console.log(Hero.state.imageNo)

}
window.showModal = () => {
    Hero.state.setShowModal()
    console.log(Hero.state.showModal)
}
window.ubahText = (event) => {
    Hero.state.setText(event.target.value)
}

export default Hero

