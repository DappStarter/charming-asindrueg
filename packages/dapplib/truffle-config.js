require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain common harvest industry broken type'; 
let testAccounts = [
"0xc404dbb62d915d4a789708dfde27a21f95a2c7459fcfd3bab5182de98d993d25",
"0x012538e6998a1afe26a621cc67a3296087dea538f7d0e3d3dce5db8504640e97",
"0xb1fd01e4141d2a86dad60083c787e16dfb006399095a74c551c026f790cdab95",
"0x1f81a5437790fa484f8638850d174ec6b9f4c14560bab9a0490dec3de45fdeaf",
"0x2ced8800eaf2c669fcc3b7d86e291cab5c4a1a7f423de40962035203b8688d97",
"0x0a7a620ac23cb1dff17fff4223f6ec443b701ffb4b2d5328a2dcb4b80ff5c9d8",
"0x51828f041783371ceca28f352e4ecb36e85c193ab94c8cd9e80e8de866778a1d",
"0x1b515d5cf803dbbc0d3f7141e558640a1564d30bd56adad73e9849382d7c1558",
"0x7d08534705858b5ce9f7cc713250dcadd69e2a9eda6be9aa82e53134fd77e5e3",
"0x6cf30df04afbf441e153769fae8032a8bed3ff5d9f915868098dbdaae58f06d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
