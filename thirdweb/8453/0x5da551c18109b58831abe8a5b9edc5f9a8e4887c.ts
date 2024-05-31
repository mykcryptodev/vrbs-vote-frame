import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the EIP712DomainChanged event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { eIP712DomainChangedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  eIP712DomainChangedEvent()
 * ],
 * });
 * ```
 */ 
export function eIP712DomainChangedEvent() {
  return prepareEvent({
    signature: "event EIP712DomainChanged()",
  });
};
  



/**
 * Creates an event object for the ERC721VotingTokenLocked event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { eRC721VotingTokenLockedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  eRC721VotingTokenLockedEvent()
 * ],
 * });
 * ```
 */ 
export function eRC721VotingTokenLockedEvent() {
  return prepareEvent({
    signature: "event ERC721VotingTokenLocked()",
  });
};
  



/**
 * Creates an event object for the ERC721VotingTokenUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { eRC721VotingTokenUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  eRC721VotingTokenUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function eRC721VotingTokenUpdatedEvent() {
  return prepareEvent({
    signature: "event ERC721VotingTokenUpdated(address ERC721VotingToken)",
  });
};
  



/**
 * Creates an event object for the Initialized event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { initializedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  initializedEvent()
 * ],
 * });
 * ```
 */ 
export function initializedEvent() {
  return prepareEvent({
    signature: "event Initialized(uint64 version)",
  });
};
  



/**
 * Creates an event object for the MinVotingPowerToCreateSet event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { minVotingPowerToCreateSetEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  minVotingPowerToCreateSetEvent()
 * ],
 * });
 * ```
 */ 
export function minVotingPowerToCreateSetEvent() {
  return prepareEvent({
    signature: "event MinVotingPowerToCreateSet(uint256 oldMinVotingPowerToCreate, uint256 newMinVotingPowerToCreate)",
  });
};
  



/**
 * Creates an event object for the MinVotingPowerToVoteSet event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { minVotingPowerToVoteSetEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  minVotingPowerToVoteSetEvent()
 * ],
 * });
 * ```
 */ 
export function minVotingPowerToVoteSetEvent() {
  return prepareEvent({
    signature: "event MinVotingPowerToVoteSet(uint256 oldMinVotingPowerToVote, uint256 newMinVotingPowerToVote)",
  });
};
  

/**
 * Represents the filters for the "OwnershipTransferStarted" event.
 */
export type OwnershipTransferStartedEventFilters = Partial<{
  previousOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}>
newOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}>
}>;

/**
 * Creates an event object for the OwnershipTransferStarted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferStartedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferStartedEvent({
 *  previousOwner: ...,
 *  newOwner: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function ownershipTransferStartedEvent(filters: OwnershipTransferStartedEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferStarted(address indexed previousOwner, address indexed newOwner)",
    filters,
  });
};
  

/**
 * Represents the filters for the "OwnershipTransferred" event.
 */
export type OwnershipTransferredEventFilters = Partial<{
  previousOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}>
newOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}>
}>;

/**
 * Creates an event object for the OwnershipTransferred event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferredEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferredEvent({
 *  previousOwner: ...,
 *  newOwner: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function ownershipTransferredEvent(filters: OwnershipTransferredEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
    filters,
  });
};
  

/**
 * Represents the filters for the "PieceCreated" event.
 */
export type PieceCreatedEventFilters = Partial<{
  pieceId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"pieceId","type":"uint256"}>
sponsor: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sponsor","type":"address"}>
}>;

/**
 * Creates an event object for the PieceCreated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { pieceCreatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  pieceCreatedEvent({
 *  pieceId: ...,
 *  sponsor: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function pieceCreatedEvent(filters: PieceCreatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PieceCreated(uint256 indexed pieceId, address indexed sponsor, (string name, string description, uint8 mediaType, string image, string text, string animationUrl) metadata, (address creator, uint256 bps)[] creators)",
    filters,
  });
};
  

/**
 * Represents the filters for the "PieceDropped" event.
 */
export type PieceDroppedEventFilters = Partial<{
  pieceId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"pieceId","type":"uint256"}>
remover: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"remover","type":"address"}>
}>;

/**
 * Creates an event object for the PieceDropped event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { pieceDroppedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  pieceDroppedEvent({
 *  pieceId: ...,
 *  remover: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function pieceDroppedEvent(filters: PieceDroppedEventFilters = {}) {
  return prepareEvent({
    signature: "event PieceDropped(uint256 indexed pieceId, address indexed remover)",
    filters,
  });
};
  



/**
 * Creates an event object for the QuorumVotesBPSSet event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { quorumVotesBPSSetEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  quorumVotesBPSSetEvent()
 * ],
 * });
 * ```
 */ 
