import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assests/legos-op.png';

export default makeStyles((theme) => ({
  landing: {
    backgroundImage: 'url(' + bg + ')',
    // background: 'linear-gradient(to right bottom, #430089, #82ffa1)', //linear gradient without background image being used
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    '@media (max-width:600px)': {
      fontSize: '50px',
    },
    textAlign: 'center',
    width: '80%',
    fontSize: '100px',
    color: '#fff',
  },
  root: {
    flexGrow: 1,
  },
}));
