import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import { getPieceById } from '../thirdweb/8453/0x5da551c18109b58831abe8a5b9edc5f9a8e4887c.js'
import { createThirdwebClient, getContract } from 'thirdweb'
import { base } from 'thirdweb/chains'
import dotenv from 'dotenv'
import { neynar } from 'frog/middlewares'

dotenv.config()

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

type State = {
  pieceId: number
}

export const app = new Frog<{ State: State }>({
  assetsPath: '/',
  basePath: '/api',
  imageAspectRatio: '1:1',
  initialState: {
    pieceId: 216,
  },
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
}).use(
  neynar({
    apiKey: process.env.NEYNAR_API_KEY!,
    features: ['interactor'],
  }),
)

 
app.frame('/', async (c) => {
  const { buttonValue, inputText, deriveState } = c
  const state = deriveState(previousState => {
    if (buttonValue === 'inc') previousState.pieceId++
    if (buttonValue === 'dec') previousState.pieceId--
    if (inputText) previousState.pieceId = Number(inputText)
  })

  // check if inputText is a valid numeric string
  if (inputText && isNaN(Number(inputText))) {
    return c.error({
      statusCode: 400,
      message: 'Invalid pieceId',
    })
  }

  const client = createThirdwebClient({
    secretKey: process.env.THIRDWEB_SECRET_KEY!,
  });
  const contract = getContract({
    address: '0x5da551c18109b58831abe8a5b9edc5f9a8e4887c',
    chain: base,
    client,
  });
  const piece = await getPieceById({
    contract,
    pieceId: BigInt(state.pieceId),
  });
  return c.res({
    action: "/",
    image: (
      <img src={`${piece.metadata.image}`} />
    ),
    imageOptions: {
      height: 100,
      width: 100,
    },
    intents: [
      <TextInput placeholder="Enter piece id..." />,
      <Button>🔍 Search</Button>,
      <Button value="dec">Previous</Button>,
      <Button value="inc">Next</Button>,
      <Button.Transaction target="/vote">Vote</Button.Transaction>
    ]
  })
})

app.transaction('/vote', (c) => {
  // Send transaction response.
  return c.contract({
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'pieceId',
            type: 'uint256',
          },
        ],
        name: 'vote',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    chainId: 'eip155:8453',
    functionName: 'vote',
    to: '0x5da551c18109b58831abe8a5b9edc5f9a8e4887c',
    args: [BigInt(c.previousState.pieceId)],
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
