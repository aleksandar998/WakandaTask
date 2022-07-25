const Web3 = require("web3");
const config = require("../config");
const constant = require("../index");

const compiledWakandaTokenContract = require(constant.PATH.COMPILED_WKND);
const compiledVotingContract = require(constant.PATH.COMPILED_VOTING);

const web3 = new Web3(new Web3.providers.HttpProvider(config.API_URL));

const wakandaTokenContractAddress = config.WAKANDA_TOKEN_CONTRACT_ADDRESS;
const wakandaTokenABI = compiledWakandaTokenContract.abi;

const votingContractAddress = config.VOTING_CONTRACT_ADDRESS;
const votingABI = compiledVotingContract.abi;

const defaultAddress = config.DEFAULT_ADDRESS;
const privateKey = config.PRIVATE_KEY;

module.exports = {
    web3: web3,
    defaultAddress: defaultAddress,
    privateKey: privateKey,
    wakandaTokenContract : new web3.eth.Contract(wakandaTokenABI, wakandaTokenContractAddress, {from: defaultAddress}),
    votingContract : new web3.eth.Contract(votingABI, votingContractAddress, {from: defaultAddress})
}