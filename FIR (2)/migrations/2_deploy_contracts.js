const publicFIR = artifacts.require("publicFIR");

module.exports = function(deployer) {
  deployer.deploy(publicFIR);
};
