import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ConditionalTokens", {
    contract: "ConditionalTokens",
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
  });

  await hre.run("verify:verify", {
    address: (await get("ConditionalTokens")).address,
  });
};
export default func;