export function quorumVotesBPSSetEvent() {
  return prepareEvent({
    signature: "event QuorumVotesBPSSet(uint256 oldQuorumVotesBPS, uint256 newQuorumVotesBPS)",
  });
};
  



/**
 * Creates an event object for the Upgraded event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { upgradedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  upgradedEvent()
 * ],
 * });
 * ```
 */ 
export function upgradedEvent() {
  return prepareEvent({
    signature: "event Upgraded(address impl)",
  });
};
  

/**
 * Represents the filters for the "VoteCast" event.
 */
export type VoteCastEventFilters = Partial<{
  pieceId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"pieceId","type":"uint256"}>
voter: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"voter","type":"address"}>
}>;

/**
 * Creates an event object for the VoteCast event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { voteCastEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  voteCastEvent({
 *  pieceId: ...,
 *  voter: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function voteCastEvent(filters: VoteCastEventFilters = {}) {
  return prepareEvent({
    signature: "event VoteCast(uint256 indexed pieceId, address indexed voter, uint256 weight, uint256 totalWeight)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "MAX_NUM_CREATORS" function on the contract.
 * @param options - The options for the MAX_NUM_CREATORS function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { MAX_NUM_CREATORS } from "TODO";
 * 
 * const result = await MAX_NUM_CREATORS();
 * 
 * ```
 */
export async function MAX_NUM_CREATORS(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x90808a6f",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "MAX_QUORUM_VOTES_BPS" function on the contract.
 * @param options - The options for the MAX_QUORUM_VOTES_BPS function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { MAX_QUORUM_VOTES_BPS } from "TODO";
 * 
 * const result = await MAX_QUORUM_VOTES_BPS();
 * 
 * ```
 */
export async function MAX_QUORUM_VOTES_BPS(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xbb677582",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "PIECE_DATA_MAXIMUMS" function on the contract.
 * @param options - The options for the PIECE_DATA_MAXIMUMS function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { PIECE_DATA_MAXIMUMS } from "TODO";
 * 
 * const result = await PIECE_DATA_MAXIMUMS();
 * 
 * ```
 */
export async function PIECE_DATA_MAXIMUMS(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf4573803",
  [],
  [
    {
      "internalType": "uint256",
      "name": "name",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "description",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "image",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "text",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "animationUrl",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "VOTE_TYPEHASH" function on the contract.
 * @param options - The options for the VOTE_TYPEHASH function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { VOTE_TYPEHASH } from "TODO";
 * 
 * const result = await VOTE_TYPEHASH();
 * 
 * ```
 */
export async function VOTE_TYPEHASH(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x86522973",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "_currentPieceId" function on the contract.
 * @param options - The options for the _currentPieceId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { _currentPieceId } from "TODO";
 * 
 * const result = await _currentPieceId();
 * 
 * ```
 */
export async function _currentPieceId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x038355b0",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "checklist" function on the contract.
 * @param options - The options for the checklist function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { checklist } from "TODO";
 * 
 * const result = await checklist();
 * 
 * ```
 */
export async function checklist(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xcce87fdb",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractVersion" function on the contract.
 * @param options - The options for the contractVersion function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractVersion } from "TODO";
 * 
 * const result = await contractVersion();
 * 
 * ```
 */
export async function contractVersion(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa0a8e460",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "description" function on the contract.
 * @param options - The options for the description function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { description } from "TODO";
 * 
 * const result = await description();
 * 
 * ```
 */
export async function description(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7284e416",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "dropperAdmin" function on the contract.
 * @param options - The options for the dropperAdmin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { dropperAdmin } from "TODO";
 * 
 * const result = await dropperAdmin();
 * 
 * ```
 */
export async function dropperAdmin(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x1e895e11",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "eip712Domain" function on the contract.
 * @param options - The options for the eip712Domain function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { eip712Domain } from "TODO";
 * 
 * const result = await eip712Domain();
 * 
 * ```
 */
export async function eip712Domain(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x84b0196e",
  [],
  [
    {
      "internalType": "bytes1",
      "name": "fields",
      "type": "bytes1"
    },
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "version",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "chainId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "verifyingContract",
      "type": "address"
    },
    {
      "internalType": "bytes32",
      "name": "salt",
      "type": "bytes32"
    },
    {
      "internalType": "uint256[]",
      "name": "extensions",
      "type": "uint256[]"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getAccountVotingPowerForPiece" function.
 */
export type GetAccountVotingPowerForPieceParams = {
  pieceId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"pieceId","type":"uint256"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "getAccountVotingPowerForPiece" function on the contract.
 * @param options - The options for the getAccountVotingPowerForPiece function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAccountVotingPowerForPiece } from "TODO";
 * 
 * const result = await getAccountVotingPowerForPiece({
 *  pieceId: ...,
 *  account: ...,
 * });
 * 
 * ```
 */
export async function getAccountVotingPowerForPiece(
  options: BaseTransactionOptions<GetAccountVotingPowerForPieceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x277044a1",
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.pieceId, options.account]
  });
};


/**
 * Represents the parameters for the "getPieceById" function.
 */
export type GetPieceByIdParams = {
  pieceId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"pieceId","type":"uint256"}>
};

/**
 * Calls the "getPieceById" function on the contract.
 * @param options - The options for the getPieceById function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPieceById } from "TODO";
 * 
 * const result = await getPieceById({
 *  pieceId: ...,
 * });
 * 
 * ```
 */
export async function getPieceById(
  options: BaseTransactionOptions<GetPieceByIdParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xdeb50c35",
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "pieceId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "enum ICultureIndex.MediaType",
              "name": "mediaType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "animationUrl",
              "type": "string"
            }
          ],
          "internalType": "struct ICultureIndex.ArtPieceMetadata",
          "name": "metadata",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "bps",
              "type": "uint256"
            }
          ],
          "internalType": "struct ICultureIndex.CreatorBps[]",
          "name": "creators",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "sponsor",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isDropped",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "creationBlock",
          "type": "uint256"
        }
      ],
      "internalType": "struct ICultureIndex.ArtPiece",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: [options.pieceId]
  });
};




