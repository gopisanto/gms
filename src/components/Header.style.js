import Logo from '../logo.png';

export default (theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '80px',
    width: '380px',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textShadow: '2px 2px 2px rgba(206,89,55,0)'
  },
  headerTitle: {
    background: 'linear-gradient(to right, orange 10%, white 50%, green 100%)',
    borderRadius: '10px',
  }
});