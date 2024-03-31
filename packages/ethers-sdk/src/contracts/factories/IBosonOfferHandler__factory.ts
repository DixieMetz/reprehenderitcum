/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBosonOfferHandler,
  IBosonOfferHandlerInterface,
} from "../IBosonOfferHandler";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerCancelPenalty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityAvailable",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "exchangeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataHash",
            type: "string",
          },
          {
            internalType: "bool",
            name: "voided",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.Offer",
        name: "offer",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "validFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableUntil",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.OfferDates",
        name: "offerDates",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputePeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherValid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resolutionPeriod",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.OfferDurations",
        name: "offerDurations",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputeResolverId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "escalationResponsePeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerEscalationDeposit",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.DisputeResolutionTerms",
        name: "disputeResolutionTerms",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct BosonTypes.OfferFees",
        name: "offerFees",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "agentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "OfferCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "validUntilDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "OfferExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "sellerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "executedBy",
        type: "address",
      },
    ],
    name: "OfferVoided",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerCancelPenalty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityAvailable",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "exchangeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataHash",
            type: "string",
          },
          {
            internalType: "bool",
            name: "voided",
            type: "bool",
          },
        ],
        internalType: "struct BosonTypes.Offer",
        name: "_offer",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "validFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableUntil",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferDates",
        name: "_offerDates",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputePeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherValid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resolutionPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferDurations",
        name: "_offerDurations",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_disputeResolverId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_agentId",
        type: "uint256",
      },
    ],
    name: "createOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerCancelPenalty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityAvailable",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "exchangeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataHash",
            type: "string",
          },
          {
            internalType: "bool",
            name: "voided",
            type: "bool",
          },
        ],
        internalType: "struct BosonTypes.Offer[]",
        name: "_offers",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "validFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableUntil",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferDates[]",
        name: "_offerDates",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputePeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherValid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resolutionPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferDurations[]",
        name: "_offerDurations",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "_disputeResolverIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_agentIds",
        type: "uint256[]",
      },
    ],
    name: "createOfferBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validUntilDate",
        type: "uint256",
      },
    ],
    name: "extendOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_offerIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_validUntilDate",
        type: "uint256",
      },
    ],
    name: "extendOfferBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "getAgentIdByOffer",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "agentId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextOfferId",
    outputs: [
      {
        internalType: "uint256",
        name: "nextOfferId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "getOffer",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerCancelPenalty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityAvailable",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "exchangeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "metadataUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataHash",
            type: "string",
          },
          {
            internalType: "bool",
            name: "voided",
            type: "bool",
          },
        ],
        internalType: "struct BosonTypes.Offer",
        name: "offer",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "validFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validUntil",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableFrom",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherRedeemableUntil",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferDates",
        name: "offerDates",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputePeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "voucherValid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resolutionPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferDurations",
        name: "offerDurations",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputeResolverId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "escalationResponsePeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buyerEscalationDeposit",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.DisputeResolutionTerms",
        name: "disputeResolutionTerms",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "agentFee",
            type: "uint256",
          },
        ],
        internalType: "struct BosonTypes.OfferFees",
        name: "offerFees",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "isOfferVoided",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "offerVoided",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "voidOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_offerIds",
        type: "uint256[]",
      },
    ],
    name: "voidOfferBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBosonOfferHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IBosonOfferHandlerInterface {
    return new utils.Interface(_abi) as IBosonOfferHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBosonOfferHandler {
    return new Contract(address, _abi, signerOrProvider) as IBosonOfferHandler;
  }
}