/**
 * Calls the "getTopVotedPiece" function on the contract.
 * @param options - The options for the getTopVotedPiece function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getTopVotedPiece } from "TODO";
 * 
 * const result = await getTopVotedPiece();
 * 
 * ```
 */
export async function getTopVotedPiece(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf8a8be40",
  [],
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "pieceId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "enum ICultureIndex.MediaType",
              "name": "mediaType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "animationUrl",
              "type": "string"
            }
          ],
          "internalType": "struct ICultureIndex.ArtPieceMetadata",
          "name": "metadata",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "bps",
              "type": "uint256"
            }
          ],
          "internalType": "struct ICultureIndex.CreatorBps[]",
          "name": "creators",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "sponsor",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isDropped",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "creationBlock",
          "type": "uint256"
        }
      ],
      "internalType": "struct ICultureIndex.ArtPiece",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getVote" function.
 */
export type GetVoteParams = {
  pieceId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"pieceId","type":"uint256"}>
voter: AbiParameterToPrimitiveType<{"internalType":"address","name":"voter","type":"address"}>
};

/**
 * Calls the "getVote" function on the contract.
 * @param options - The options for the getVote function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getVote } from "TODO";
 * 
 * const result = await getVote({
 *  pieceId: ...,
 *  voter: ...,
 * });
 * 
 * ```
 */
export async function getVote(
  options: BaseTransactionOptions<GetVoteParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xbc3f931f",
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "voter",
      "type": "address"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "voterAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        }
      ],
      "internalType": "struct ICultureIndex.Vote",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: [options.pieceId, options.voter]
  });
};


/**
 * Represents the parameters for the "hasVoted" function.
 */
export type HasVotedParams = {
  pieceId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"pieceId","type":"uint256"}>
voter: AbiParameterToPrimitiveType<{"internalType":"address","name":"voter","type":"address"}>
};

/**
 * Calls the "hasVoted" function on the contract.
 * @param options - The options for the hasVoted function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { hasVoted } from "TODO";
 * 
 * const result = await hasVoted({
 *  pieceId: ...,
 *  voter: ...,
 * });
 * 
 * ```
 */
export async function hasVoted(
  options: BaseTransactionOptions<HasVotedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x43859632",
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "voter",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.pieceId, options.voter]
  });
};




/**
 * Calls the "maxAnimationUrlLength" function on the contract.
 * @param options - The options for the maxAnimationUrlLength function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxAnimationUrlLength } from "TODO";
 * 
 * const result = await maxAnimationUrlLength();
 * 
 * ```
 */
