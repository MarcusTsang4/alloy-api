import React, {useState} from 'react';
import './SignUp.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const navigate = useNavigate();
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [addressLine1 , setAddressLine1] = useState('');
  const [addressLine2 , setAddressLine2] = useState('');
  const [city , setCity] = useState('');
  const [state , setState] = useState('');
  const [zipPostalCode , setZipPostalCode] = useState('');
  const [country , setCountry] = useState('');
  const [ssn , setSsn] = useState('');
  const [email , setEmail] = useState('');
  const [dateOfBirth , setDateOfBirth] = useState('');
  const [validated, setValidated] = useState(false);

  const handleFirstNameChange = (e) => { setFirstName(e.target.value) }
  const handleLastNameChange = (e) => { setLastName(e.target.value) }
  const handleAddressLine1Change = (e) => { setAddressLine1(e.target.value) }
  const handleAddressLine2Change = (e) => { setAddressLine2(e.target.value) }
  const handleCityChange = (e) => { setCity(e.target.value) }
  const handleStateChange = (e) => { setState(e.target.value) }
  const handleZipPostalCodeChange = (e) => { setZipPostalCode(e.target.value) }
  const handleCountryChange = (e) => { setCountry(e.target.value) }
  const handleSsnChange = (e) => { setSsn(e.target.value) }
  const handleEmailChange = (e) => { setEmail(e.target.value) }
  const handleDateOfBirthChange = (e) => { setDateOfBirth(e.target.value) }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      axios.post("https://alloy-integration.herokuapp.com/submit", 
      {
        name_first: firstName,
        name_last: lastName,
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        address_city: city,
        address_state: state,
        address_postal_code: zipPostalCode,
        address_country_code: country,
        document_ssn: ssn,
        email_address: email,
        birth_date: dateOfBirth
      }).then(function(response) {
        let response_json = JSON.parse(response.data)
        let status_code = response_json.status_code
        let result = response_json.summary?.outcome
        if (status_code === 201) {
          if (result === "Approved") {
            navigate('/approved');
          } else if (result === "Manual Review") {
            navigate('/review');
          } else {
            navigate('/denied');
          }
        } else {
          toast.warn('There is an invalid entry. Please double check that all values are correct');
        }
      }).catch(function(error) {
        toast.error('There was an error processing your entry. Please try again later');
      })
    }
  }

  return (
    <div className="SignUp">
      <ToastContainer />
      <div className="col-md-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="First Name" value={firstName} required
            onChange={ (e) => {handleFirstNameChange(e)} }/>
            <label>First Name</label>
            <div className="invalid-feedback">
              First name is required
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Last Name" value={lastName} required
            onChange={ (e) => {handleLastNameChange(e)} }/>
            <label>Last Name</label>
            <div className="invalid-feedback">
              Last name is required
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Address Line 1" value={addressLine1} required
            onChange={ (e) => {handleAddressLine1Change(e)} }/>
            <label>Address Line 1</label>
            <div className="invalid-feedback">
              Address is requried
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Address Line 2" value={addressLine2} 
            onChange={ (e) => {handleAddressLine2Change(e)} }/>
            <label>Address Line 2 - <i>Optional</i></label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="City" value={city} required 
            onChange={ (e) => {handleCityChange(e)} }/>
            <label>City</label>
            <div className="invalid-feedback">
              City is requried
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="State" value={state} required 
            pattern="(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])"
            onChange={ (e) => {handleStateChange(e)} }/>
            <label>State</label>
            <div className="invalid-feedback">
              Please enter a capitalized two letter state abbreviation
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Zip/Postal Code" value={zipPostalCode} required 
            onChange={ (e) => {handleZipPostalCodeChange(e)} }/>
            <label>Zip/Postal Code</label>
            <div className="invalid-feedback">
              Zip/Postal Code is required
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Country" value={country} required 
            pattern="US"
            onChange={ (e) => {handleCountryChange(e)} }/>
            <label>Country</label>
            <div className="invalid-feedback">
              Please enter 'US'
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="SSN" value={ssn} required 
            pattern="^\d{9}$"
            onChange={ (e) => {handleSsnChange(e)} }/>
            <label>SSN</label>
            <div className="invalid-feedback">
              Please enter a valid 9 digit SSN
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" placeholder="Email" value={email} required
            onChange={ (e) => {handleEmailChange(e)} }/>
            <label>Email</label>
            <div className="invalid-feedback">
              Please enter a valid email address
            </div>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Date of Birth" value={dateOfBirth} required 
            pattern="^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$" 
            onChange={ (e) => {handleDateOfBirthChange(e)} }/>
            <label>Date of Birth</label>
            <div className="invalid-feedback">
              Please use the format YYYY-MM-DD
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignUp;