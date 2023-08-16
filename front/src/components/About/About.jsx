import logo from '../../assets/meAbout.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

const About = () => {
  return (
    <Container sx={{mb: 3}} maxWidth="sm">
      <Card>
        <CardHeader
          title="Juan Andres Bautista"
          subheader="Full-stack developer"
        />
        <CardMedia
          height="400"
          component="img"
          image={logo}
          alt="Juan Andres"
        />
        <CardContent>
          <Typography>
            Hi! I made this project to showcase my abilities in React,
            JavaScript and CSS libraries like Material UI. If you would like to
            see more details, check the Github or LinkedIn.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href="https://www.linkedin.com/in/juanandresbautistafsd/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            variant="outlined"
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/JuanBaut"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            variant="outlined"
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default About;
