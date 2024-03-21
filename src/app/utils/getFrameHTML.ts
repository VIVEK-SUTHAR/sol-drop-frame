export default function getFrameHTML(frameType: "success" | "invalid" | "error") {
  switch (frameType) {
    case "success":
      return SUCCESS_HTML;
    case "error":
      return ERROR_HTML;
    case "invalid":
      return INVALID_ADDRESS_HTML;
  }
}

const ERROR_HTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta property="og:title" content="SolDrop Frame by devvivek" />
    <meta property="fc:frame" content="vNext" />
    <meta property="of:version" content="vNext" />
    <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/error.jpg" />
    <meta property="of:image" content="https://sol-drop-frame.vercel.app/error.jpg" />
    <meta
    property="og:image"
    content="https://sol-drop-frame.vercel.app/error.jpg"
  />
    <meta
      property="fc:frame:button:1"
      content="Retry Airdrop"
    />
    <meta
      property="of:button:1"
      content="Retry Airdrop"
    />
    <meta
      name="fc:frame:post_url"
      content="https://sol-drop-frame.vercel.app"
    />
    <meta
      name="of:post_url"
      content="https://sol-drop-frame.vercel.app"
    />
  </head>
  <body>
      <h1>Looks like something went wrong</h1>
  </body> 
</html>`;

const SUCCESS_HTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta property="og:title" content="SolDrop Frame by devvivek" />
    <meta property="fc:frame" content="vNext" />
    <meta property="of:version" content="vNext" />
    <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/success.jpg" />
    <meta property="of:image" content="https://sol-drop-frame.vercel.app/success.jpg" />
    <meta
    property="og:image"
    content="https://sol-drop-frame.vercel.app/success.jpg"
  />
    <meta
      property="fc:frame:button:1"
      content="Airdrop Successful"
    />
    <meta
      property="of:button:1"
      content="Airdrop Successful"
    />
    <meta
      name="fc:frame:post_url"
      content="https://sol-drop-frame.vercel.app"
    />
  </head>
  <body>
      <h1>Airdrop Successful</h1>
  </body> 
</html>`;

const INVALID_ADDRESS_HTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta property="og:title" content="SolDrop Frame by devvivek" />
    <meta property="of:version" content="vNext" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/invalid.jpg" />
    <meta property="of:image" content="https://sol-drop-frame.vercel.app/invalid.jpg" />
    <meta
    property="og:image"
    content="https://sol-drop-frame.vercel.app/invalid.jpg"
  />
    <meta
      property="fc:frame:button:1"
      content="Retry With Valid Address"
    />
    <meta
      property="of:button:1"
      content="Retry With Valid Address"
    />
    <meta name="fc:frame:post_url" content="https://sol-drop-frame.vercel.app" />
    <meta name="of:post_url" content="https://sol-drop-frame.vercel.app" />
  </head>
  <body>
      <h1>Provide valid address</h1>
  </body> 
</html>`;
