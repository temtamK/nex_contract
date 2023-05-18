import { ethers } from "hardhat";

async function main() {
  const Nex = await ethers.getContractFactory("Nex");
  const contract = await Nex.attach(
    "0xD504532ecE2fbd41249b1eBcc54E45ae45437696" // The deployed contract address
  );
  
  // Now you can call functions of the contract
  // const minting = await contract.mint();
  // console.log(minting);
  // await contract.setBaseURI(minting.value, "ipfs://QmdjfmNn1vVTTzrwuvxNFcyBnobAVZxMcNz7TTxs7tZyjt");

  // only setBaseURI()
  await contract.setBaseURI(0, "ipfs://QmXEyPiccKn1ifXyJQohnRgtanxpvBdwzPbE2na4LvwQx3");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
