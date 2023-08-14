import style from './Favorites.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards, resetFav } from '../../redux/actions';
import { useState } from 'react';
import { Groups3 } from '@mui/icons-material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Favorites = () => {
  const [aux, setAux] = useState(false);

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
  };

  return (
    <div className={style.container}>
      <div className={style.selectContainer}>
        <select className={style.select} onChange={handleOrder}>
          <option className={style.option} value="A">
            Ascendente
          </option>
          <option className={style.option} value="D">
            Descendente
          </option>
        </select>

        <select className={style.select} onChange={handleFilter}>
          <option className={style.option} value="Male">
            Male
          </option>
          <option className={style.option} value="Female">
            Female
          </option>
          <option className={style.option} value="Genderless">
            Genderless
          </option>
          <option className={style.option} value="unknown">
            Unknown
          </option>
        </select>
        <button onClick={handleReset} className={style.button}>
          <PeopleAltIcon sx={{ pr: 1 }} />
          All Characters
        </button>
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
