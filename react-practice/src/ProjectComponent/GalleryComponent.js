import React, { Component } from 'react'
import {Button,Card,Row,Container} from 'react-bootstrap'

class GalleryComponent extends Component {
    
        componentWillMount=()=>{
            
        }
        componentWillUpdate=()=>{

        }
        componentDidUpdate=()=>{

        }
    render() {
        const imagedata=[
            {
                id:1,
                title:'Image 1',
                body:'this is my first image',
                footer:'clicked by Archanendra'
            },
            {
                id:2,
                title:'Image 2',
                body:'this is my second image',
                footer:'clicked by Archanendra'
            },
            {
                id:3,
                title:'Image 3',
                body:'this is my third image',
                footer:'clicked by Archanendra'
            },
            {
                id:4,
                title:'Image 4',
                body:'this is my fourth image',
                footer:'clicked by Archanendra'
            }]; 
        return (
            <div>
                <Container>
                  <Row>
                {
                    imagedata.map((image)=>(
                        
                            <Card key={image.id} style={{height:'250px',width:'250px',marginRight:'10px',marginTop:'5px',marginLeft:'10px'}} > 
                            <Card.Header style={{backgroundColor:'#d1e8e2'}}>{image.title}</Card.Header>
                            <Card.Body>
                                {image.body}
                            </Card.Body>
                            <Card.Footer style={{backgroundColor:'#116466'}}>
                                {image.footer}
                            </Card.Footer>
                        </Card>
                     
                    ))
                   
                }
                </Row>
                </Container>
            </div>
        )
    }
}

export default GalleryComponent
