//import syntax dari file js lain
import index from './index.js'

//membuat sebuah function render
const App = () => {
    document.getElementById('root').innerHTML = index()
}
//menjalankan function
App()

//export App() agar bisa digunakan di file JS lainnya
export default App