export async function maxAnimationUrlLength(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x710d8b45",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "maxDescriptionLength" function on the contract.
 * @param options - The options for the maxDescriptionLength function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxDescriptionLength } from "TODO";
 * 
 * const result = await maxDescriptionLength();
 * 
 * ```
 */
export async function maxDescriptionLength(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3b13d732",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "maxHeap" function on the contract.
 * @param options - The options for the maxHeap function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxHeap } from "TODO";
 * 
 * const result = await maxHeap();
 * 
 * ```
 */
export async function maxHeap(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x04432c8a",
  [],
  [
    {
      "internalType": "contract MaxHeap",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "maxImageLength" function on the contract.
 * @param options - The options for the maxImageLength function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxImageLength } from "TODO";
 * 
 * const result = await maxImageLength();
 * 
 * ```
 */
export async function maxImageLength(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7194e344",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "maxNameLength" function on the contract.
 * @param options - The options for the maxNameLength function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxNameLength } from "TODO";
 * 
 * const result = await maxNameLength();
 * 
 * ```
 */
export async function maxNameLength(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3b992f2b",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "maxTextLength" function on the contract.
 * @param options - The options for the maxTextLength function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxTextLength } from "TODO";
 * 
 * const result = await maxTextLength();
 * 
 * ```
 */
export async function maxTextLength(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x379e00d4",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "minVotingPowerToCreate" function on the contract.
 * @param options - The options for the minVotingPowerToCreate function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { minVotingPowerToCreate } from "TODO";
 * 
 * const result = await minVotingPowerToCreate();
 * 
 * ```
 */
export async function minVotingPowerToCreate(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xeb0c4594",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "minVotingPowerToVote" function on the contract.
 * @param options - The options for the minVotingPowerToVote function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { minVotingPowerToVote } from "TODO";
 * 
 * const result = await minVotingPowerToVote();
 * 
 * ```
 */
export async function minVotingPowerToVote(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd15e71af",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 * 
 * const result = await name();
 * 
 * ```
 */
export async function name(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06fdde03",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "nonces" function.
 */
export type NoncesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
};

/**
 * Calls the "nonces" function on the contract.
 * @param options - The options for the nonces function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nonces } from "TODO";
 * 
 * const result = await nonces({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function nonces(
  options: BaseTransactionOptions<NoncesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7ecebe00",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 * 
 * const result = await owner();
 * 
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8da5cb5b",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "pendingOwner" function on the contract.
 * @param options - The options for the pendingOwner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { pendingOwner } from "TODO";
 * 
 * const result = await pendingOwner();
 * 
 * ```
 */
export async function pendingOwner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe30c3978",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "pieceCount" function on the contract.
 * @param options - The options for the pieceCount function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { pieceCount } from "TODO";
 * 
 * const result = await pieceCount();
 * 
 * ```
 */
export async function pieceCount(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4a5c4dfe",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "pieces" function.
 */
export type PiecesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "pieces" function on the contract.
 * @param options - The options for the pieces function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { pieces } from "TODO";
 * 
 * const result = await pieces({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function pieces(
  options: BaseTransactionOptions<PiecesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8f64be30",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    },
    {
      "components": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "enum ICultureIndex.MediaType",
          "name": "mediaType",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "image",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "animationUrl",
          "type": "string"
        }
      ],
      "internalType": "struct ICultureIndex.ArtPieceMetadata",
      "name": "metadata",
      "type": "tuple"
    },
    {
      "internalType": "address",
      "name": "sponsor",
      "type": "address"
    },
    {
      "internalType": "bool",
      "name": "isDropped",
      "type": "bool"
    },
    {
      "internalType": "uint256",
      "name": "creationBlock",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "pointsVoteWeight" function on the contract.
 * @param options - The options for the pointsVoteWeight function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { pointsVoteWeight } from "TODO";
 * 
 * const result = await pointsVoteWeight();
 * 
 * ```
 */
export async function pointsVoteWeight(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x512b7c01",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "proxiableUUID" function on the contract.
 * @param options - The options for the proxiableUUID function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { proxiableUUID } from "TODO";
 * 
 * const result = await proxiableUUID();
 * 
 * ```
 */
export async function proxiableUUID(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x52d1902d",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "quorumVotes" function on the contract.
 * @param options - The options for the quorumVotes function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { quorumVotes } from "TODO";
 * 
 * const result = await quorumVotes();
 * 
 * ```
 */
export async function quorumVotes(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x24bc1a64",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "quorumVotesBPS" function on the contract.
 * @param options - The options for the quorumVotesBPS function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { quorumVotesBPS } from "TODO";
 * 
 * const result = await quorumVotesBPS();
 * 
 * ```
 */
export async function quorumVotesBPS(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x83cce0e1",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "quorumVotesForPiece" function.
 */
export type QuorumVotesForPieceParams = {
  pieceId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"pieceId","type":"uint256"}>
};

/**
 * Calls the "quorumVotesForPiece" function on the contract.
 * @param options - The options for the quorumVotesForPiece function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { quorumVotesForPiece } from "TODO";
 * 
 * const result = await quorumVotesForPiece({
 *  pieceId: ...,
 * });
 * 
 * ```
 */
export async function quorumVotesForPiece(
  options: BaseTransactionOptions<QuorumVotesForPieceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x5268a883",
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.pieceId]
  });
};




/**
 * Calls the "requiredMediaPrefix" function on the contract.
 * @param options - The options for the requiredMediaPrefix function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { requiredMediaPrefix } from "TODO";
 * 
 * const result = await requiredMediaPrefix();
 * 
 * ```
 */
export async function requiredMediaPrefix(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xbd868f80",
  [],
  [
    {
      "internalType": "enum ICultureIndex.RequiredMediaPrefix",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "requiredMediaType" function on the contract.
 * @param options - The options for the requiredMediaType function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { requiredMediaType } from "TODO";
 * 
 * const result = await requiredMediaType();
 * 
 * ```
 */
export async function requiredMediaType(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc024993e",
  [],
  [
    {
      "internalType": "enum ICultureIndex.MediaType",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "template" function on the contract.
 * @param options - The options for the template function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { template } from "TODO";
 * 
 * const result = await template();
 * 
 * ```
 */
export async function template(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6f2ddd93",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "tokenVoteWeight" function on the contract.
 * @param options - The options for the tokenVoteWeight function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenVoteWeight } from "TODO";
 * 
 * const result = await tokenVoteWeight();
 * 
 * ```
 */
export async function tokenVoteWeight(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xee49d572",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "topVotedPieceId" function on the contract.
 * @param options - The options for the topVotedPieceId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { topVotedPieceId } from "TODO";
 * 
 * const result = await topVotedPieceId();
 * 
 * ```
 */
export async function topVotedPieceId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb7b61494",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "topVotedPieceMeetsQuorum" function on the contract.
 * @param options - The options for the topVotedPieceMeetsQuorum function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { topVotedPieceMeetsQuorum } from "TODO";
 * 
 * const result = await topVotedPieceMeetsQuorum();
 * 
 * ```
 */
export async function topVotedPieceMeetsQuorum(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x73d7b942",
  [],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "totalVoteWeights" function.
 */
export type TotalVoteWeightsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "totalVoteWeights" function on the contract.
 * @param options - The options for the totalVoteWeights function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalVoteWeights } from "TODO";
 * 
 * const result = await totalVoteWeights({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function totalVoteWeights(
  options: BaseTransactionOptions<TotalVoteWeightsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x04f50270",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "votes" function.
 */
export type VotesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
};

/**
 * Calls the "votes" function on the contract.
 * @param options - The options for the votes function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { votes } from "TODO";
 * 
 * const result = await votes({
 *  arg_0: ...,
 *  arg_1: ...,
 * });
 * 
 * ```
 */
export async function votes(
  options: BaseTransactionOptions<VotesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd23254b4",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "voterAddress",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "weight",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0, options.arg_1]
  });
};




/**
 * Calls the "votingPower" function on the contract.
 * @param options - The options for the votingPower function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { votingPower } from "TODO";
 * 
 * const result = await votingPower();
 * 
 * ```
 */
export async function votingPower(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x77174f85",
  [],
  [
    {
      "internalType": "contract IRevolutionVotingPower",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "_setMinVotingPowerToCreate" function.
 */
export type _setMinVotingPowerToCreateParams = {
  newMinVotingPowerToCreate: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"newMinVotingPowerToCreate","type":"uint256"}>
};

/**
 * Calls the "_setMinVotingPowerToCreate" function on the contract.
 * @param options - The options for the "_setMinVotingPowerToCreate" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { _setMinVotingPowerToCreate } from "TODO";
 * 
 * const transaction = _setMinVotingPowerToCreate({
 *  newMinVotingPowerToCreate: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function _setMinVotingPowerToCreate(
  options: BaseTransactionOptions<_setMinVotingPowerToCreateParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x792ac759",
  [
    {
      "internalType": "uint256",
      "name": "newMinVotingPowerToCreate",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.newMinVotingPowerToCreate]
  });
};


/**
 * Represents the parameters for the "_setMinVotingPowerToVote" function.
 */
export type _setMinVotingPowerToVoteParams = {
  newMinVotingPowerToVote: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"newMinVotingPowerToVote","type":"uint256"}>
};

/**
 * Calls the "_setMinVotingPowerToVote" function on the contract.
 * @param options - The options for the "_setMinVotingPowerToVote" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { _setMinVotingPowerToVote } from "TODO";
 * 
 * const transaction = _setMinVotingPowerToVote({
 *  newMinVotingPowerToVote: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function _setMinVotingPowerToVote(
  options: BaseTransactionOptions<_setMinVotingPowerToVoteParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0aea0702",
  [
    {
      "internalType": "uint256",
      "name": "newMinVotingPowerToVote",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.newMinVotingPowerToVote]
  });
};


/**
 * Represents the parameters for the "_setQuorumVotesBPS" function.
 */
export type _setQuorumVotesBPSParams = {
  newQuorumVotesBPS: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"newQuorumVotesBPS","type":"uint256"}>
};

/**
 * Calls the "_setQuorumVotesBPS" function on the contract.
 * @param options - The options for the "_setQuorumVotesBPS" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { _setQuorumVotesBPS } from "TODO";
 * 
 * const transaction = _setQuorumVotesBPS({
 *  newQuorumVotesBPS: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function _setQuorumVotesBPS(
  options: BaseTransactionOptions<_setQuorumVotesBPSParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x6f3eff28",
  [
    {
      "internalType": "uint256",
      "name": "newQuorumVotesBPS",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.newQuorumVotesBPS]
  });
};




/**
 * Calls the "acceptOwnership" function on the contract.
 * @param options - The options for the "acceptOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { acceptOwnership } from "TODO";
 * 
 * const transaction = acceptOwnership();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function acceptOwnership(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x79ba5097",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "batchVoteForManyWithSig" function.
 */
export type BatchVoteForManyWithSigParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address[]","name":"from","type":"address[]"}>
pieceIds: AbiParameterToPrimitiveType<{"internalType":"uint256[][]","name":"pieceIds","type":"uint256[][]"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256[]","name":"deadline","type":"uint256[]"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8[]","name":"v","type":"uint8[]"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32[]","name":"r","type":"bytes32[]"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32[]","name":"s","type":"bytes32[]"}>
};

/**
 * Calls the "batchVoteForManyWithSig" function on the contract.
 * @param options - The options for the "batchVoteForManyWithSig" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { batchVoteForManyWithSig } from "TODO";
 * 
 * const transaction = batchVoteForManyWithSig({
 *  from: ...,
 *  pieceIds: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function batchVoteForManyWithSig(
  options: BaseTransactionOptions<BatchVoteForManyWithSigParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa0acfe60",
  [
    {
      "internalType": "address[]",
      "name": "from",
      "type": "address[]"
    },
    {
      "internalType": "uint256[][]",
      "name": "pieceIds",
      "type": "uint256[][]"
    },
    {
      "internalType": "uint256[]",
      "name": "deadline",
      "type": "uint256[]"
    },
    {
      "internalType": "uint8[]",
      "name": "v",
      "type": "uint8[]"
    },
    {
      "internalType": "bytes32[]",
      "name": "r",
      "type": "bytes32[]"
    },
    {
      "internalType": "bytes32[]",
      "name": "s",
      "type": "bytes32[]"
    }
  ],
  []
],
    params: [options.from, options.pieceIds, options.deadline, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "createPiece" function.
 */
export type CreatePieceParams = {
  metadata: AbiParameterToPrimitiveType<{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"enum ICultureIndex.MediaType","name":"mediaType","type":"uint8"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"text","type":"string"},{"internalType":"string","name":"animationUrl","type":"string"}],"internalType":"struct ICultureIndex.ArtPieceMetadata","name":"metadata","type":"tuple"}>
creatorArray: AbiParameterToPrimitiveType<{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"bps","type":"uint256"}],"internalType":"struct ICultureIndex.CreatorBps[]","name":"creatorArray","type":"tuple[]"}>
};

