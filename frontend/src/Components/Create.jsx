import React, {useState} from 'react'
import {Form,Container, Col,Row, Button,Image} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate } from "react-router-dom";


const Create = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    description: "",
    photo: ""
    })
   
    const [uploadedImage, setUploadedImage] = useState(null);
    const navigate = useNavigate();
   
    const handleChange = (e) => {
      setNewItem({ ...newItem, [e.target.name]: e.target.value })
    }
      const handlePhoto = (e) => {
        setNewItem({ ...newItem, photo: e.target.files[0] })
        setUploadedImage(URL.createObjectURL(e.target.files[0]));
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

<Container>
<Row>
  <Col>
   <Form onSubmit={handleSubmit} encType='multipart/form-data'>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product</Form.Label>
        <Form.Control type="text" name= "name" value= {newItem.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}  name= "description" value= {newItem.description} onChange={handleChange}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept=".jpeg, .png, .jpg"
name="photo" onChange={handlePhoto} />
      </Form.Group>
      <Button variant="primary" type="submit">Create</Button>
    </Form>
    </Col>
  <Col>
  {/* Shfaqja e imazhit */}
  {uploadedImage && (
<Image
src={uploadedImage}
alt='Uploaded'
rounded
className='img-fluid'
/>
)}

  </Col>
</Row>  
</Container>

  )
}


export default Create