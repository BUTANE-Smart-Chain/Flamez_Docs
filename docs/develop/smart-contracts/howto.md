---
sidebar_position: 2
---
# How to Use Farms with BbcScan

Since it requires several steps, using Farms with Flamez can seem intimidating at first. This guide will walk you through using the Farms contract directly through BbcScan.

Please understand that using BbcScan to interact with contracts is not recommended for beginners. If you're not feeling confident, we suggest using the How to Use Farms guide instead.

## Finding Farm process identifier

To interact correctly with the farming smart contract, you’ll need the matching process identifier (PID) for your LP pair. For now, the easiest way to locate this is to check GitHub.

1. Open the Flamez website’s Farms code on GitHub.
2. Control/command + F and search for your pair by ticker (not project name). For example, 'FLAMEZ-BUSD'.
3. Write down or copy the PID number—in this case 389—somewhere you can access it easily. You'll need this later.

## Depositing LP Tokens through BbcScan

There are a few things involved in depositing LP Tokens using BbcScan. We've broken it down into steps to make it easier to follow along.

### Getting the Main Staking Contract address

The address for the main staking contract is:
0x73feaa1eE314F8c655E354234017bE2193C9E24E

But assuming you'd like to confirm that, visit the Flamez: Main Staking Contract BbcScan page. You'll see the address in the top-left. Click the pages icon to copy this to clipboard. You'll need it soon.

### Open the contract for your LP Token

You'll need to approve the smart contract for the LP Token you wish to commit to a farm before you can spend it.

#### From the source code

1. First, open farms.ts on GitHub.
2. Control/command + F and search for your pair by ticker (not project name). For example, 'FLAMEZ-BNB'
3. When you have the code for the LP pair you're looking for up, find the address after "56:". This will be your contract address.

#### From the UI

1. First, visit the Flamez Farms page and search for your chosen pair using the "SEARCH" field in the top right. We're using FLAMEZ-BUSD for this example.
2. Click Details to expand the row to show more information.
3. Click View Contract to open the smart contract on BbcScan.

### Giving permission to the LP Token contract

Now that you have your LP Token's contract open on BbcScan, you're going to approve the spending of your LP Tokens into the Farm.

1. On the LP Token's contract page, go to Contract, and then Write Contract.
2. Click Connect to Web3 to connect MetaMask.
3. Confirm the connection.
4. Under function 1, “approve”, you’ll see “spender:address”. Paste in the Main Staking Contract’s contract address you copied to clipboard earlier.
5. You’re also going to need to approve the amount of LP Tokens the contract can spend. In the value field, you’ll need to enter the amount in Wei. You can use the BbcScan Unit Converter to easily change your amount into Wei. Here we'll use 5 FLAMEZ-BUSD LP Tokens.
6. Click Write and accept the action in your MetaMask wallet. You’re now able to commit LP Tokens to the Farm up to the amount you’ve approved.

### Deposit LP Tokens with the Main Staking Contract smart contract

With the Main Staking Contract now approved to spend your LPI apologize for the cutoff. Here's the continuation:

```markdown
Tokens, it's time to make a deposit.

1. Back on the Flamez: Main Staking Contract BbcScan page, go to Contract, and then Write Contract.
2. Click Connect to Web3 to connect MetaMask.
3. Scroll to function 2, "deposit", and type your PID into the "_pid" field.
4. Underneath _pid you'll see "_amount". Enter the amount for the LP contract to spend that you approved earlier.
5. Check the information and click Write. Confirm your action in MetaMask.
6. You can confirm your deposit worked by clicking View your transaction.

## Withdrawing from a Pool

Withdrawing your LP Tokens from a Pool is very similar to making a deposit. The difference is which function you'll interact with.

1. Back on the Flamez: Main Staking Contract BbcScan page, go to Contract, and then Write Contract.
2. Click Connect to Web3 to connect MetaMask.
3. Scroll all the way down to function 15, "withdraw", and type your PID into the "_pid" field.
4. Underneath _pid you'll see "_amount". Enter the amount of LP you'd like to withdraw from the Pool.
5. Check the information and click Write. Confirm your action in MetaMask.
6. You can confirm your withdrawal worked by clicking View your transaction.

## Making an emergency withdrawal

Using the emergency withdraw function allows you to draw all your funds out of a pool when no other way is working.

Using the emergency withdraw function will forfeit your FLAMEZ rewards! The Flamez team strongly suggests avoiding this function unless advised to do so officially by the Flamez team, or if you are very comfortable interacting with smart contracts and understand the underlying code.

1. On the Flamez: Main Staking Contract BbcScan page, go to Contract, and then Write Contract.
2. Click Connect to Web3 to connect MetaMask.
3. Scroll down to function 4, "emergencyWithdraw", and type your PID into the "_pid" field.
4. Check the information and click Write. Confirm your action in MetaMask.
5. You can confirm your withdrawal worked by clicking View your transaction.
