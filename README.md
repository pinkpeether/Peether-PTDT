# Peether (PTDT) - Official Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![BSC Network](https://img.shields.io/badge/Network-Binance%20Smart%20Chain-yellow)](https://bscscan.com/)
[![Token Standard](https://img.shields.io/badge/Standard-BEP--20-blue)](https://academy.binance.com/en/glossary/bep-20)
[![Audit Score](https://img.shields.io/badge/Audit-9.2%2F10-success)](https://ptdt.taxi)

> Revolutionizing ride-hailing with blockchain technology. Only 100,000 tokens. 500,000+ rides. 3,000+ drivers. Real-world utility.

## 🌟 Overview

Peether (PTDT) is an ultra-scarce BEP-20 utility token built on Binance Smart Chain with only **100,000 tokens in existence**, designed to transform the economics of ride-hailing services. Unlike traditional platforms that charge 25-30% fees, PTDT operates on a sustainable 5% model while providing instant settlements and transparent on-chain transactions.

## 🚀 Getting Started

### Deploy Locally (For Testing)
1. Clone the repo: `git clone https://github.com/pinkpeether/Peether-PTDT.git`
2. Install dependencies: `npm install` (or use Hardhat/Truffle)
3. Compile contracts: `npx hardhat compile`
4. Test: `npx hardhat test`

### Interact with Contracts
```javascript
// Example: Check balance via Web3.js
const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed.binance.org/');
const tokenAddress = '0x66c6Fc5E7F99272134a52DF9E88D94eD83E89278';
const ABI = [ /* Paste minimal ABI here */ ];
const contract = new web3.eth.Contract(ABI, tokenAddress);
contract.methods.balanceOf('YOUR_WALLET_ADDRESS').call().then(console.log);

### Key Statistics
- 💼 **3,000+ Active Drivers** across 7 countries
- 🚗 **500,000+ Rides Completed** since 2006
- 💎 **Only 100,000 Tokens** (210x scarcer than Bitcoin)
- 🌍 **7 Countries:** Egypt, Australia, Dubai, South Africa, Pakistan, Nigeria, India
- 📈 **15-20% Higher Income** for drivers vs traditional platforms

## 🔥 Core Features

### Extreme Scarcity Tokenomics
- **Total Supply:** 100,000 PTDT (fixed, no minting possible)
- **Private Sale:** 5,000 PTDT (5%)
- **Liquidity Pool:** 5,000 PTDT (5%)
- **Result:** 210x scarcer than Bitcoin

### Anti-Whale Protection
- **Private Sale Limit:** 500 USDT per wallet (0.5% max)
- **Fair Distribution:** Prevents market manipulation
- **Automatic Enforcement:** Built into smart contract

### Advanced Security Features
- ✅ **Reentrancy Protection:** Non-reentrant modifiers on critical functions
- ✅ **Time-Locked Ownership:** 30-day renouncement delay after trading enabled
- ✅ **No Pausable Transfers:** True decentralization
- ✅ **Manual Burn Functions:** Strategic supply reduction capability
- ✅ **6-Month Liquidity Lock:** Prevents rug pulls
- ✅ **Audit Score:** 9.2/10
- ✅ **Fully Verified on BSCScan**

## 🏗️ Contract Architecture

### Token Contract (`Peether.sol`)

**Core Functions:**
- Standard BEP-20 implementation
- Manual burn capability (`burn()` and `burnFrom()`)
- Anti-whale limits (per-transaction and daily)
- Transfer cooldown for large transfers
- Controlled trading activation

**Security Mechanisms:**
```solidity
// Fixed supply - no minting
uint256 public immutable maxSupply = 100000 * 10**18;

// Anti-whale protection
maxTxAmount = maxSupply / 100;          // 1% max per transaction
dailyMaxTransfer = maxSupply / 10;      // 10% max per day

// Ownership controls
RENOUNCEMENT_DELAY = 30 days;           // Time-lock before renouncement
```

### Private Sale Contract (`PeetherPrivateSale.sol`)

**Features:**
- Two-step purchase process (USDT approval + token buy)
- Rate: 1 PTDT = 1 USDT
- Per-wallet limits: 500 USDT max
- Hard cap: 5,000 PTDT (5% of supply)
- Reentrancy protection
- Emergency pause capability

## 📋 Contract Addresses

| Contract | Address | Verified |
|----------|---------|----------|
| PTDT Token | `0x66c6Fc5E7F99272134a52DF9E88D94eD83E89278` | [BSCScan ↗](https://bscscan.com/address/0x66c6Fc5E7F99272134a52DF9E88D94eD83E89278) |
| Private Sale | `0x680fa612aE4a8668b801E184CFA2512DAaB39449` | [BSCScan ↗](https://bscscan.com/address/0x680fa612aE4a8668b801E184CFA2512DAaB39449) |
| USDT (BEP-20) | `0x55d398326f99059fF775485246999027B3197955` | [BSCScan ↗](https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955) |

## 🚀 Technical Specifications

### Token Parameters
```solidity
Name: "Peether"
Symbol: "PTDT"
Decimals: 18
Total Supply: 100,000 PTDT (fixed)
Max Tx Amount: 1,000 PTDT (1%)
Daily Max Transfer: 10,000 PTDT (10%)
Transfer Cooldown: 5 minutes (for large transfers)
```

### Private Sale Parameters
```solidity
Rate: 1 PTDT = 1 USDT
Min Purchase: 5 USDT
Max Purchase: 100 USDT per transaction
Max Per Wallet: 500 USDT
Hard Cap: 5,000 PTDT (5% of supply)
Sale Ends: December 23, 2025
```

### Token Distribution
```
Private Sale:           5%  (5,000 PTDT)
Liquidity Pool:         5%  (5,000 PTDT)
Team Allocation:       15%  (15,000 PTDT)
IT & Development:      25%  (25,000 PTDT)
Advisor & Legal:       15%  (15,000 PTDT)
Marketing & Bounty:    10%  (10,000 PTDT)
Referral Program:       5%  (5,000 PTDT)
Reserve/Treasury:      12%  (12,000 PTDT)
Community Growth:       8%  (8,000 PTDT)
────────────────────────────────────────
TOTAL:                100%  (100,000 PTDT)
```

## 🛡️ Security Audit Results

### Audit Score: 9.2/10
- ✅ **Critical Issues:** 0
- ✅ **High Severity:** 0
- ✅ **Medium Severity:** 0 (all resolved)
- ✅ **Low Severity:** 0 (naming conventions optimized)

### Resolved Issues
1. ✅ **Variable Shadowing:** Fixed in both contracts
2. ✅ **Naming Conventions:** All parameters use mixedCase
3. ✅ **Reentrancy Protection:** Implemented in sale contract
4. ✅ **Zero Address Checks:** Added throughout
5. ✅ **Transfer Cooldowns:** Prevents rapid-fire dumps

## 💎 Why Only 100,000 Tokens?

**Scarcity Comparison:**

| Token | Total Supply | vs PTDT |
|-------|-------------|---------|
| Bitcoin | 21,000,000 | 210x more |
| Ethereum | 120,000,000+ | 1,200x more |
| BNB | 144,000,000 | 1,440x more |
| Most BEP-20 | 1B - 100B | 10,000x - 1,000,000x more |
| **PTDT** | **100,000** | **Baseline** |

**The Math:**
- If 10,000 drivers each hold 10 PTDT: 100% of supply locked
- If 30,000 drivers need PTDT: Supply shock inevitable
- As adoption grows, scarcity drives value

## 🗺️ Roadmap

### Q4 2024 - Q1 2025 (COMPLETED) ✅
- [x] Smart contract development & audit
- [x] Website & brand launch
- [x] Private Sale launch
- [x] BSCScan verification

### Q2 2025 (CURRENT)
- [ ] Complete Private Sale (ends Dec 23, 2025)
- [ ] PancakeSwap liquidity pool
- [ ] CoinGecko and CoinMarketCap listings
- [ ] First CEX partnerships

### Q3 2025
- [ ] Mobile app beta (iOS/Android)
- [ ] Staking rewards program
- [ ] 10,000+ drivers onboarded
- [ ] 15 countries operational

### Q4 2025
- [ ] Expansion to 5 new countries
- [ ] Pink Miles loyalty program
- [ ] Major CEX listing (Binance/KuCoin)
- [ ] DAO governance framework

### 2026+
- [ ] AI-powered safety features
- [ ] Multi-chain expansion
- [ ] 50,000+ drivers globally
- [ ] Global brand recognition

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📜 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 🔗 Links

- 🌐 **Website:** [ptdt.taxi](https://www.ptdt.taxi)
- 💰 **DApp:** [dapp.ptdt.taxi](https://dapp.ptdt.taxi)
- 📊 **BSCScan:** [View Token](https://bscscan.com/token/0x66c6Fc5E7F99272134a52DF9E88D94eD83E89278)
- 📝 **Medium:** [medium.com/@ptdt](https://medium.com/@ptdt)
- 💬 **Community:** Telegram Bot: @PeetherPTDTbot | https://t.me/PeetherPTDTbot | Join Group https://t.me/PeetherPTDT
- 📄 **Whitepaper:** [ptdt.taxi/whitepaper.html](https://ptdt.taxi/whitepaper.html)

## 📧 Contact

- **General Inquiries:** info@ptdt.taxi
- **Partnerships:** partnerships@ptdt.taxi
- **Support:** support@ptdt.taxi
- **Security:** security@ptdt.taxi

---

**⚡ Built on Binance Smart Chain. Powered by Solidity 0.8.25.**

*Only 100,000 tokens will ever exist. 500,000+ rides completed. 3,000+ drivers empowered.*

**The most scarce utility token on BSC.**
```

---

## 📋 **3. REPOSITORY SETTINGS**

### **For: `Peether-PTDT` Repository**

**Go to:** Repository → Settings (gear icon) → About

**Description:**
```
Official smart contracts and DApp for PTDT - Ultra-scarce BEP-20 token (only 100,000 supply) revolutionizing ride-hailing on Binance Smart Chain
```

**Website:**
```
https://www.ptdt.taxi
```

**Topics (add all of these):**
```
binance-smart-chain
bep20-token
defi
cryptocurrency
ride-hailing
blockchain
web3
dapp
solidity
smart-contracts
utility-token
scarcity
women-empowerment
pink-taxi
transportation
