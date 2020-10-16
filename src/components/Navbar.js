import App from '../App.js'
const Navbar = () => {
    return `
        <nav class='navbar' style="
        width:100vw;
        height:10vh;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding:0 7%;
        background-color: rgb(0, 1, 35);
        color:white;
        box-shadow: 0 2.5px 3px yellow;
        z-index:10;
        position:sticky;
        top:0;
        left:0;
        "> 
            <h1 class='brand' style="font-size:2.3rem;cursor:default;"contenteditable="false" draggable="true">JVAS</h1>
        </nav>
    
    `
}


// export component navbar agar bisa di pakai dimanapun
export default Navbar