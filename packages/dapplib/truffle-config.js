require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain mistake guess private blue gate'; 
let testAccounts = [
"0xd82e973de2aa7ebac65bb87831328985e2d6bf71e86b9197797ec7f8a0d0b907",
"0xcf063704bc496abec7c23e66cd0ff30f252525bf81e13484a6577ee06b698d7b",
"0x4b2bb906f2ea6283dfaa5fd8d96e5d6430cc852aa6d6272d4d22e61224e1633c",
"0x259072a9212cdd9af3fd96d1c2a63ded80a1feedb779d54303f59fdbcbf30c65",
"0x90e43faa695df2e7201ce1819cd1550d1bacd0565f22693240ad655e3bb10afe",
"0xe764d6169153c56b7cd6d031045214483cd6a263c2de982f145bfd5142475dd3",
"0x34c330c64acf84835da672f52b9bb004ecb532df3aff86b511c69ab98405477b",
"0xa330537a8e238a04607d0a9f348bc357450ab75cd52d237c5026b8111afbeb4f",
"0x3211c18294490b46bd6de2964dfd08e837e45897747de7af9bb418709ac73398",
"0x96b31fbd83e03634dd3bb760c617537056509582dc24251988ae988f0a8646a1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

