const { remove: deleteUser } = require('../../controllers/user');

module.exports = async (req, res) => {
  try {
    const userId = await deleteUser(req.params.id);
    return res.status(201).json({ ok: true, id: userId });
  } catch (e) {
    return res.status(400).json({ ok: false, message: 'Could not delete the user', error: e.message });
  }
};
