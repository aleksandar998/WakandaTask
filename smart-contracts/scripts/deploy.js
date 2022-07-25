// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Getting contract to deploy
  const WKNDToken = await hre.ethers.getContractFactory("WKNDToken");
  const wknd = await WKNDToken.deploy(6000000);

  console.log("WakandaToken deployed to:", wknd.address);

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(wknd.address);

  await voting.deployed();

  console.log("Voting deployed to:", voting.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
