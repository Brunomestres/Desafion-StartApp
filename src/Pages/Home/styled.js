import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    minWidth: 275,
    minHeight: 500,
    height: '100%',
  },

  title: {
    fontSize: 14,
  },
  film: {
    backgroundColor:'#DEC6B0',
    display: 'flex',
    width: '94%',
    height: '100%',
    minHeight: 150,
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  overview:{
    maxWidth: '55ch',
  },
  cover: {
    width: 300,
    right: 5
  },
  progress: {
    display: 'flex',
    marginLeft: '40%',
    marginTop: 50,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  },
  pagination:{
    bottom: 0,
    marginBottom: '5%',
    marginTop: '2%',
    marginLeft: '32%',
  }
}));

export default useStyles;
