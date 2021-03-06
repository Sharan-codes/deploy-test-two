const bytenode = require('bytenode');

const responseHelper = require('./src/base/response.lib');
const Executor = require('./src/base/executor.class');

module.exports.execute = async event => {

  try {
    const executor = new Executor();
    await executor.executeMethod(event);

    return responseHelper.send(executor.getResponse());

  } catch (e) {
    console.log(e)
  }
}
