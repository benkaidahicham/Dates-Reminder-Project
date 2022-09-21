import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Datesaction=({DeleteData ,VewData})=>{

    return(
        <Row className='justify-content-center '>
          <Col sm="8" className='d-flex justify-content-between '>
            <Button onClick={DeleteData} className='btn-style p-2'>مسح الكل</Button>
            <Button onClick={VewData} className='btn-style p-2'>عرض البيانات</Button>
          </Col>
        </Row>
    )
}
export default Datesaction