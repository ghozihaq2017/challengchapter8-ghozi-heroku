import React from 'react';
import { Container } from 'react-bootstrap';
import AppBar from '../../components/AppBar/AppBar';

export default function Admin() {
  return (
    <>
      <AppBar />
      <Container>
        <h1>Welcome to Admin dashboard</h1>
      </Container>
    </>
  );
}
