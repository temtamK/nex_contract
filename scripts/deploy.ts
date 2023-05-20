import { ethers } from "hardhat";

async function main() {
  const Nex = await ethers.getContractFactory("Nex");
  const nex = await Nex.deploy("0x52C84043CD9c865236f11d9Fc9F56aa003c1f922");

  // const forwarder = await ethers.getContractFactory("Forwarder");
  // const forwarderDeployed = await forwarder.deploy();

  console.log(
    "Nex deployed to:", nex.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
