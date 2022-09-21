import React from "react";
import { Col, Row } from "react-bootstrap";

const Dateslist=({person})=>{

    return(
        <Row className='justify-content-center'>
          <Col sm="8" className=''>
            <div className='rectangle p-2 my-2'>
            {person.length ? (person.map((item)=>{
              return (
                <div key={item.id} className='d-flex border-bottom mx-3 my2'>
                <img className='img-avatar' src={item.img} alt='salahphooto'/>
                <div className='px-3'>
                  <p className='d-inline fs-5'>{item.name}</p>
                  <p className=' fs-6'>{item.date}</p>
                </div>
              </div>
              )
            })) : <h2 className='p-5 text-center'>لا توجد مواعيد اليوم</h2>}
            
            </div>
          </Col>
        </Row>
    )
}

export default Dateslist