import { connect } from 'react-redux';

function Boton(props)
{
  return <button onClick={() => props.incrementar()}>Incrementar</button>
}

// mapStateToProps(store.getState())
/*
const mapStateToProps = (state) => {
  return {
    numero: state.numero
  };
}
*/

// mapDispatchToProps(store.dispatch)
const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch({ type: 'INCREMENTAR' })
});

const connector = connect(null, mapDispatchToProps);

export default connector(Boton);