import { connect } from 'react-redux';

const Boton = (props) => {
  return (
    <button
      onClick={() => props.incrementar()}
    >Incrementar</button>
  )
}

// mapState => LECTURAS

// mapDispatch => ESCRITURAS
const mapDispatch = (dispatch) => ({
  incrementar: () => dispatch({ type: 'INCREMENTAR' })
});

const conector = connect(null, mapDispatch);

export default conector(Boton);