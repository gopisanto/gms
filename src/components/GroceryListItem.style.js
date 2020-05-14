export default (theme => ({
  paper: {
    width: 180,
    [theme.breakpoints.down('sm')]: {
      width: 170,
    },
  },
  root: {
    width: '100%',
    maxHeight: 300,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    paddingTop: '56.25%', // 16:9
    '&:hover': {
      transform: 'scale(2.5, 2.5)',
      backgroundSize: 'contain'
    },
    height: 100,
    width: '100%'
  },
  actions: {
    position: "absolute",
    bottom: 0

  },
  addToCart: {
    width: '85px',
    fontSize: '8px',
    fontWeight: 'bold'
  },
  content: {
    padding: '10px',
  },
  quantity: {
    width: '40px',
    height: '15px',
    fontSize: '14px',
    marginRight: '10px',
    marginLeft: '10px',
    borderRadius: '5px',
    padding: '5px'
  },
  qtyContainer: {
    position: 'relative'
  },
  itemContainer: {
    position: 'relative',
    width: '200px',
    minWidth: '200px',
    maxWidth: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '170px',
      minWidth: '170px',
      maxWidth: '170px',
    },
  },
  outOfStock: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    top: '0',
    left: '5%',
    right: '0',
    bottom: '0',
    zIndex: '2',
    fontSize: '24px',
    color: 'red',
    opacity: '0.6',
    fontWeight: 'bold',
    // transform: 'rotate(-45deg)'
  },
  outOfStockPrice: {
    backgroundColor: 'black',
  },
  error: {
    border: '1px solid red'
  },
  errorLabel: {
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'red'
  },
  flexified: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}));