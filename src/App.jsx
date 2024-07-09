import './App.css'

const App = () => {
	const handleClick = (e) => {

		console.log(e);
	};

	return <button onClick={handleClick}>Click me!</button>;
};



export default App