/**
 * Calls the "createPiece" function on the contract.
 * @param options - The options for the "createPiece" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createPiece } from "TODO";
 * 
 * const transaction = createPiece({
 *  metadata: ...,
 *  creatorArray: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createPiece(
  options: BaseTransactionOptions<CreatePieceParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd75d43c9",
  [
    {
      "components": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "enum ICultureIndex.MediaType",
          "name": "mediaType",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "image",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "animationUrl",
          "type": "string"
        }
      ],
      "internalType": "struct ICultureIndex.ArtPieceMetadata",
      "name": "metadata",
      "type": "tuple"
    },
    {
      "components": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "bps",
          "type": "uint256"
        }
      ],
      "internalType": "struct ICultureIndex.CreatorBps[]",
      "name": "creatorArray",
      "type": "tuple[]"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.metadata, options.creatorArray]
  });
};




/**
 * Calls the "dropTopVotedPiece" function on the contract.
 * @param options - The options for the "dropTopVotedPiece" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { dropTopVotedPiece } from "TODO";
 * 
 * const transaction = dropTopVotedPiece();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function dropTopVotedPiece(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xbad22aff",
  [],
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "pieceId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "bps",
              "type": "uint256"
            }
          ],
          "internalType": "struct ICultureIndex.CreatorBps[]",
          "name": "creators",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "sponsor",
          "type": "address"
        }
      ],
      "internalType": "struct ICultureIndex.ArtPieceCondensed",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "initialize" function.
 */
