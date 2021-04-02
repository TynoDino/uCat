const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4e37ede03607279df474086f0c9b5838cd2c3a57e8de763e4e26f83ed28ebe30');
const myWalletAddress = myKey.getPublic('hex');

let uCat = new Blockchain();

const tx1 = new Transaction(myWalletAddress, '0463f98198f9ada519c54c5bf64b99274653998a6efc005f42620364bcac112cc2ab1cc73e232d6d23b16c70adf5c0c6ec87ff403bfec22aadb34f20bdfb5e60b7', 1);
tx1.signTransaction(myKey);
uCat.addTransaction(tx1);

console.log('\n starting miner');
uCat.minePendingTransactions(myWalletAddress)

console.log('\ntinos balance is ', uCat.getBalanceOfAddress(myWalletAddress));

console.log('is chain valid?', uCat.isChainValid());