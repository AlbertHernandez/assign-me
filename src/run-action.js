const assignUsers = require('./github/assign-users');

module.exports = async tools => {
    await assignUsers(tools, ['AlbertHernandez']);
};
