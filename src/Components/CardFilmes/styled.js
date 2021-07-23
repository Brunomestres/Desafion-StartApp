import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
