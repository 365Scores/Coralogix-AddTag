const core = require('@actions/core');
const fetch = require('node-fetch');

async function main() {
  try {
    // inputs
    const key = core.getInput('key');
    const application = core.getInput('application');
    const subsystem = core.getInput('subsystem');
    const name = core.getInput('name');
    // console.log(`key ${key}, application ${application}, subsystem ${subsystem}, name ${name}`);

    const url = 'https://ng-api-http.eu1.coralogix.com/api/v1/external/tags';
    const data = {
      "name": name,
      "application": [application],
      "subsystem": [subsystem],
    };
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(`Status: ${{ status: response.status, statusText: response.statusText }}`);
      const responseText = await response.text();
      console.log(`Coralogix response: ${responseText}`);
    }
    else {
      console.log(`Status: ${{ status: response.status, statusText: response.statusText }}`);
      const error = await response.text();
      core.setFailed(`An error has occured: ${error}`);
    }
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

main()