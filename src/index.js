// import App.js
import App from './App.js'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Headline from './components/Headline.js'
import Slider from './components/Slider.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'



//Buat function index yang berisi syntax HTML
const index = () => {
    return `
        ${Navbar()}
        ${Menu()}
        ${Hero()}
        ${Headline()}
        ${Slider()}
        ${Footer()}
 
        
    `
}

//export index() agar bisa di pakai di file lainnya
export default index