const socionet = artifacts.require("Socionet");

module.exports = function (deployer) {
  deployer.deploy(socionet);
};
