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
  CardHeader,
  CardMedia,
  IconButton,
  Zoom,
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
  // Check if the current path is "/home"
  const location = useLocation();
  const { pathname } = location;
  const isHome = pathname === '/home';

  const [isOpen, setIsOpen] = useState(true);
  const [isFav, setIsFav] = useState(false);

  const handleFavorites = () => {
    if (isFav) {
      setIsFav(false);
      setTimeout(() => removeFav(id), 300);
    } else {
      setIsFav(true);
      addFav({ id, name, image, gender });
    }
  };

  const handleClose = (id) => {
    setIsOpen((prev) => !prev);
    setTimeout(() => onClose(id), 300);
  };

  useEffect(() => {
    myFav.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFav]);

  return (
    <Zoom in={isHome ? isOpen : isFav}>
      <Card variant="outlined" sx={{ m: '16px' }}>
        <CardHeader subheader={name} size="small" />
        <CardMedia component="img" height="230" image={image} alt={name} />
        <CardActions>
          {isHome && (
            <IconButton onClick={() => handleClose(id)}>
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
    </Zoom>
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
