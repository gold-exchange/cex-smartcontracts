/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTokenOne, TestTokenOneInterface } from "../TestTokenOne";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f54657374204f6e650000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f546573744f6e650000000000000000000000000000000000000000000000000081525081600390816200008f9190620005c1565b508060049081620000a19190620005c1565b505050620000c4620000b8620000f760201b60201c565b620000ff60201b60201c565b620000f1620000d8620000f760201b60201c565b6b02de89507556d84678000000620001c560201b60201c565b620007c3565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000237576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022e9062000709565b60405180910390fd5b6200024b600083836200033d60201b60201c565b80600260008282546200025f91906200075a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002b691906200075a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200031d9190620007a6565b60405180910390a362000339600083836200034260201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003c957607f821691505b602082108103620003df57620003de62000381565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004497fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200040a565b6200045586836200040a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004a26200049c62000496846200046d565b62000477565b6200046d565b9050919050565b6000819050919050565b620004be8362000481565b620004d6620004cd82620004a9565b84845462000417565b825550505050565b600090565b620004ed620004de565b620004fa818484620004b3565b505050565b5b81811015620005225762000516600082620004e3565b60018101905062000500565b5050565b601f82111562000571576200053b81620003e5565b6200054684620003fa565b8101602085101562000556578190505b6200056e6200056585620003fa565b830182620004ff565b50505b505050565b600082821c905092915050565b6000620005966000198460080262000576565b1980831691505092915050565b6000620005b1838362000583565b9150826002028217905092915050565b620005cc8262000347565b67ffffffffffffffff811115620005e857620005e762000352565b5b620005f48254620003b0565b6200060182828562000526565b600060209050601f83116001811462000639576000841562000624578287015190505b620006308582620005a3565b865550620006a0565b601f1984166200064986620003e5565b60005b8281101562000673578489015182556001820191506020850194506020810190506200064c565b868310156200069357848901516200068f601f89168262000583565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006f1601f83620006a8565b9150620006fe82620006b9565b602082019050919050565b600060208201905081810360008301526200072481620006e2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000767826200046d565b915062000774836200046d565b92508282019050808211156200078f576200078e6200072b565b5b92915050565b620007a0816200046d565b82525050565b6000602082019050620007bd600083018462000795565b92915050565b61165480620007d36000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063a457c2d711610066578063a457c2d71461024f578063a9059cbb1461027f578063dd62ed3e146102af578063f2fde38b146102df576100ea565b8063715018a6146102095780638da5cb5b1461021357806395d89b4114610231576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806370a08231146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f76102fb565b6040516101049190610e09565b60405180910390f35b61012760048036038101906101229190610ec4565b61038d565b6040516101349190610f1f565b60405180910390f35b6101456103b0565b6040516101529190610f49565b60405180910390f35b61017560048036038101906101709190610f64565b6103ba565b6040516101829190610f1f565b60405180910390f35b6101936103e9565b6040516101a09190610fd3565b60405180910390f35b6101c360048036038101906101be9190610ec4565b6103f2565b6040516101d09190610f1f565b60405180910390f35b6101f360048036038101906101ee9190610fee565b610429565b6040516102009190610f49565b60405180910390f35b610211610471565b005b61021b6104f9565b604051610228919061102a565b60405180910390f35b610239610523565b6040516102469190610e09565b60405180910390f35b61026960048036038101906102649190610ec4565b6105b5565b6040516102769190610f1f565b60405180910390f35b61029960048036038101906102949190610ec4565b61062c565b6040516102a69190610f1f565b60405180910390f35b6102c960048036038101906102c49190611045565b61064f565b6040516102d69190610f49565b60405180910390f35b6102f960048036038101906102f49190610fee565b6106d6565b005b60606003805461030a906110b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610336906110b4565b80156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b5050505050905090565b6000806103986107cd565b90506103a58185856107d5565b600191505092915050565b6000600254905090565b6000806103c56107cd565b90506103d285828561099e565b6103dd858585610a2a565b60019150509392505050565b60006012905090565b6000806103fd6107cd565b905061041e81858561040f858961064f565b6104199190611114565b6107d5565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104796107cd565b73ffffffffffffffffffffffffffffffffffffffff166104976104f9565b73ffffffffffffffffffffffffffffffffffffffff16146104ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e490611194565b60405180910390fd5b6104f76000610ca9565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610532906110b4565b80601f016020809104026020016040519081016040528092919081815260200182805461055e906110b4565b80156105ab5780601f10610580576101008083540402835291602001916105ab565b820191906000526020600020905b81548152906001019060200180831161058e57829003601f168201915b5050505050905090565b6000806105c06107cd565b905060006105ce828661064f565b905083811015610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90611226565b60405180910390fd5b61062082868684036107d5565b60019250505092915050565b6000806106376107cd565b9050610644818585610a2a565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106de6107cd565b73ffffffffffffffffffffffffffffffffffffffff166106fc6104f9565b73ffffffffffffffffffffffffffffffffffffffff1614610752576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074990611194565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b8906112b8565b60405180910390fd5b6107ca81610ca9565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083b9061134a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108aa906113dc565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109919190610f49565b60405180910390a3505050565b60006109aa848461064f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a245781811015610a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0d90611448565b60405180910390fd5b610a2384848484036107d5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a90906114da565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aff9061156c565b60405180910390fd5b610b13838383610d6f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b90906115fe565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c2c9190611114565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c909190610f49565b60405180910390a3610ca3848484610d74565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610db3578082015181840152602081019050610d98565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ddb82610d79565b610de58185610d84565b9350610df5818560208601610d95565b610dfe81610dbf565b840191505092915050565b60006020820190508181036000830152610e238184610dd0565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e5b82610e30565b9050919050565b610e6b81610e50565b8114610e7657600080fd5b50565b600081359050610e8881610e62565b92915050565b6000819050919050565b610ea181610e8e565b8114610eac57600080fd5b50565b600081359050610ebe81610e98565b92915050565b60008060408385031215610edb57610eda610e2b565b5b6000610ee985828601610e79565b9250506020610efa85828601610eaf565b9150509250929050565b60008115159050919050565b610f1981610f04565b82525050565b6000602082019050610f346000830184610f10565b92915050565b610f4381610e8e565b82525050565b6000602082019050610f5e6000830184610f3a565b92915050565b600080600060608486031215610f7d57610f7c610e2b565b5b6000610f8b86828701610e79565b9350506020610f9c86828701610e79565b9250506040610fad86828701610eaf565b9150509250925092565b600060ff82169050919050565b610fcd81610fb7565b82525050565b6000602082019050610fe86000830184610fc4565b92915050565b60006020828403121561100457611003610e2b565b5b600061101284828501610e79565b91505092915050565b61102481610e50565b82525050565b600060208201905061103f600083018461101b565b92915050565b6000806040838503121561105c5761105b610e2b565b5b600061106a85828601610e79565b925050602061107b85828601610e79565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110cc57607f821691505b6020821081036110df576110de611085565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061111f82610e8e565b915061112a83610e8e565b9250828201905080821115611142576111416110e5565b5b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061117e602083610d84565b915061118982611148565b602082019050919050565b600060208201905081810360008301526111ad81611171565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611210602583610d84565b915061121b826111b4565b604082019050919050565b6000602082019050818103600083015261123f81611203565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006112a2602683610d84565b91506112ad82611246565b604082019050919050565b600060208201905081810360008301526112d181611295565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611334602483610d84565b915061133f826112d8565b604082019050919050565b6000602082019050818103600083015261136381611327565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006113c6602283610d84565b91506113d18261136a565b604082019050919050565b600060208201905081810360008301526113f5816113b9565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611432601d83610d84565b915061143d826113fc565b602082019050919050565b6000602082019050818103600083015261146181611425565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006114c4602583610d84565b91506114cf82611468565b604082019050919050565b600060208201905081810360008301526114f3816114b7565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611556602383610d84565b9150611561826114fa565b604082019050919050565b6000602082019050818103600083015261158581611549565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006115e8602683610d84565b91506115f38261158c565b604082019050919050565b60006020820190508181036000830152611617816115db565b905091905056fea264697066735822122029fcb18854468047e4f22601db5dd6cd9ca279d40352a644129b186fbf3834b364736f6c63430008110033";

export class TestTokenOne__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestTokenOne> {
    return super.deploy(overrides || {}) as Promise<TestTokenOne>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTokenOne {
    return super.attach(address) as TestTokenOne;
  }
  connect(signer: Signer): TestTokenOne__factory {
    return super.connect(signer) as TestTokenOne__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenOneInterface {
    return new utils.Interface(_abi) as TestTokenOneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTokenOne {
    return new Contract(address, _abi, signerOrProvider) as TestTokenOne;
  }
}
