import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import AuthContext from '../../store/auth-context';
import styles from './Auth.module.css';

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setIsLoading(true);

    if (isLogin) {
      fetch('https://rent-car-appx.herokuapp.com/admin/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        setIsLoading(false);
        console.log(res);
        if (res.ok) {
          authCtx.login(res.access_token);
          if (res.role === 'admin') {
            authCtx.role = 'admin';
            navigate('/admin');
          } else {
            authCtx.role = 'customer';
            navigate('/home');
          }
          console.log(res);
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Login failed';
            setErrorMsg(data.message);
            console.log(errorMsg);
            console.log(data.message);
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            setError(true);
            throw new Error(errorMessage);
          });
        }
      });
    } else {
      fetch('https://rent-car-appx.herokuapp.com/customer/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          role: 'customer',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        setIsLoading(false);
        console.log(res);
        if (res.ok) {
          setIsLogin(true);
          setSuccess(true);
          emailRef.current.value = '';
          passwordRef.current.value = '';
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            setErrorMsg(data.message);
            console.log(errorMsg);
            console.log(data.message);
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            setError(true);
            throw new Error(errorMessage);
          });
        }
      });
    }
  };

  return (
    <div className={styles.cont}>
      <Row>
        <div className={`${styles['alert-cont']}`}>
          {error && (
            <Alert style={{ position: 'absolute', top: '10px', width: '35%' }} className="text-center" variant="danger" onClose={() => setError(false)} dismissible>
              {errorMsg}
            </Alert>
          )}
          {success && (
            <Alert style={{ position: 'absolute', top: '10px', width: '35%' }} className="text-center" variant="success" onClose={() => setSuccess(false)} dismissible>
              Registration success
            </Alert>
          )}
        </div>
        <Col md={8} className="p-0">
          <img className={`${styles['login-img']}`} src="./assets/image 2.png" alt="" />
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-center p-0">
          <Form onSubmit={submitHandler}>
            <div className={`${styles.logo}`}></div>
            <p className={`${styles.text} mt-3`}>{isLogin ? 'Login ' : 'Create New Account'}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            {!isLoading && (
              <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }}>
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            )}

            {isLoading && <p>Loading...</p>}
            <button type="button" className={`${styles.toggle} px-0`} onClick={switchAuthModeHandler}>
              {isLogin ? 'New in here? Create new account' : 'Login with existing account'}
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
