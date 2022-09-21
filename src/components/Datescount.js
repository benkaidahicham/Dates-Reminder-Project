import React from "react";
import { Row ,Col } from "react-bootstrap";


const Datescount =({person})=>{

    return (
        <Row className='justify-content-center'>
            <Col sm="8" className=''>
                لديك {person.length} مواعيد اليوم
            </Col>
        </Row>
    )
}

export default Datescount