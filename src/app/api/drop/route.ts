import getFrameHTML from "@/app/utils/getFrameHTML";
import { PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL = "https://api.devnet.solana.com";

//1 Sol in Lamports
const AIRDROP_AMOUNT = 1000000000;
export async function POST(req: Request) {
  const { untrustedData } = await req.json();
  try {
    const solAddress = untrustedData?.inputText;
    const isSolAddressValid = PublicKey.isOnCurve(solAddress);
    if (!isSolAddressValid) {
      return new Response(getFrameHTML("invalid"), {
        headers: { "Content-Type": "text/html" },
        status: 200,
      });
    }
    const body = {
      jsonrpc: "2.0",
      id: 1,
      method: "requestAirdrop",
      params: [solAddress, AIRDROP_AMOUNT],
    };
    const response = await fetch(SOLANA_RPC_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return new Response(getFrameHTML("error"), {
        headers: { "Content-Type": "text/html" },
        status: 200,
      });
    }
    return new Response(getFrameHTML("success"), {
      headers: { "Content-Type": "text/html" },
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Invalid")) {
        return new Response(getFrameHTML("invalid"), {
          headers: { "Content-Type": "text/html" },
          status: 200,
        });
      }
    }
    return new Response(getFrameHTML("error"), {
      headers: { "Content-Type": "text/html" },
      status: 200,
    });
  }
}
