import "./search-box.styles.css";

import TextField from "@mui/material/TextField";

function SearchBox(props) {
	return (
		<TextField
			className="search-box"
			style={{ width: "100%", height: "100px" }}
			label="Busqueda"
			variant="standard"
			onInput={(evt) => props.onSearch(evt.target.value)}
		/>
	);
}

export default SearchBox;
