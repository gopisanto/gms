export default ({
  paper: {
    width: 200
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
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  }
});