const core = require('@actions/core');

try {
  console.log("setting everything up");
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
