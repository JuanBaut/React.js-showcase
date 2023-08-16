import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  LinearProgress,
  Typography,
  Zoom,
} from '@mui/material';

const Detail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-juanbaut`
    ).then(({ data }) => {
      setCharacter(data);
    });
  }, []);

  if (!character || !character.name) {
    return (
      <Container maxWidth="xs">
        <LinearProgress></LinearProgress>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="xs">
        <Zoom in={true}>
          <Card>
            <CardHeader title={character?.name} />
            <CardMedia height="400" component="img" image={character?.image} />
            <CardContent>
              <Typography>Origin: {character?.origin?.name}</Typography>
              <Typography>Status: {character?.status}</Typography>
              <Typography>Species: {character?.species}</Typography>
              <Typography>Gender: {character?.gender}</Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={handleGoBack}>
                <ArrowBack />
              </IconButton>
            </CardActions>
          </Card>
        </Zoom>
      </Container>
    );
  }
};
export default Detail;
