import Intro from './sections/intro';
import About from './sections/about';
import Education from './sections/education'
import Work from './sections/work';
import Projects from './sections/projects';
import Contact from './sections/contact';

import './App.css';

function App () {
	return (
		<div className="App">
			<header className="App-container">
				<Intro />
				<Education />
				<About />
				<Work />
				<Projects />
				<Contact />
			</header>
		</div>
	);
}

export default App;
