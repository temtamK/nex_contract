import { ethers } from "hardhat";

async function main() {
  const Nex = await ethers.getContractFactory("Nex");
  const contract = await Nex.attach('0xD87334Ccd9d86084FE75C391553cE12DAd9b58e7');

  // const sendPay = await contract.receivePayment({value: 100});

  // console.log(sendPay)

  const result = await ethers.provider.getBalance('0xD87334Ccd9d86084FE75C391553cE12DAd9b58e7');
  console.log(result)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
