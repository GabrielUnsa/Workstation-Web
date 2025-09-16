const { log: logger } = require('console');
const models = require('../../models');

module.exports = async () => {
  await Promise.all(Object.entries(models).map(async ([modelName, model]) => {
    try {
      await model.init();
      logger(`Init model ${modelName}`);
    } catch (e) {
      logger(e);
    }
  }));
};
