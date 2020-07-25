const { assignUsers } = require('./github');

module.exports = async tools => {
    const { actor } = tools.context;
    await assignUsers(tools, [actor]);
};
