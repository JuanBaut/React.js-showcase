import React from 'react';
import style from './Card.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Star, StarOutline } from '@mui/icons-material';

const Card = ({ id, name, image, onClose, gender, addFav, removeFav, myFav }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { pathname } = location;

  // Check if the current path is "/home"
  const isHome = pathname === '/home';

  const [isFav, setIsFav] = useState(false);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, image, gender });
    }
  };

  useEffect(() => {
    myFav.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFav]);

  return (
    <div className={style.container}>
      <div className={style.buttonHouse}>
        {isHome && (
          <button onClick={() => onClose(id)} className={style.closeButton}>
            <DeleteIcon sx={{ color: 'azure' }} />
          </button>
        )}
        {isFav ? (
          <button onClick={handleFavorites} className={style.favButton}>
            <Star sx={{ color: 'azure' }} />
          </button>
        ) : (
          <button onClick={handleFavorites} className={style.favButton}>
            <StarOutline sx={{ color: 'azure' }} />
          </button>
        )}
      </div>

      <img className={style.img} src={image} alt="" />
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          onClick={() => navigate(`/detail/${id}`)}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFav: state.myFav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
