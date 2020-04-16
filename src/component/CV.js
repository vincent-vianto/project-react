import React, {Component} from 'react'
import {Container, Row, Col} from "react-bootstrap"

class PortFolio extends Component{
    render(){
        return(
            <Container>
                <h1> Portfolio</h1>
                <Row>
                    <Col md="4">
                        <h3>Nama </h3>
                        <span>Vincent Octarian Vianto</span>
                        <h3>Tanggal Lahir</h3>
                         <span>8 Oktober 2000</span>
                         <h3> Latar Belakang Pendidikan</h3>
                        <span> SMA Ananda (2019)</span>
                    </Col>
                    <Col md="4">
                        <h3>Nomor Telepon </h3>
                        <span>08117713486</span>
                        <h3>E-mail</h3>
                        <span>vincentvianto@gmail.com</span>
                        <h3>LINE</h3>
                        <span>vincentvianto</span>
                    </Col>
                    <Col md="4">
                     <img src="https://www.thestable.com.au/wp-content/uploads/2019/01/BETC-Disneyland-Paris-5.png"
                        alt=""
                        style={{
                            width:"400px",
                            height:"200px"
                        }}/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}


export default PortFolio