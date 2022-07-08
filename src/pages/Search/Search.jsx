import React, { useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import AppBar from '../../components/AppBar/AppBar';
import Background from '../../components/Background/Background';
import CardList from '../../components/Card/CardList';
import FormInput from '../../components/Form/FormInput';
import styles from './Search.module.css';
import Footer from '../../components/Footer/Footer';
import Detail from '../../components/Detail/Detail';
import { dataDetailActions } from '../../store/dataDetail-slice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const showDetail = useSelector((state) => state.dataDetail.dataDetailShow);

  const [dataList, setDataList] = React.useState([]);
  // const [showDetail, setShowDetail] = React.useState(false);
  const [dataDetail, setDataDetail] = React.useState({});

  const handleDetail = async (id) => {
    // setShowDetail(true);
    dispatch(dataDetailActions.toogleDataDetailShow());
    setDataList(false);
    try {
      const res = await axios(`https://rent-cars-api.herokuapp.com/admin/car/${id}`);
      setDataDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios('https://rent-cars-api.herokuapp.com/admin/car');
      setDataList(res.data);
    };
    axiosData();
  }, []);

  return (
    <React.Fragment>
      <AppBar />
      <Background className={styles.bg} />
      <FormInput className={styles.inputbox} />
      <Container className={`${styles.cont} d-flex flex-wrap`}>
        {dataList &&
          dataList.map((item) => {
            return <CardList key={item.id} id={item.id} image={item.image} name={item.name} category={item.category} price={item.price} onClick={() => handleDetail(item.id)} />;
          })}
      </Container>
      {showDetail && <Detail image={dataDetail.image} category={dataDetail.category} name={dataDetail.name} price={dataDetail.price} />}
      <Footer />
    </React.Fragment>
  );
};

export default Search;
