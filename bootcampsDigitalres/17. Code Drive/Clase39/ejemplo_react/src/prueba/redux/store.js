import { createStore } from 'redux';

const store = createStore(function (prevState = {numero: 1}, action) {
  // Qué pasa cuando alguien escribe un dato en este Store
  console.log("Cambiando el estado: ", arguments);
  
  if(action.type == "INCREMENTAR")
  {
    return {
      numero: prevState.numero + 1
    }
  }
  else {
    return prevState;
  }

});

store.subscribe(function(){
  console.log("Nuevo estado: ", store.getState());
});

export default store;