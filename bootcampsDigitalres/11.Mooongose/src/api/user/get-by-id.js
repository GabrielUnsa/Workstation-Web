const { getById } = require('../../controllers/user');

module.exports = async (req, res) => {
  try {
    const user = await getById(req.params.id);
    return res.json({ ok: true, user });
  } catch (e) {
    return res.status(400).json({ ok: false, message: e.massage });
  }
};
