import axios from 'axios';
import { useSelector } from 'react-redux';

export const fetchCarData = () => {
  return async (dispatch) => {
    const dataList = useSelector((state) => state.data.items);
    const fecthData = async () => {
      const response = await axios('https://rent-cars-api.herokuapp.com/admin/car');
      console.log(dataList(response.data));
    };
    fecthData();
  };
};

//   useEffect(() => {
//     const axiosData = async () => {
//       const res = await axios(
//         "https://rent-cars-api.herokuapp.com/customer/car"
//       );
//       setDataList(res.data);
//     };
//     axiosData();
//   }, []);
