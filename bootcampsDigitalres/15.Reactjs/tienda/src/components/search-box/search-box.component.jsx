import TextField from "@mui/material/TextField";
import './search-box.styles.css';

function SearchBox(props){
  return <TextField className='search-box' sytle={{width: "100%", height: "100px"}} label="Busqueda" variant="standard" onInput={(evt) => props.onSearch(evt.target.value)}/>
}

export default SearchBox;
