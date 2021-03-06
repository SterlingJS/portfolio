import IntroModal from '../components/intro-modal'
// import './section.css';
import './intro.scss';


function Intro () {

	const beginIntro = () => {
		document.getElementById('leftLine').classList.add('final');
		document.getElementById('rightLine').classList.add('final');
		document.getElementById('largeLine').classList.add('final');
		document.getElementById('firstName').classList.add('final');
		document.getElementById('lastName').classList.add('final');
		document.getElementById('jamesJ').classList.add('final');
		document.getElementById('jamesA').classList.add('final');
		document.getElementById('jamesM').classList.add('final');
		document.getElementById('jamesE').classList.add('final');
		document.getElementById('jamesS').classList.add('final');
		document.getElementById('sterlingS').classList.add('final');
		document.getElementById('sterlingT').classList.add('final');
		document.getElementById('sterlingE').classList.add('final');
		document.getElementById('sterlingR').classList.add('final');
		document.getElementById('sterlingL').classList.add('final');
		document.getElementById('sterlingI').classList.add('final');
		document.getElementById('sterlingN').classList.add('final');
		document.getElementById('sterlingG').classList.add('final');
		document.getElementById('sterlingComma').classList.add('final');
		var audioToggle = document.getElementById("audioToggleButton");
		audioToggle.style.display = "visible";
		var audio = document.getElementById("strangerAudio");
  		audio.volume = 1.0;
		audio.loop = false;
		audio.play();

	}

	const toggleVolume = () => {
		var audio = document.getElementById("strangerAudio");
		var volumeToggle = document.getElementById("audioToggleButton");
		if (audio.volume === 0) {
			audio.volume = 1.0;
			volumeToggle.classList.remove('muted');
		} else {
			audio.volume = 0;
			volumeToggle.classList.add('muted');
		}
	}

	const scrollToEducation = () => {
		
	}



	return (
		<div>	
			<IntroModal beginIntro={beginIntro} />
			<audio id='strangerAudio' autostart="false">
				<source src="stranger_think.mp3" type="audio/mpeg"/>
				Your browser does not support the audio element. 
			</audio>
			<div id='audioToggleButton' onClick={toggleVolume}/>
			<div className='intro-container'>
				<div id='largeLine' />
				<div id='lastName'>
					<p id='sterlingS'>S</p>
					<p id='sterlingT'>T</p>
					<p id='sterlingE'>E</p>
					<p id='sterlingR'>R</p>
					<p id='sterlingL'>L</p>
					<p id='sterlingI'>I</p>
					<p id='sterlingN'>N</p>
					<p id='sterlingG'>G</p>
					<p id='sterlingComma'>,</p>
				</div>
				<div id='firstName' >
					<div id='leftLine' className='small-line'/>
					<p id='jamesJ'>J</p>
					<p id='jamesA'>A</p>
					<p id='jamesM'>M</p>
					<p id='jamesE'>E</p>
					<p id='jamesS'>S</p>
					<div id='rightLine' className='small-line'/>
				</div>
				{/* <div id='educationScroll' >
					<button id='educationScrollButton' onClick={scrollToEducation} >
						More
					</button>
				</div> */}
				
			</div>
		</div>
	)
}

export default Intro;