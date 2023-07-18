import { Link} from 'react-router-dom';
import { useContext, useEffect} from 'react';
import StoreContext from './context/store-context';
const api_base = 'http://localhost:3001';

function Home() {
    const ctx= useContext(StoreContext);
	//const [todos, setTodos] = useState([]);

	useEffect(() => {
		GetTodos();
	});

	const GetTodos = () => {
		fetch(api_base + '/todos')
			.then(res => res.json())
			.then(data => ctx.setTodosHandler(data))
			.catch((err) => console.error("Error: ", err));
	}

	const completeTodo = async id => {
		const data = await fetch(api_base + '/todo/complete/' + id).then(res => res.json());

		ctx.setTodosHandler(todos => ctx.todos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = data.complete;
			}

			return todo;
		}));
		
	}

	const deleteTodo = async id => {
		const data = await fetch(api_base + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json());
		ctx.setTodosHandler(todos => ctx.todos.filter(todo => todo._id !== data.result._id));
	}

	return (
		<div className="App">
			<h1>Welcome, Narayan</h1>
			<h4>Your tasks</h4>

			<div className="todos">
				{ctx.todos.length > 0 ? ctx.todos.map(todo => (
					<div className={
						"todo" + (todo.complete ? " is-complete" : "")
					} key={todo._id} onClick={() => completeTodo(todo._id)}>
						<div className="checkbox"></div>

						<div className="text">{todo.text}</div>

						<div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
					</div>
				)) : (
					<p>You currently have no tasks</p>
				)}
			</div>

			<Link to="/new"><div className="addPopup">+</div></Link>
		</div>
	);
}

export default Home;
