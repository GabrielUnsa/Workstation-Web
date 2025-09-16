module.exports = (sockets) => (req, res, next) => {
    req.sockets = sockets;
    next();
};