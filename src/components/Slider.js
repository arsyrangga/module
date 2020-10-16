import App from '../App.js'
import Card from '../components/Card.js'
const Slider = () => {
    return `
        <section class="slider">

        <div class="cardContainer">

            ${Card('https://picsum.photos/seed/312/400', 'Card 1', 'Ini adalah card pertama')}
            ${Card('https://picsum.photos/seed/313/400', 'Card 2', 'Ini adalah card kedua')}
            ${Card('https://picsum.photos/seed/314/400', 'Card 3', 'Ini adalah card ketiga')}
            ${Card('https://picsum.photos/seed/315/400', 'Card 4', 'Ini adalah card keempat')}
            ${Card('https://picsum.photos/seed/316/400', 'Card 5', 'Ini adalah card kelima')}
            ${Card('https://picsum.photos/seed/317/400', 'Card 6', 'Ini adalah card keenam')}
            ${Card('https://picsum.photos/seed/324/400', 'Card 7', 'Ini adalah card ketujuh')}
            ${Card('https://picsum.photos/seed/387/400', 'Card 8', 'Ini adalah card kedelapan')}

        </div>

        </section>
    
    `
}

export default Slider