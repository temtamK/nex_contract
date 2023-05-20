import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

async function main() {
  const Nex = await ethers.getContractFactory("Nex");
  const contract = await Nex.attach(
    "0x33857724072dA0D1467eF792D53a4bE2F3D54e32" // The deployed contract address
  );

  let account1Balance = await contract.provider.getBalance('0x98b38085c8B605D7344658753EDAB47620D2a2eC');
  let account2Balance = await contract.provider.getBalance('0xDF0A4DC76eD4d47a06C3421941504975D5D57FFE');
  console.log(account1Balance);
  console.log(account2Balance);
  
  // Now you can call functions of the contract
  const minting = await contract.mint();
  console.log(minting);
  await contract.setBaseURI(minting.value, "ipfs://QmdjfmNn1vVTTzrwuvxNFcyBnobAVZxMcNz7TTxs7tZyjt");

  // only setBaseURI()
  // await contract.setBaseURI(0, "ipfs://QmXEyPiccKn1ifXyJQohnRgtanxpvBdwzPbE2na4LvwQx3");

  account1Balance = await contract.provider.getBalance('0x98b38085c8B605D7344658753EDAB47620D2a2eC');
  account2Balance = await contract.provider.getBalance('0xDF0A4DC76eD4d47a06C3421941504975D5D57FFE');
  console.log(account1Balance);
  console.log(account2Balance);
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
