<h1 align="center"><b>XHub</b> <img src="https://i.ibb.co/0J89TrT/rsn-bot-1.png" width="30" style="border-radius: 50%; margin-bottom: -5px"></h1>
<p align="center"><i>XHub - AI-Powered NSFW Content API</i></p>

⚠️ **18+ NSFW Content** – XHub is one of the premium AI-powered NSFW content APIs developed by **Rsn Labs**. Use responsibly.

XHub uses artificial intelligence to deliver categorized NSFW images with ease. Retrieve high-quality content securely using a simple API wrapper.

## 🚀 Installation

```bash
npm i xhub
```

## 🔑 API Key

To access XHub, you need an API key.

1. Join the Discord Server: [https://api.rnilaweera.lk/discord](https://api.rnilaweera.lk/discord)
2. Register using the /register slash command
3. Generate your free API key with /generate-key

## 📂 Usage - Get Categories
```javascript

const { XHub } = require("xhub");

const xhub = new XHub("rsnlabs_××××××××××××××××××××××××××××××");

xhub.getCategories().then(category => {
  console.log(category);
});
```

## 🖼 Usage - Fetch NSFW Image
```javascript

const { XHub } = require("xhub");

const xhub = new XHub("rsnlabs_××××××××××××××××××××××××××××××");

const type = "hentai";

xhub.fetch(type).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error.message);
});
```

## 📜 License & Copyright

© 2025 Rsn Labs. All rights reserved.
Unauthorized distribution or use of this package is strictly prohibited.


⚠️ Disclaimer: This package contains explicit content and is strictly for adults. Ensure compliance with local regulations before use.

🔞 XHub is developed and maintained by **Rsn Labs**.