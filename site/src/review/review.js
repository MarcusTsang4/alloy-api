import './review.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
 
function Reivew() {

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  }

  return (
    <div className="Review">
      <h1>Thanks for submitting your application, we'll be in touch shortly!</h1>
      <h3>Feel free to sign up another customer!</h3>
      <Button variant="light" onClick={handleClick}>Sign Up</Button>
    </div>
  )
}
 
export default Reivew;