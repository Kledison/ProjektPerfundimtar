import React  ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Col,Row, Container,Image} from 'react-bootstrap'
import {useParams} from 'react-router-dom' 

const DetailItem = () => {
    const [item,setItem] =useState([])
    const {id} =useParams()
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://localhost:3000/readOne' + id)
            .then(res => {
                console.log(res)
                setItem(res.data)
            })
            .catch(err=> {
                console.log("Data not showing" + err)
            })
        };
        fetchData()
    }, [id])
  return (
   <Container>
    <Row>
        <Col>
<h1>{item.name}</h1>
<h1>{item.description}</h1>
<h1>{item.name}</h1>

        </Col>
        <h1>Image</h1>
<Image
src={`http://localhost:5000/images/${item.photo}`}
alt='Uploaded'
rounded
className='img-fluid'
/>
    </Row>
   </Container>
  )
}

export default DetailItem