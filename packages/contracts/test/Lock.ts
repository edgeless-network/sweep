import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  let owner: any;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();
    const ConditionalTokens = await (
      await ethers.getContractFactory("ConditionalTokens")
    ).deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      console.log("hi");
    });
  });
});
