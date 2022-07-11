const Migrations = artifacts.require("Lab");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
