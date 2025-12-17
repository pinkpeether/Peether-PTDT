# Peether (PTDT) - Official Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![BSC Network](https://img.shields.io/badge/Network-Binance%20Smart%20Chain-yellow)](https://bscscan.com/)
[![Token Standard](https://img.shields.io/badge/Standard-BEP--20-blue)](https://academy.binance.com/en/glossary/bep-20)

> Revolutionizing ride-hailing with blockchain technology. 500,000+ rides. 3,000+ drivers. Real-world utility.

## 🌟 Overview

Peether (PTDT) is a deflationary BEP-20 utility token built on Binance Smart Chain, designed to transform the economics of ride-hailing services. Unlike traditional platforms that charge 25-30% fees, PTDT operates on a sustainable 5% model while providing instant settlements and deflationary value appreciation.

### Key Statistics
- 💼 **3,000+ Active Drivers** across 7 countries
- 🚗 **500,000+ Rides Completed** since 2018
- 💰 **$2.5M+ Transaction Volume** processed
- 🌍 **7 Countries:** Egypt, Dubai, Nigeria, Pakistan, South Africa, India, Australia
- 📈 **15-20% Higher Income** for drivers vs traditional platforms

## 🔥 Core Features

### Deflationary Tokenomics
- **Total Supply:** 1,000,000,000 PTDT (fixed, no minting)
- **Burn Rate:** 1% per transaction permanently destroyed
- **Result:** Increasing scarcity as adoption grows

### Anti-Whale Protection
- **Private Sale Limit:** 1,000,000 PTDT per wallet (0.1% max)
- **Fair Distribution:** Prevents market manipulation
- **Time-Locked:** Restrictions auto-remove post-Private Sale

### Security Features
- ✅ Slither security audit completed
- ✅ Time-locked ownership renouncement (30 days)
- ✅ No pausable functions (true decentralization)
- ✅ Blacklist mechanism (90-day activation delay for compliance)
- ✅ Fully verified on BSCScan

## 🏗️ Architecture

### Smart Contracts

**Token Contract:**
- BEP-20 standard implementation
- Deflationary burn mechanism
- Anti-whale purchase limits
- Blacklist functionality (compliance-ready)

**Private Sale Contract:**
- Two-step purchase process (USDT approval + token buy)
- Anti-whale enforcement
- Instant token distribution
- Emergency pause capability (team-controlled, expires 30 days)

### DApp Stack
- **Frontend:** React + Vite + TypeScript
- **Web3 Integration:** Wagmi + RainbowKit
- **Styling:** Tailwind CSS
- **Blockchain:** Binance Smart Chain (BSC)
- **Payment Token:** USDT (BEP-20)

## 📋 Contract Addresses

| Contract | Address | Verified |
|----------|---------|----------|
| PTDT Token | `[YOUR_TOKEN_ADDRESS]` | [BSCScan ↗](https://bscscan.com/address/...) |
| Private Sale | `[YOUR_SALE_ADDRESS]` | [BSCScan ↗](https://bscscan.com/address/...) |
| USDT (BEP-20) | `0x55d398326f99059fF775485246999027B3197955` | [BSCScan ↗](https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955) |

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MetaMask or Trust Wallet
- BNB for gas fees (~$1)
- USDT (BEP-20) for token purchase

### Installation
```bash
# Clone repository
git clone https://github.com/pinkpeether/Peether-PTDT.git
cd Peether-PTDT

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your values

# Run development server
npm run dev
```

### Deployment
```bash
# Build for production
npm run build

# Deploy smart contracts (Hardhat)
npx hardhat run scripts/deploy.js --network bsc

# Verify contracts on BSCScan
npx hardhat verify --network bsc [CONTRACT_ADDRESS]
```

## 📖 Documentation

### For Users
- [How to Buy PTDT](./docs/HOW_TO_BUY.md)
- [Wallet Setup Guide](./docs/WALLET_SETUP.md)
- [FAQ](./docs/FAQ.md)

### For Developers
- [Smart Contract Documentation](./docs/CONTRACTS.md)
- [DApp Integration Guide](./docs/INTEGRATION.md)
- [API Reference](./docs/API.md)

### Tokenomics
- [Economic Model](./docs/TOKENOMICS.md)
- [Deflationary Mechanics](./docs/DEFLATION.md)
- [Roadmap 2026-2030](./docs/ROADMAP.md)

## 🛡️ Security

### Audits
- ✅ **Slither Static Analysis** - All critical issues resolved
- 📋 **Third-Party Audit** - Scheduled Q1 2026
- 🔐 **Bug Bounty Program** - Coming Q2 2026

### Responsible Disclosure
Found a security issue? Email: security@ptdt.taxi

**Do NOT open public issues for security vulnerabilities.**

## 🗺️ Roadmap

### Q4 2025 - Private Sale & Listings
- [x] Smart contract deployment
- [x] Private Sale launch
- [ ] CoinGecko listing
- [ ] TrustWallet integration
- [ ] PancakeSwap liquidity pool

### Q1 2026 - Ecosystem Expansion
- [ ] Mobile app (iOS/Android)
- [ ] Staking rewards program
- [ ] 10,000+ drivers onboarded
- [ ] 15 countries operational

### Q2 2026 - DeFi Integration
- [ ] Governance token launch
- [ ] Liquidity mining
- [ ] Ride escrow smart contracts
- [ ] Cross-chain bridge (ETH/Polygon)

### Q3 2026+ - Global Scale
- [ ] 50,000+ drivers
- [ ] 30+ countries
- [ ] B2B partnerships
- [ ] API licensing

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
- 📊 **BSCScan:** [View Token](https://bscscan.com/token/[YOUR_ADDRESS])
- 📝 **Medium:** [medium.com/@ptdt](https://medium.com/@ptdt)
- 💬 **Community:** [Your Telegram/Discord]
- 🐦 **Twitter:** [Your Twitter if available]

## 📧 Contact

- **General Inquiries:** info@ptdt.taxi
- **Partnerships:** partnerships@ptdt.taxi
- **Support:** support@ptdt.taxi
- **Security:** security@ptdt.taxi

---

**⚡ Built with passion for decentralization. Powered by Binance Smart Chain.**

*Empowering 3,000+ drivers. Completed 500,000+ rides. Creating the future of mobility.*
```

---

### **Issue #3: Missing Essential Files**

**Add these files to make the repo complete:**

#### **1. LICENSE file**
Create `LICENSE` file with MIT License:
```
MIT License

Copyright (c) 2025 Peether PTDT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

#### **2. CONTRIBUTING.md**
Basic contribution guidelines

#### **3. docs/ folder**
Create `/docs` folder with:
- `HOW_TO_BUY.md`
- `TOKENOMICS.md`
- `ROADMAP.md`
- `FAQ.md`

#### **4. .gitignore**
```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Misc
.DS_Store
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
