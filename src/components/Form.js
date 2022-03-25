import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'


import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useNavigate } from 'react-router-dom'
import NewTab from './NewTab';



const countries = [
  { name: 'India' },
  { name: 'Australia' },
  { name: 'Brazil' },
  { name: 'Canada' },
  { name: 'Duabi' },
  { name: 'England' },
  { name: 'Finland' },
  { name: 'Greek' },
]

function Formm() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [country, setCountry] = useState('')
  const [desc, setDesc] = useState('')
  const [phone, setPhone] = useState('')
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");


  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };




  const handleOnChange = (e) => {
    setEmail(e.target.value);

  };

  const passwordlValidation = () => {
    const regEx = new regEx("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (regEx.test(password)) {
      setMessage1("Password is Valid");
    } else if (!regEx.test(password) && password !== "") {
      setMessage1("password is Not Valid");
    } else {
      setMessage1("")
    }


  }
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

  };

  // const Formm = () => {
  //   const [phone, setphone] = useState("");
  //   const [isError, setIsError] = useState(false);
  // }









  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name, gender, country, desc, email, phone, password)
    if (name.length === 2 || gender === '' || country === 'none' || desc.length === 0 || email.length !== 'undefined' || phone.length !== 10 || password.pattern !== "undefined") {
      alert('please fill mandatory details.')
      return
    }
    const data = { 'name': name, 'gender': gender, 'country': country, 'desc': desc, 'email': email, 'phone': phone, 'password': password }
    localStorage.setItem('items', JSON.stringify(data))
    navigate('/NewTab')
  }



  return (
    <Row className='me-0 justify-content-md-center p-5'>
      <Col md={10} xs={12}>
        <Form onSubmit={submitHandler}>
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '5px', height: '35px', margin: '10px' }} placeholder='Enter Name' />
          <input type='radio' style={{ margin: '10px' }} name='gender' onChange={() => setGender('Male')} />Male
          <input type='radio' style={{ margin: '10px' }} name='gender' onChange={() => setGender('Female')} />Female
          <select style={{ width: '100%', padding: '5px', height: '35px', margin: '10px' }} onChange={(e) => setCountry(e.target.value)}>
            <option value='none'>select</option>
            {countries.map(item => (
              <option key={item.name} value={item.name}>{item.name}</option>
            ))}


          </select>
          <div>
            <textarea style={{ width: '100%', padding: '5px', height: '35px', margin: '10px' }} onChange={(e) => setDesc(e.target.value)} rows={4} placeholder='Comment' />
          </div>

          <div>
            <div>

            </div>
            <div>
              <input
                id="email"
                type="email"
                style={{ width: '50%', padding: '5px', height: '35px', margin: '10px' }}
                placeholder="Email-Id"
                value={email}
                onChange={handleOnChange}
                validation={emailValidation}
              />
              <p className="message">{message}</p>
            </div>
          </div>


          <div>
            <input
              id="pssword"
              type="password"
              style={{ width: '50%', padding: '5px', height: '35px', margin: '10px' }}
              placeholder="Password"
              value={password}
              onChange={handlePasswordOnChange}
              validation={passwordlValidation}
            />
            <p className='message1'>{message1}</p>

          </div>




          
          
            <div>
            <TextField style={{ width: '50%', padding: '5px', margin: '10px' }}
              type="tel"
              error={isError}
              
              value={phone}
              
              placeholder="Enter Phone Number"
              onChange={(e) => {
                setPhone(e.target.value);
                if (e.target.value.length > 10) {
                  setIsError(true);
                }
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  +91
                </InputAdornment>,
              }}
            />
            
          </div>
          




          <div>
            <Button style={{ width: '20%', padding: '5px', margin: '10px' }} type="submit" className='btn-success p-2'>Submit Form</Button>
          </div>

        </Form>
      </Col>
    </Row>
  )
}

export default Formm