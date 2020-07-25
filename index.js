require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

const runAction = require('./src/run-action');

Toolkit.run(
  async tools => {
    tools.log.info('Running the action...');

    await runAction(tools);

    tools.log.success('User successfully added!');
  },
  {
    event: [
      'pull_request.opened',
      'pull_request.edited',
      'pull_request.synchronize',
    ],
    secrets: ['GITHUB_TOKEN'],
  },
);
