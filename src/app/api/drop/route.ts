import { PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL = "https://api.devnet.solana.com";

export async function POST(req: Request) {
  const { untrustedData } = await req.json();
  try {
    const solAddress = untrustedData?.inputText;

    const solAddressValid = PublicKey.isOnCurve(solAddress);

    const body = {
      jsonrpc: "2.0",
      id: 1,
      method: "requestAirdrop",
      params: [solAddress, 1000000000],
    };

    const response = await fetch(SOLANA_RPC_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return new Response(
        `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <meta property="og:title" content="SolDrop Frame by devvivek" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/success.jpg" />
            <meta
            property="og:image"
            content="https://sol-drop-frame.vercel.app/initial.jpg"
          />
            <meta
              property="fc:frame:button:1"
              content="Retry Airdrop"
            />
            <meta
              name="fc:frame:post_url"
              content="https://sol-drop-frame.vercel.app"
            />
          </head>
          <body>
              <h1>Looks like something went wrong</h1>
          </body> 
        </html>`,
        { headers: { "Content-Type": "text/html" }, status: 200 }
      );
    }
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:title" content="SolDrop Frame by devvivek" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/success.jpg" />
          <meta
          property="og:image"
          content="https://sol-drop-frame.vercel.app/initial.jpg"
        />
          <meta
            property="fc:frame:button:1"
            content="Airdrop Successful"
          />
          <meta
            name="fc:frame:post_url"
            content=""
          />
        </head>
        <body>
            <h1>Airdrop Successful</h1>
        </body> 
      </html>`,
      { headers: { "Content-Type": "text/html" }, status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    if (error instanceof Error) {
      if (error.message.includes("Invalid")) {
        return new Response(
          `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width" />
              <meta property="og:title" content="SolDrop Frame by devvivek" />
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/invalid.jpg" />
              <meta
              property="og:image"
              content="https://sol-drop-frame.vercel.app/invalid.jpg"
            />
              <meta
                property="fc:frame:button:1"
                content="Retry With Valid Address"
              />
              <meta name="fc:frame:post_url" content="https://sol-drop-frame.vercel.app" />
            </head>
            <body>
                <h1>Provide valid address</h1>
            </body> 
          </html>`,
          { headers: { "Content-Type": "text/html" }, status: 200 }
        );
      }
    }
    return new Response("Failed to airdrop", { status: 400 });
  }
}
