require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
var task = require("hardhat/config").task;

const {
  API_URL_LOCAL,
  PRIVATE_KEY_LOCAL,
  API_URL_KOVAN_ALCHEMY,
  PRIVATE_KEY_KOVAN,
} = process.env;

task("accounts", "Print list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  path: {
    artifacts: "../frontend/src/artifacts"
  },
  networks: {
    localhost: {
      url: API_URL_LOCAL,
      accounts: PRIVATE_KEY_LOCAL
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${API_URL_KOVAN_ALCHEMY}`,
      accounts: [`0x${PRIVATE_KEY_KOVAN}`]
    },
    hardhat: {
      chainId: 1337
    }
  }
};
