 import React from "react" 
 import { Link } from "react-router-dom"
 import "../App.css"

const ListItems = props => (
    <ul className="list-group"> 
  {props.items.map((item)=>(
<li className="list-group-item"key={item.id}> <strong> name : </strong> {item.name} <strong> email:</strong> {item.email}
<Link to={`/users/${item.id}`}> go to user </Link>
<button className="btn btn-danger deletebtn" onClick={()=> props.handleDelete(item.id)}>Delete</button>

</li>

  ))}
    
    </ul>
);

export default ListItems;