function main(){
    console.log("hello");
    var resp = IsCiOnPlatform('Windows');
    console.log("response:",resp);
}

function IsCiOnPlatform(platformName) {
    return (
      isEnvVarSet('CI') &&
      isEnvVarSet('RUNNER_OS') &&
      process.env['RUNNER_OS'] == platformName
    );
    }

function isEnvVarSet(variableName) {
    return (
        process.env[variableName] !== undefined &&
        process.env[variableName] !== 'false' &&
        process.env[variableName] !== '0'
    );
    }

main();