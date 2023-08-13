import style from './SearchBar.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Star } from '@mui/icons-material';

export default function SearchBar({ onSearch }) {
  const navigate = useNavigate();
  const [id, setId] = useState('');

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
      <div className={style.container}>
        <button className={style.button} onClick={() => navigate('/home')}>
          <HomeIcon sx={{ pr: 1 }} />
          Home
        </button>
        <button className={style.button} onClick={() => navigate('/favorites')}>
          <Star sx={{ pr: 1 }} />
          Favorites
        </button>
        <button className={style.button} onClick={() => navigate('/about')}>
          <InfoIcon sx={{ pr: 1 }} />
          About
        </button>
      </div>
        <input
          input
          type="Search"
          placeholder="Search..."
          className={style.inputSearch}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={id}
        />
    </div>
  );
}
