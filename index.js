const repl = require('repl');
const Web3 = require('web3');
const testRPC = require('ethereumjs-testrpc');

const web3 = new Web3(testRPC.provider());

const r = repl.start({prompt: 'sol>', eval: solEval });

function solEval(cmd, context, filename, callback) {
  let res = eval(cmd);

  // return the results to the repl
  callback(null, res);
}
