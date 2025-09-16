//Condicional que valida un caso y de acuerdo a eso unas opciones

const action = prompt('Cual es tu accion');
switch (action) {
    case 'CHECK_LOGIN':
        console.log('Esto conduce a la accion check login');
        break;
    case 'LOGIN':
        console.log('Esto conduce a la accion login');
        break;
    case 'SIGNUP':
        console.log('Esto conduce a la accion de registro');
        break;            
    default:
        throw Error('Accion no valida');
}