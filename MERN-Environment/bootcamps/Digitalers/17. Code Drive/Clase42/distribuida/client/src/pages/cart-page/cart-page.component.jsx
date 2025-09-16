import { connect } from "react-redux";
import { getCart } from "../../redux/carrito/getters"

function CartPage(props)
{
    console.log(props.items);
    return <div>Cart</div>
}

const mapState = state => ({
    items: getCart(state)
});

export default connect(mapState)(CartPage);