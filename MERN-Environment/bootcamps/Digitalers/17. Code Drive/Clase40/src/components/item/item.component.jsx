import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { connect } from 'react-redux';

function Item(props)
{

  const click = () => {
    // TODO: click handler
    props.addToCart(props.item);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={click}>
        <CardMedia
          component="img"
          height="140"
          image={ props.item.foto }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { props.item.nombre }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { props.item.descripcion }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const mapDispatch = (dispatch) => ({
  addToCart: (item) => dispatch({ type: 'carrito/AGREGAR_ITEM', item: item })
});

const adaptador = connect(null, mapDispatch);

export default adaptador(Item);
