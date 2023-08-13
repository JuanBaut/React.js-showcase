import style from './About.module.css';
import logo from '../../assets/meAbout.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img className={style.image} src={logo} alt="ramlogo" />
        <div className={style.tagsContainer}>
          <p className={style.tagInfo}>
            Hi! My name is Juan and I made this project to showcase my abilities
            based in React and JS. If you would like to see more details, check
            the Github or LinkedIn.
          </p>
          <p className={style.tags}>Origin: Bogota, Colombia</p>
          <p className={style.tags}>Name: Juan Bautista</p>
          <div className={style.iconContainer}>
            <button className={style.button}>
              <a
                href="https://www.linkedin.com/in/juanandresbautistafsd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ color: 'azure', fontSize: 40 }} />
              </a>
            </button>
            <button className={style.button}>
              <a
                href="https://github.com/JuanBaut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: 'azure', fontSize: 36 }} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
