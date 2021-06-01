const styles = {
  popup: {
    padding: '15px 30px',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    width: '460px',
  },
  backdrop: {
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: 9999,
    width: '100vw',
    height: '100vh',
    background: 'black',
    opacity: '.5',
  },
};

export default styles;
