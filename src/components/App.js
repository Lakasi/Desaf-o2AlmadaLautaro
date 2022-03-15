import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"
import "./estilos.css"
import ItemDetailContainer from "./ItemDetailContainer"

function App () {
    return( 
        <>
        <NavBar/>
        <body>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </body>
        <Footer/>
        </>
    )
};
export default App