import IdCard from '../IdCard/IdCard';
import style from './CardContainer.module.css';

export default function CardContainer({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <IdCard
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
