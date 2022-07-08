import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import styles from './Card.module.css';

const CardList = (props) => {
  return (
    <React.Fragment>
      <Card className={styles.card} style={{ width: '333px' }} key={props.id}>
        <Card.Img style={{ padding: '25px' }} variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ fontSize: '14', fontWeight: '400' }}>
            {props.name}/{props.category}
          </Card.Title>
          <Card.Title style={{ fontSize: '16', fontWeight: '700' }}>{props.price} / hari</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className={styles.list}>
              {' '}
              <img src="./assets/fi_users.png" alt="" /> 4 Orang
            </ListGroup.Item>
            <ListGroup.Item className={styles.list}>
              {' '}
              <img src="./assets/fi_settings.png" alt="" srcset="" /> Manual
            </ListGroup.Item>
            <ListGroup.Item className={styles.list}>
              {' '}
              <img src="./assets/fi_calendar.png" alt="" srcset="" /> Tahun 2020
            </ListGroup.Item>
          </ListGroup>
          <Button
            style={{ width: 'auto' }}
            variant="success"
            className={`${styles['btn-green']} mt-3 `}
            // onClick={() => handleDetail(item.id)}
            onClick={props.onClick}
          >
            {/* <Link to="/detail" className="text-white">
            Pilih Mobil
          </Link> */}
            Pilih Mobil
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CardList;
