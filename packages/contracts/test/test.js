
const { expect } = require("chai");
const { Contract } = require("ethers");
const { getConditionId, getCollectionId, getPositionId } = require('@gnosis.pm/conditional-tokens-contracts/utils/id-helpers');
const { ethers } = require("hardhat");

describe("Lock", function () {
  let owner;
  let ConditionalTokens
  let WETH
  let fpmmDeterministicFactory

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    ConditionalTokens = await (
      await ethers.getContractFactory("ConditionalTokens")).
      deploy();
    WETH = await (await ethers.getContractFactory("WETH")).deploy();
    fpmmDeterministicFactory = await (
      await ethers.getContractFactory("FPMMDeterministicFactory")).deploy();
  })

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      console.log("hi");
    });
  });
});
