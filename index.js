import bip39 from "bip39";
import ethers from "ethers";

const WALLETS_AMOUNT = 10;

let wallets = [];

for (let i = 0; i < WALLETS_AMOUNT; i++) {
  const mnemonic = bip39.generateMnemonic();
  let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
  const address = await mnemonicWallet.getAddress();
  const privateKey = mnemonicWallet.privateKey;
  const walletInfo = address + ";" + mnemonic + ";" + privateKey;
  wallets.push(walletInfo);
}

console.log(wallets.join("\n"));
