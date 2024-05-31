import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import { getPieceById } from '../thirdweb/8453/0x5da551c18109b58831abe8a5b9edc5f9a8e4887c.js'
import { createThirdwebClient, getContract } from 'thirdweb'
import { base } from 'thirdweb/chains'
import dotenv from 'dotenv'
import { optimize } from 'svgo';
import { resolveScheme, upload } from "thirdweb/storage";

const saveSvgToCloudAndGetUrl = async (svg: string) => {
  const client = createThirdwebClient({
    secretKey: process.env.THIRDWEB_SECRET_KEY!,
  });
  // make File from the svg string
  const file = new File([svg], 'optimized.svg', { type: 'image/svg+xml' });
  const uri = await upload({
    client,
    files: [file],
  });
  const url = resolveScheme({
    client,
    uri,
  });
  return url;
}
// Function to decode base64 string
const decodeBase64 = (data: string) => {
  if (data.startsWith('data:image/svg+xml;base64,')) {
    const base64 = data.replace('data:image/svg+xml;base64,', '');
    const svg = Buffer.from(base64, 'base64').toString('utf-8');
    return svg;
  }
  return data; // Return as is if it's not base64 encoded
};
// Function to optimize SVG
const optimizeSvg = (svgString: string) => {
  const result = optimize(svgString, {
    plugins: [
      { name: 'removeDoctype' },
      { name: 'removeXMLProcInst' },
      { name: 'removeComments' },
      { name: 'removeMetadata' },
      { name: 'removeTitle' },
      { name: 'removeDesc' },
      { name: 'removeUselessDefs' },
      { name: 'removeEditorsNSData' },
      { name: 'removeEmptyAttrs' },
      { name: 'removeHiddenElems' },
      { name: 'removeEmptyText' },
      { name: 'removeEmptyContainers' },
      { name: 'cleanupEnableBackground' },
      { name: 'minifyStyles' },
      { name: 'convertStyleToAttrs' },
      { name: 'convertColors' },
      { name: 'convertPathData', params: { floatPrecision: 1 } },
      { name: 'convertTransform' },
      { name: 'removeUnknownsAndDefaults' },
      { name: 'removeNonInheritableGroupAttrs' },
      { name: 'removeUselessStrokeAndFill' },
      { name: 'removeUnusedNS' },
      { name: 'cleanupNumericValues', params: { floatPrecision: 1 } },
      { name: 'moveElemsAttrsToGroup' },
      { name: 'moveGroupAttrsToElems' },
      { name: 'collapseGroups' },
      { name: 'mergePaths' },
      { name: 'convertShapeToPath' },
      { name: 'sortAttrs' },
      { name: 'removeDimensions' }
    ],
  });
  return result.data;
};

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'

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
    pieceId: 984,
  },
  hub: isProduction ? neynar({
    apiKey: process.env.NEYNAR_API_KEY!,
  }) : undefined
})

 
app.frame('/:pieceId?', async (c) => {
  const { buttonValue, inputText, deriveState } = c
  const { pieceId } = c.req.param()
  const state = deriveState(previousState => {
    if (buttonValue === 'inc') previousState.pieceId++
    if (buttonValue === 'dec') previousState.pieceId--
    if (inputText) previousState.pieceId = Number(inputText)
    if (!buttonValue && !inputText) previousState.pieceId = Number(pieceId) || 0
  })

  console.log({ orig: true, state, pieceId, criteria1: pieceId !== ":pieceId", criteria2: !isNaN(Number(pieceId))})
  if (pieceId !== ":pieceId" && !isNaN(Number(pieceId))) {
    console.log('setting state to be pieceId')
    state.pieceId = Number(pieceId)
  }
  console.log({ state, pieceId })

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
  let optimizedSvg, optimizedSvgUrl;
  try {
    const decodedSvg = decodeBase64(piece.metadata.image);
    optimizedSvg = optimizeSvg(decodedSvg);
    optimizedSvgUrl = await saveSvgToCloudAndGetUrl(optimizedSvg); // Implement this function based on your cloud storage service
  } catch (error) {
    console.error('SVG Optimization failed:', error);
    optimizedSvg = piece.metadata.image; // Fallback to original if optimization fails
  }
  return c.res({
    action: "/",
    image: (
      <img src={optimizedSvgUrl} />
    ),
    imageOptions: {
      height: 200,
      width: 200,
    },
    intents: [
      <TextInput placeholder={`${piece.pieceId}`} />,
      <Button>🔍 Search</Button>,
      <Button.Link href={`https://warpcast.com/~/compose?text=Vote%20for%20vrb%20%23${piece.pieceId}%21&embeds%5B%5D=https://vrbs-vote-frame.vercel.app/api/${piece.pieceId}`}>Share</Button.Link>,
      <Button value="inc">Next</Button>,
      <Button.Transaction target={`/vote/${piece.pieceId}`}>Vote</Button.Transaction>
    ]
  })
})

app.transaction('/vote/:pieceId', (c) => {
  const { pieceId } = c.req.param()
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
    args: [BigInt(pieceId)],
  })
})

devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
