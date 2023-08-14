import style from './SearchBar.module.css';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Star } from '@mui/icons-material';
import { TextField, Box, Tabs, Tab } from '@mui/material';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const navigate = useNavigate();

  const location = useLocation();

  const { pathname } = location;

  // Check if the current path is "/home"
  const isHome = pathname === '/home';

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
      setId('');
    }
  };

  return (
    <div className={style.sbContainer}>
      <Box
        sx={{ borderTop: 1, borderBottom: 1, borderColor: 'divider', mb: 4 }}
      >
        <Tabs centered>
          <Tab
            onClick={() => navigate('/home')}
            icon={<HomeIcon />}
            iconPosition="start"
            label="Home"
          />
          <Tab
            onClick={() => navigate('/favorites')}
            icon={<Star />}
            iconPosition="start"
            label="Favorites"
          />
          <Tab
            onClick={() => navigate('/about')}
            icon={<InfoIcon />}
            iconPosition="start"
            label="About"
          />
        </Tabs>
      </Box>

      {isHome && (
        <TextField
          label="Search ID"
          size="small"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={id}
        />
      )}
    </div>
  );
}
