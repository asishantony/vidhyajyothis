import React from 'react'
import { Alert, Container, Jumbotron } from 'react-bootstrap'

function Collection() {
    return (
        <div>
           <Container >
               <Alert variant='secondary' >This is the Collection Page</Alert>
               <Jumbotron>This is the content of the collection page</Jumbotron>
           </Container>
        </div>
    )
}

export default Collection
