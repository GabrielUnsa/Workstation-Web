const { create: createUser } = require('../../controllers/user');

module.exports = async (req, res) => {
  try {
    const userId = await createUser(req.body);
    return res.json({ ok: true, id: userId });
  } catch (e) {
    return res.status(400).json({ ok: false, message: 'Could not create the user', error: e.message });
  }
};
