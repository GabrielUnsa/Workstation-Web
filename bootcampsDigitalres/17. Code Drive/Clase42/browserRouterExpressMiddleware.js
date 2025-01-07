const path = require("path");
const fs = require("fs");

const middleware =
	(apiPath = null) =>
	(req, res, next) => {
		if (req.url === "/") {
			res.sendFile(path.join(__dirname, "public", "index.html"));
			return;
		}

		if (fs.existsSync(`public/${req.url}`)) {
			const segs = `public/${req.url}`.split("/");
			res.sendFile(path.join(__dirname, ...segs));
			return;
		}

		if (apiPath !== null) {
			if (req.url.startsWith(apiPath)) {
				next();
				return;
			}
		}

		res.sendFile(path.join(__dirname, "public", "index.html"));
		return;
	};

module.exports = middleware;

