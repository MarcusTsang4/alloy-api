import './App.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  }

  return(
    <div className="App">
      <h1>Purple Banking</h1>
      <Button variant="light" onClick={handleClick}>Sign Up</Button>
    </div>
  )
}

export default App;