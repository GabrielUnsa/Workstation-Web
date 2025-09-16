const { get: getUsers } = require('../../controllers/user');

module.exports = async (req, res) => {
    try {
        const users = await getUsers();
        return res.json({ ok: true, users });
    } catch (e) {
        return res.status(500).json({ ok: false, message: e.message });
    }
};
