import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"
import "./estilos.css"

function App () {
    return( 
        <>
        <NavBar/>
        <body>
            <ItemListContainer/>
        </body>
        <Footer/>
        </>
    )
};
export default App