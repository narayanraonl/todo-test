import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "./context/store-context";
const api_base = 'http://localhost:3001';

const NewItem = ()=>{
    const ctx=useContext(StoreContext);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = async () => {
		const data = await fetch(api_base + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				text: newTodo
			})
		}).then(res => res.json());

		ctx.setTodosHandler([...ctx.todos, data]);
		setNewTodo("");
	}
    return(
    <div className="popup">
        <div className="content">
            <h3>Add Task</h3>
            <input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
            <div><Link to='/'><div className="button" onClick={addTodo}>Create Task</div></Link></div>
            <Link to='/'><div className="back-button">Back</div></Link>
        </div>
    </div>         
)};
export default NewItem;