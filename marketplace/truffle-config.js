sepolia: {
  provider: () =>
    new HDWalletProvider({
      mnemonic: {
        phrase: ""
      },
      providerOrUrl: "wss://sepolia.infura.io/ws/v3/YOUR-PROJECT-ID",
      addressIndex: 0
    }),
  network_id: "11155111",
  gasPrice: 2500000000,
  networkCheckoutTimeout: 10000,
  timeoutBlocks: 200
}