import Item from "./Item"

function ItemList ({productos}){
    return(

        <ul className="itemList">
            {
                productos.map((producto, index)=>{
                    return <Item key={index} producto={producto}/>
                })
            }
        </ul>
       
    );
}
export default ItemList