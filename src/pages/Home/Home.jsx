import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppBar from '../../components/AppBar/AppBar';
import Background from '../../components/Background/Background';
import Footer from '../../components/Footer/Footer';
import FormInput from '../../components/Form/FormInput';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <AppBar />
      <Background />
      <Container className={`${styles.hero}`}>
        <Row>
          <Col>
            <div className={`${styles['hero-content']}`}>
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
          </Col>
          <Col>
            <img src="./assets/Mercedes Car EQC 300kW Edition - 900x598 1.png" alt="" />
            <div className={`${styles.bg}`}></div>
          </Col>
        </Row>
      </Container>
      <FormInput />
      <Footer />
    </>
  );
}

export default Home;
