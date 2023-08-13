import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './Detail.module.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Detail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <button className={style.backButton} onClick={handleGoBack}>
          <ArrowBackIosNewIcon sx={{ color: 'azure' }} />
        </button>
        <img
          className={style.image}
          src={character?.image}
          alt={character?.name}
        />
        <div className={style.tagsContainer}>
          <p className={style.tags}>Origin: {character?.origin?.name}</p>
          <p className={style.tags}>Name: {character?.name}</p>
          <p className={style.tags}>Status: {character?.status}</p>
          <p className={style.tags}>Species: {character?.species}</p>
          <p className={style.tags}>Gender: {character?.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
