export default function RedList(props) {
	console.log(props.children);

	return (
		<ul>
			{props.children.map((it, i) => {
				return (
					<li key={i} style={{ color: "red" }}>
						{it.props.children}
					</li>
				);
			})}
		</ul>
	);
}