export type InitializeParams = {
  votingPower: AbiParameterToPrimitiveType<{"internalType":"address","name":"_votingPower","type":"address"}>
initialOwner: AbiParameterToPrimitiveType<{"internalType":"address","name":"_initialOwner","type":"address"}>
maxHeap: AbiParameterToPrimitiveType<{"internalType":"address","name":"_maxHeap","type":"address"}>
dropperAdmin: AbiParameterToPrimitiveType<{"internalType":"address","name":"_dropperAdmin","type":"address"}>
cultureIndexParams: AbiParameterToPrimitiveType<{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"checklist","type":"string"},{"internalType":"string","name":"template","type":"string"},{"internalType":"uint256","name":"tokenVoteWeight","type":"uint256"},{"internalType":"uint256","name":"pointsVoteWeight","type":"uint256"},{"internalType":"uint256","name":"quorumVotesBPS","type":"uint256"},{"internalType":"uint256","name":"minVotingPowerToVote","type":"uint256"},{"internalType":"uint256","name":"minVotingPowerToCreate","type":"uint256"},{"components":[{"internalType":"uint256","name":"name","type":"uint256"},{"internalType":"uint256","name":"description","type":"uint256"},{"internalType":"uint256","name":"image","type":"uint256"},{"internalType":"uint256","name":"text","type":"uint256"},{"internalType":"uint256","name":"animationUrl","type":"uint256"}],"internalType":"struct ICultureIndex.PieceMaximums","name":"pieceMaximums","type":"tuple"},{"internalType":"enum ICultureIndex.MediaType","name":"requiredMediaType","type":"uint8"},{"internalType":"enum ICultureIndex.RequiredMediaPrefix","name":"requiredMediaPrefix","type":"uint8"}],"internalType":"struct IRevolutionBuilder.CultureIndexParams","name":"_cultureIndexParams","type":"tuple"}>
};

