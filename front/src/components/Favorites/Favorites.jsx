import style from './Favorites.module.css';
import IdCard from '../IdCard/IdCard';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards, resetFav } from '../../redux/actions';
import { useState } from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const [gender, setGender] = useState('');
  const [order, setOrder] = useState('');

  const dispatch = useDispatch();

  const myFav = useSelector((state) => state.myFav);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
    setOrder(event.target.value);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    setGender(event.target.value);
  };

  //this is only so the filter select gets re-rendered

  const handleReset = () => {
    dispatch(resetFav());
    setGender((gender) => (gender = ''));
    setOrder((order) => (order = ''));
  };

  return (
    <div className={style.container}>
      <div className={style.menuContainer}>
        <FormControl sx={{ mb: 2, mx: 1, minWidth: 110 }} size="small">
          <InputLabel id="order">ID Order</InputLabel>
          <Select
            value={order}
            id="order"
            labelId="order"
            label="ID Order"
            autoWidth
            onChange={handleOrder}
          >
            <MenuItem value="A">Ascending</MenuItem>
            <MenuItem value="D">Descending</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ mb: 2, mx: 1, minWidth: 110 }} size="small">
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            value={gender}
            id="gender"
            labelId="gender"
            label="Gender"
            autoWidth
            onChange={handleFilter}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>

        <Button
          sx={{ mb: 2, mx: 1 }}
          variant="outlined"
          onClick={handleReset}
          startIcon={<PeopleAltIcon />}
        >
          All Characters
        </Button>
      </div>
      {myFav?.map((fav) => {
        return (
          <IdCard key={fav.id} id={fav.id} name={fav.name} image={fav.image} />
        );
      })}
    </div>
  );
};

export default Favorites;
  