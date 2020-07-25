const { assignUsers } = require('./github/assign-users');

module.exports = async tools => {
    const { actor } = tools.context;
    await assignUsers(tools, [actor]);
};
