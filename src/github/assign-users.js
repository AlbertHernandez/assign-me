/**
 * Assign user
 * @param {import('actions-toolkit').Toolkit} tools
 * @param {string[]} users
 */
export const assignUsers = async (tools, users) => {
  try {
    await tools.github.issues.addAssignees({
      ...tools.context.repo,
      issue_number: tools.context.issue.number,
      assignees: users,
    });
  } catch (error) {
    tools.log.info(
        `Error happens when we were assigning the users [${users.join(', ')}] to the pull request: ${error}`,
    );
  }

};
