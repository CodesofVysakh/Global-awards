import './App.css';
import Spotlight from './components/screens/Spotlight';
import Head from './components/include/Head';
import Cards from './components/screens/Cards';
import Form from './components/screens/Form';
import Foot from './components/include/Foot';

function App() {
	return (
		<>
			<Head />
			<Spotlight />
			<Cards />
			<Form />
			<Foot />
		</>	
	);
}

export default App;
