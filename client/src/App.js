import Home from "./Home";
import NewItem from "./NewItem";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
	{ path: '/', element: <Home/>},
	{ path: '/new',element:<NewItem/>}
]);
function App() {
	return <RouterProvider router={router} />
}

export default App;
