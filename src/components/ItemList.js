import Item from "./Item"

function ItemList ({productos}){
    return(

        <ul className="itemList">
            {
                productos.map((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </ul>
       
    );
}
export default ItemList