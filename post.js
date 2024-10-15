const core = require('@actions/core');

try {
  console.log("tearing everything down");
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
