export default (theme) => ({
  app: {
    textAlign: 'center',
    paddingTop: '20px'
  },
  filterMenu: {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  groceries: {
    width: '70%',
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    overflow: 'auto'
  }
});