import React from 'react';
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './FormInput.module.css';

const FormInput = (props) => {
  const ref1 = React.useRef();
  const ref2 = React.useRef();

  return (
    <Form action="" className={`${props.className} ${styles.inputBox}`} onSubmit={props.onSubmit}>
      <Row className="align-items-center">
        <Col>
          <Form.Label className="d-block">Tipe Driver</Form.Label>
          <Form.Select aria-label="Default select example" className={`${styles['form-select']}`}>
            <option>Pilih Tipe Driver</option>
            <option value="1">Dengan Sopir</option>
            <option value="2">Tanpa Sopir (Lepas Kunci)</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label className="d-block">Tanggal</Form.Label>
          <InputGroup>
            <Form.Control
              style={{ borderRight: 'none' }}
              className={`${styles['form-select']}`}
              ref={ref1}
              onChange={(e) => console.log(e.target.value)}
              onFocus={() => (ref1.current.type = 'date')}
              onBlur={() => (ref1.current.type = 'date')}
              placeholder="Pilih Tanggal"
              type="text"
            />
            <InputGroup.Text
              style={{
                backgroundColor: 'white',
              }}
            >
              {' '}
              <img src="./assets/fi_calendar.png" alt="" srcset="" />{' '}
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col>
          <Form.Label className="d-block">Waktu Jemput/Ambil</Form.Label>
          <InputGroup>
            <Form.Control
              style={{ borderRight: 'none' }}
              className={`${styles['form-select']}`}
              ref={ref2}
              onChange={(e) => console.log(e.target.value)}
              onFocus={() => (ref2.current.type = 'time')}
              onBlur={() => (ref2.current.type = 'time')}
              placeholder="Pilih Waktu"
              type="text"
            />
            <InputGroup.Text
              style={{
                backgroundColor: 'white',
              }}
            >
              {' '}
              <img src="./assets/fi_clock.png" alt="" srcset="" />{' '}
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col>
          <Form.Label className="d-block">Jumlah Penupang (Opsional)</Form.Label>
          <InputGroup>
            <Form.Control style={{ borderRight: 'none' }} className={`${styles['form-select']}`} placeholder="Jumlah Penumpang" type="text" />
            <InputGroup.Text
              style={{
                backgroundColor: 'white',
              }}
            >
              {' '}
              <img src="./assets/fi_users.png" alt="" srcset="" />{' '}
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col>
          <Button style={{ transform: 'translateY(13px)' }} type="submit" variant="success" className={`${styles['btn-green']}`}>
            <Link to="/search" className="text-white">
              Cari Mobil
            </Link>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormInput;
