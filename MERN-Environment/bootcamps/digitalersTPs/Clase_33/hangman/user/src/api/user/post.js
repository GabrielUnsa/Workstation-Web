const bcrypt = require('bcrypt');

const { collections } = require('../../db/conn');

const validate = (body) => {
  if(!body) throw new Error('Invalid data');

  const {
    username,
    email,
    password,
    verifyPassword,
  } = body;

  if (!username || typeof username !== 'string') throw new Error('Username is required and must be a string');

  if(!email || typeof email !== 'string') throw new Error('Email is required and must be a string');

  if(!password || typeof password !== 'string') throw new Error('Password is required and must be a string');

  if( password !== verifyPassword ) throw new Error('Validation password failed');
};

module.exports = async (req, res) => {
  try {
    validate(req.body);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }

  const {
    username,
    email,
    password,
  } = req.body;

  const dupplicatedUser = await collections.user.findOne({ email });
  
  if (dupplicatedUser) return res.status(400).json({ message: 'Email already taken' });
  
  const encryptedPass = await bcrypt.hash(password, 10);

  const { insertedId } = await collections.user.insertOne({
    username,
    email,
    password: encryptedPass,
  });

  return res.json({ id: insertedId });
};
