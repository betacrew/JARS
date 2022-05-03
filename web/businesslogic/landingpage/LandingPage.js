import React, { useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import style from './LandingPage.styles.css';
import Logo from '../../../assets/jars_logo.svg'
import { useSelector, useDispatch } from 'react-redux';
import { componentKey } from './LandingPageSlice'
import { genRandomString } from './LandingPageSaga'

export default function LandingPage({}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genRandomString());
    }, []);
    const { randomString } = useSelector((state) => state[componentKey])

    return (
        <Container className={style.mainContainer} fluid>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6" className={style.containerBody}>
                    <Row>
                        <br /><br /><br />
                    </Row>
                    <Row className={style.containerRow} >
                            <h1>Welcome to JARS</h1> 
                            <br /><br /><br /><br /><br />
                    </Row>
                    <Row className={style.containerRow} >
                        <img src={Logo} alt="Logo" height="80" />
                    </Row>
                    <Row className={style.containerRow}>
                        <br /><br />
                        <h3> a microframework for building production ready React and React Native apps</h3>
                    </Row>
                    <Row>
                        <br /><br />
                    </Row>
                    <Row className={style.containerRow}>
                        {randomString && 
                            <p className={style.randomString}> Here is a random string: {randomString} </p>}
                    </Row>
                    <Row>
                        <br /><br />
                    </Row>
                </Col>
                <Col xs="3"></Col>
            </Row>
        </Container>
    );

}