/**
 * Calls the "initialize" function on the contract.
 * @param options - The options for the "initialize" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { initialize } from "TODO";
 * 
 * const transaction = initialize({
 *  votingPower: ...,
 *  initialOwner: ...,
 *  maxHeap: ...,
 *  dropperAdmin: ...,
 *  cultureIndexParams: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function initialize(
  options: BaseTransactionOptions<InitializeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xdc62515e",
  [
    {
      "internalType": "address",
      "name": "_votingPower",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_initialOwner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_maxHeap",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_dropperAdmin",
      "type": "address"
    },
    {
      "components": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "checklist",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "template",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "tokenVoteWeight",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pointsVoteWeight",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "quorumVotesBPS",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minVotingPowerToVote",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minVotingPowerToCreate",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "name",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "description",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "image",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "text",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "animationUrl",
              "type": "uint256"
            }
          ],
          "internalType": "struct ICultureIndex.PieceMaximums",
          "name": "pieceMaximums",
          "type": "tuple"
        },
        {
          "internalType": "enum ICultureIndex.MediaType",
          "name": "requiredMediaType",
          "type": "uint8"
        },
        {
          "internalType": "enum ICultureIndex.RequiredMediaPrefix",
          "name": "requiredMediaPrefix",
          "type": "uint8"
        }
      ],
      "internalType": "struct IRevolutionBuilder.CultureIndexParams",
      "name": "_cultureIndexParams",
      "type": "tuple"
    }
  ],
  []
],
    params: [options.votingPower, options.initialOwner, options.maxHeap, options.dropperAdmin, options.cultureIndexParams]
  });
};




/**
 * Calls the "renounceOwnership" function on the contract.
 * @param options - The options for the "renounceOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { renounceOwnership } from "TODO";
 * 
 * const transaction = renounceOwnership();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function renounceOwnership(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x715018a6",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "transferOwnership" function.
 */
