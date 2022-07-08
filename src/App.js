import logo from './logo.svg';
import './App.css';
import { JitsiMeeting } from '@jitsi/react-sdk';

function App() {
  return (
    <div className="App">


      <JitsiMeeting

configOverwrite = {{
  startWithAudioMuted: true,
  hiddenPremeetingButtons: ['microphone']
}}


    roomName = { ' your Name '}
    getIFrameRef = { node => node.style.height = '100vh' }
    />

    </div>
  );
}

export default App;
