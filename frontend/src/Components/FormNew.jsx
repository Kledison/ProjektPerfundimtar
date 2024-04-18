import React , {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate } from "react-router-dom";

const FormNew = () => {
    const [newItem, setNewItem] = useState({
        Emer: '',
        Mbiemer: "",
        Email: "",
        Komenti: "",
        })
       
        const navigate = useNavigate();
       
        const handleChange = (e) => {
          setNewItem({ ...newItem, [e.target.name]: e.target.value })
        }
        const handleSubmit =async (e) => {
          e.preventDefault()
          const formData = new FormData();
          Object.entries(newItem).forEach(([key, value]) => {
            formData.append(key, value);
            });
            await axios.post('http://localhost:5000/create,' ,formData)
            .then(res=> {
              console.log("Added")
              navigate("/")
            }).catch(err => {
              console.log("Error" + err)
            })
        }
  return (
    <Form onSubmit= {handleSubmit} encType='multipart/form-data'>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Emer</Form.Label>
        <Form.Control type="text" name= "Emer"  value={newItem.Emer} onChange={handleChange}/>
        
      </Form.Group>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Mbiemer</Form.Label>
        <Form.Control type="text" name='Mbiemer' value={newItem.Mbiemer} onChange={handleChange} />
        
      </Form.Group>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='Email' value={newItem.Email} onChange={handleChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Shkruani komentin</Form.Label>
        <Form.Control as="textarea" rows={3}  onChange={handleChange}/>
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormNew