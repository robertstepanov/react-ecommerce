import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  landing: {
    height: '100vh',
    width: '100%',
    backgroundColor: 'lightgrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  root: {
    flexGrow: 1,
  },
}));