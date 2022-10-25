import "./ListItem.css"


function ListItem({children, todo}) {

    const lightgrey = todo.id%2 ? "lightgrey" : null


return <li className={lightgrey}>
                {todo.id}-{todo.title}
                {lightgrey && children}
              </li>

}

export default ListItem;
