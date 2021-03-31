import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
function App() {
  function Alert (x){

alert(x)

  }
  return (
    <div className="App">
   
    
    < Profile fullName="siheem" bio="student at GoMyCode" profession="student" handlealert={Alert}>

<img src="photo.bmp" alt="..."/>

    </Profile>
    </div>
  );
}

export default App;
