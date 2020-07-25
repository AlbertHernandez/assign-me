/**
 * Assign user
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string} comment
 */
module.exports = async (tools, users) => {
  await tools.github.issues.addAssignees({
    ...tools.context.repo,
    issue_number: tools.context.issue.number,
    assignees: users,
  });
};
