import Logo from '../logo.png';

export default (theme) => ({
  header: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textShadow: '2px 2px 2px rgba(206,89,55,0)',
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: '20%'
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '33%'
    },
  },
  headerTitle: {
    background: 'linear-gradient(to right, orange 10%, white 50%, green 100%)',
    borderRadius: '10px'
  }
});