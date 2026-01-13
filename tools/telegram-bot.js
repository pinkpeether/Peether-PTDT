// telegram-bot.js - Simple Node.js bot for PTDT community
// Run locally or on free Vercel/Replit

const { Telegraf } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN_HERE'); // Replace with your token

bot.start((ctx) => ctx.reply('Welcome to PTDT Bot! 🚖\nCommands:\n/readme - View README\n/contract1 - Peether Token Contract\n/contract2 - Private Sale Contract\n/help - More info'));

bot.command('readme', (ctx) => {
  ctx.reply('PTDT README (full docs & contracts):\nhttps://github.com/pinkpeether/Peether-PTDT/blob/main/README.md\nScarcity: 100,000 tokens only!');
});

bot.command('contract1', (ctx) => {
  ctx.reply('Peether Token (Contract1.sol) - Main BEP-20 with anti-whale:\nhttps://github.com/pinkpeether/Peether-PTDT/blob/main/contracts/Contract1.sol\nAudit: 9.2/10');
});

bot.command('contract2', (ctx) => {
  ctx.reply('Private Sale Contract (Contract2.sol):\nhttps://github.com/pinkpeether/Peether-PTDT/blob/main/contracts/Contract2.sol\nBuy with USDT securely!');
});

bot.command('help', (ctx) => {
  ctx.reply('More help:\nWebsite: https://ptdt.taxi\nDApp: https://dapp.ptdt.taxi\nJoin community for updates!');
});

bot.launch();
console.log('PTDT Bot running!');
