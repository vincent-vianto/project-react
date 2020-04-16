import React, { Component } from 'react'
import {Container, Jumbotron,Row,Col} from 'react-bootstrap'

import "./home.css"

class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron className="top">
                    <Container>
                        <h1 className="text-center">Welcome To My Web</h1>
                    </Container>
                </Jumbotron>
                <Container>
                    <div>
                        <h1>About</h1>
                        <Row className="justify-content-around">
                            <Col md="8">
                            <p>
                                Nama saya Vincent. Saya lahir pada tanngal 8 Oktober 2000. Saya lulusan dari 
                                SMA Ananda jurusan IPA  . Sekarang saya Kuliah di UIB jurusan Sistem Informasi
                                Sekarang saya mempelajari menjadi seorang fullstack developer web 
                            </p>
                            </Col>
                            <Col md="auto">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                    <h1>My Project</h1>
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="4">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                        </Col>
                        <Col md="4">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                        </Col>
                        <Col md="4">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <Col md="4">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                        </Col>
                        <Col md="4">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                        </Col>
                        <Col md="4">
                            <img  className="img-about" src="https://pbs.twimg.com/media/DwIne6hVsAQKcP7.jpg" alt=""/>
                        </Col>
                    </Row>
                    </Container>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home