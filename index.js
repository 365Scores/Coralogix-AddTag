const core = require('@actions/core');
const fetch = require('node-fetch');

async function main() {
  try {
    // inputs
    const key = core.getInput('key');
    const application = core.getInput('application');
    const subsystem = core.getInput('subsystem');
    const name = core.getInput('name');
    //console.log(`key ${key}, application ${application}, subsystem ${subsystem}, name ${name}`);
    
    const url = `https://webapi.coralogix.com/api/v1/addTag?key=${key}\&application=${application}\&subsystem=${subsystem}\&name=${name}`;
	const response = await fetch(url);
    
    if (response.ok) {
  	  const responseText = await response.text();
  	  console.log(`Coralogix response: ${responseText}`);
    }
    else {
      const error = await response.text();
      core.setFailed(`An error has occured: ${error}`);
    }
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

main()