export type TransferOwnershipParams = {
  newOwner: AbiParameterToPrimitiveType<{"internalType":"address","name":"newOwner","type":"address"}>
};

/**
 * Calls the "transferOwnership" function on the contract.
 * @param options - The options for the "transferOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferOwnership } from "TODO";
 * 
 * const transaction = transferOwnership({
 *  newOwner: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transferOwnership(
  options: BaseTransactionOptions<TransferOwnershipParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf2fde38b",
  [
    {
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  []
],
    params: [options.newOwner]
  });
};


/**
 * Represents the parameters for the "upgradeTo" function.
 */
export type UpgradeToParams = {
  newImpl: AbiParameterToPrimitiveType<{"internalType":"address","name":"_newImpl","type":"address"}>
};

/**
 * Calls the "upgradeTo" function on the contract.
 * @param options - The options for the "upgradeTo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { upgradeTo } from "TODO";
 * 
 * const transaction = upgradeTo({
 *  newImpl: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function upgradeTo(
  options: BaseTransactionOptions<UpgradeToParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x3659cfe6",
  [
    {
      "internalType": "address",
      "name": "_newImpl",
      "type": "address"
    }
  ],
  []
],
    params: [options.newImpl]
  });
};


/**
 * Represents the parameters for the "upgradeToAndCall" function.
 */
export type UpgradeToAndCallParams = {
  newImpl: AbiParameterToPrimitiveType<{"internalType":"address","name":"_newImpl","type":"address"}>
data: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_data","type":"bytes"}>
};

/**
 * Calls the "upgradeToAndCall" function on the contract.
 * @param options - The options for the "upgradeToAndCall" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { upgradeToAndCall } from "TODO";
 * 
 * const transaction = upgradeToAndCall({
 *  newImpl: ...,
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function upgradeToAndCall(
  options: BaseTransactionOptions<UpgradeToAndCallParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x4f1ef286",
  [
    {
      "internalType": "address",
      "name": "_newImpl",
      "type": "address"
    },
    {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.newImpl, options.data]
  });
};


/**
 * Represents the parameters for the "vote" function.
 */
export type VoteParams = {
  pieceId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"pieceId","type":"uint256"}>
};

/**
 * Calls the "vote" function on the contract.
 * @param options - The options for the "vote" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { vote } from "TODO";
 * 
 * const transaction = vote({
 *  pieceId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function vote(
  options: BaseTransactionOptions<VoteParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0121b93f",
  [
    {
      "internalType": "uint256",
      "name": "pieceId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.pieceId]
  });
};


/**
 * Represents the parameters for the "voteForMany" function.
 */
export type VoteForManyParams = {
  pieceIds: AbiParameterToPrimitiveType<{"internalType":"uint256[]","name":"pieceIds","type":"uint256[]"}>
};

/**
 * Calls the "voteForMany" function on the contract.
 * @param options - The options for the "voteForMany" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { voteForMany } from "TODO";
 * 
 * const transaction = voteForMany({
 *  pieceIds: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function voteForMany(
  options: BaseTransactionOptions<VoteForManyParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xae650648",
  [
    {
      "internalType": "uint256[]",
      "name": "pieceIds",
      "type": "uint256[]"
    }
  ],
  []
],
    params: [options.pieceIds]
  });
};


/**
 * Represents the parameters for the "voteForManyWithSig" function.
 */
export type VoteForManyWithSigParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
pieceIds: AbiParameterToPrimitiveType<{"internalType":"uint256[]","name":"pieceIds","type":"uint256[]"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "voteForManyWithSig" function on the contract.
 * @param options - The options for the "voteForManyWithSig" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { voteForManyWithSig } from "TODO";
 * 
 * const transaction = voteForManyWithSig({
 *  from: ...,
 *  pieceIds: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function voteForManyWithSig(
  options: BaseTransactionOptions<VoteForManyWithSigParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x7f157a40",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "uint256[]",
      "name": "pieceIds",
      "type": "uint256[]"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.from, options.pieceIds, options.deadline, options.v, options.r, options.s]
  });
};


