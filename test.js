function main(){
    console.log("hello");
    var resp = IsCiOnPlatform('windows');
    console.log("response:",resp);
}

function IsCiOnPlatform(platformName) {
    return (
      isEnvVarSet('CI') &&
      isEnvVarSet('RUNNER_OS') &&
      process.env['RUNNER_OS'] == platformName
    );
    }

main();