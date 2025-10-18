import {Routes,Route} from 'react-router-dom'
import './App.css';
import './index.css'
import RoomPage from './pages/room/index2';
import Homepage from './pages/home/index1';





function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/room/:roomid' element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
