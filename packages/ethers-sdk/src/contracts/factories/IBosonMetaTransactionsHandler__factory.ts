/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBosonMetaTransactionsHandler,
  IBosonMetaTransactionsHandlerInterface,
} from "../IBosonMetaTransactionsHandler";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "functionName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_functionName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_functionSignature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_associatedAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "isUsedNonce",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IBosonMetaTransactionsHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IBosonMetaTransactionsHandlerInterface {
    return new utils.Interface(_abi) as IBosonMetaTransactionsHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBosonMetaTransactionsHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBosonMetaTransactionsHandler;
  }
}
