import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.13",
  networks: {
    // fuji: {
    //   url: "https://api.avax-test.network/ext/bc/C/rpc",
    //   accounts: ["741c24df1c4be24574ee458fbdc4672d33bdc8d7a9c3a0805932d8bc6929e3b9"]
    // }
    devnet: {
      url: "http://aops-custom-202305-2crvsg-nlb-1d600174371701f9.elb.ap-northeast-2.amazonaws.com:9650/ext/bc/XpX1yGquejU5cma1qERzkHKDh4fsPKs4NttnS1tErigPzugx5/rpc",
      accounts: ['acd1c67b10ca079d3dada5a0bda75fa51b119cae2266205372541792a2bf7eda']
    }
  },
  etherscan: {
    apiKey: {
      avalancheFujiTestnet: "I4MZJ5ZMXQMNEBJPJ41H13U7YVA5FACW7M",
    } 

  },
};

export default config;

