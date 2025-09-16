const get = async (req, res) => res.json({ message : 'Word Get' });
const getById = async (req, res) => res.json({ message : 'Word Get By id' });

module.exports = {
  get,
  getById
};
