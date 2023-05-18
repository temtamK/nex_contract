import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.13",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: ["741c24df1c4be24574ee458fbdc4672d33bdc8d7a9c3a0805932d8bc6929e3b9"]
    }
  },
  etherscan: {
    apiKey: {
      avalancheFujiTestnet: "I4MZJ5ZMXQMNEBJPJ41H13U7YVA5FACW7M",
    } 

  },
};

export default config;
