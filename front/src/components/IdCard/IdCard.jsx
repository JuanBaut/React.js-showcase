import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { Star, StarOutline } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

const IdCard = ({
  id,
  name,
  image,
  onClose,
  gender,
  addFav,
  removeFav,
  myFav,
}) => {
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
    <Card variant="outlined" sx={{ m: '16px' }}>
      <CardHeader subheader={name} size="small" />
      <CardMedia component="img" height="230" image={image} alt={name} />
      <CardActions>
        {isHome && (
          <IconButton onClick={() => onClose(id)}>
            <DeleteIcon />
          </IconButton>
        )}
        {isFav ? (
          <IconButton onClick={handleFavorites}>
            <Star />
          </IconButton>
        ) : (
          <IconButton onClick={handleFavorites}>
            <StarOutline />
          </IconButton>
        )}
        <IconButton onClick={() => navigate(`/detail/${id}`)}>
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(IdCard);
