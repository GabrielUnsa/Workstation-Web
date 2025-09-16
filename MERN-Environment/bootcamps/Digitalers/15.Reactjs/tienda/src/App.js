import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import SearchBox from './components/search-box/search-box.component'
import Item from './components/item/item.component'


function App() {
  const itemsIniciales = [
                { id: 1, nombre: "Celular", descripcion:"Lorem", foto: "" },
                { id: 2, nombre: "Pantalla", descripcion:"Lorem", foto: "" },
                { id: 3, nombre: "Teclado", descripcion:"Lorem", foto: "" },
                { id: 4, nombre: "Modem", descripcion:"Lorem", foto: "" },
                { id: 5, nombre: "Mouse", descripcion:"Lorem", foto: "" },
                ];

  const [items, setItems] = useState(itemsIniciales);

  const onSearch = textoBusqueda => {
    const nuevoItems = itemsIniciales.filter((val) => val.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()));
    setItems(nuevoItems);
  }

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs="12">
          <SearchBox onSearch={onSearch}/>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "10px" }}container spacing={3}>
        {items.map((item, index) => (
          <Grid key={index} item xs={12}>
            <Item item={item}/>
          </Grid>
        ))}
      </Grid>

   </Container>
  );
}

export default App;
