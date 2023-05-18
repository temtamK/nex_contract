import { ethers } from "hardhat";

async function main() {
  const Nex = await ethers.getContractFactory("Nex");
  const nex = await Nex.deploy();

  console.log(
    "Nex deployed to:", nex.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
