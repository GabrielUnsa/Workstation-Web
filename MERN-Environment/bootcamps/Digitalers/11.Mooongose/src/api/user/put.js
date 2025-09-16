const { update: updateUser } = require('../../controllers/user');

module.exports = async (req, res) => {
  try {
    const userId = await updateUser(req.params.id, req.body);
    return res.status(201).json({ ok: true, id: userId });
  } catch (e) {
    return res.status(400).json({ ok: false, message: 'Could not update the user', error: e.message });
  }
};
