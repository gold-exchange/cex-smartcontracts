/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "CryptoExchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CryptoExchange__factory>;
    getContractFactory(
      name: "IERC20Extended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Extended__factory>;
    getContractFactory(
      name: "SecondChanceRewardDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SecondChanceRewardDistributor__factory>;
    getContractFactory(
      name: "LPStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPStaking__factory>;
    getContractFactory(
      name: "SecondChanceStakingTokenBank",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SecondChanceStakingTokenBank__factory>;
    getContractFactory(
      name: "SeedInvestorStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SeedInvestorStaking__factory>;
    getContractFactory(
      name: "TestTokenOne",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestTokenOne__factory>;
    getContractFactory(
      name: "TestTokenTwo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestTokenTwo__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "CryptoExchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CryptoExchange>;
    getContractAt(
      name: "IERC20Extended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Extended>;
    getContractAt(
      name: "SecondChanceRewardDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SecondChanceRewardDistributor>;
    getContractAt(
      name: "LPStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPStaking>;
    getContractAt(
      name: "SecondChanceStakingTokenBank",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SecondChanceStakingTokenBank>;
    getContractAt(
      name: "SeedInvestorStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SeedInvestorStaking>;
    getContractAt(
      name: "TestTokenOne",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestTokenOne>;
    getContractAt(
      name: "TestTokenTwo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestTokenTwo>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}