import './approved.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
 
function Approved() {

  const navigate = useNavigate();
  const handleClick = () => {
     navigate('/signup');
  }

  return (
    <div className="Approved">
      <h1>Success!</h1>
      <h3>Feel free to sign up another customer!</h3>
      <Button variant="light" onClick={handleClick}>Sign Up</Button>
    </div>
  )
}
 
export default Approved;