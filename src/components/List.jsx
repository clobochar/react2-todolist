import Button from "./Button";
import ListItem from "./ListItem";

function List({arr, children}) {

return <ul className="list">

    {children}
          {/* {arr.map((todo) => {
            return <ListItem key={"todo"+todo.id} todo={todo}>
                <Button name="Delete" handleClick={}/>
            </ListItem>}
          )} */}
        </ul>
        
}

export default List;
