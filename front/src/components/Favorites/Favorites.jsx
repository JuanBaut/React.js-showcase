import style from './Favorites.module.css';
import Card from '../Card/Card';
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
  const [filterKey, setFilterKey] = useState(0); // Add filterKey state

  const dispatch = useDispatch();

  const myFav = useSelector((state) => state.myFav); // use useSelector instead of mapStateToProps

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleReset = () => {
    dispatch(resetFav());
    setFilterKey((prevKey) => prevKey + 1); // Update filterKey value
  };

  return (
    <div className={style.container}>
      <div className={style.menuContainer}>
        <FormControl sx={{ mr: 2, minWidth: 110 }} size="small">
          <InputLabel>ID Order</InputLabel>
          <Select label="ID Order" autoWidth onChange={handleOrder}>
            <MenuItem value={'A'}>Ascending</MenuItem>
            <MenuItem value={'D'}>Descending</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          key={filterKey} // Add key prop, component rerender when button pressed
          sx={{ mr: 2, minWidth: 110 }}
          size="small"
        >
          <InputLabel>Gender</InputLabel>
          <Select label="Gender" autoWidth onChange={handleFilter}>
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
            <MenuItem value={'Genderless'}>Genderless</MenuItem>
            <MenuItem value={'unknown'}>Unknown</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          onClick={handleReset}
          startIcon={<PeopleAltIcon />}
        >
          All Characters
        </Button>
      </div>
      {myFav?.map((fav) => {
        return (
          <Card key={fav.id} id={fav.id} name={fav.name} image={fav.image} />
        );
      })}
    </div>
  );
};

export default Favorites;
