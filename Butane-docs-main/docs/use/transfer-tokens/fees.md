---
sidebar_position: 6
---


# Fees 

In Exchange , on default, Flamez Smart Router will utilize liquidity from , V2, StableSwap (BBC Chain), and the AMM and market makers (BBC Chain & Ethereum), to execute trades and find the best price for traders.

However, users are always able to customize their trade by choosing which liquidity sources the router shall utilize, and enable or disable multihops and split routing.

Check the fee rate and fee amount that is currently applied
​​
To check how much trading will be charged on your current swap, check out the “Fee” section in the swap detail section.
​​
To check which type of pool and the fee tier your trade is currently routed through, check out the “Route” section.
​​
To learn more detail, click the magnifier icon to bring out the full trading route displays.
​
## Customize liquidity sources
​​
By default, all of the liquidity sources are enabled and Smart Router will take full advantage of all the available liquidities within Flamez.
Please note that the router will NOT route trades between AMM liquidity pools and MM market makers. When your trade is executed by MM market makers, it will not go through any AMM liquidity pools.
​​
You can click the “Reset” button on the top right-hand corner to reset the configurations to default.
​
## Customize routing preferences
​​
At the bottom of the “Customize Routing” interface, you can customize your routing preferences by enabling or disabling multihops and split routing.

Multihops allow tokens to swap through multiple hops between serval liquidity pools to achieve the best deal. Turning it off will restrict trades to direct swaps, which may cause higher slippage or even fund loss.

Split routing enables token swaps to be broken into multiple routes to achieve the best deal. Turning it off will restrict trades from being executed with a single route, which may result in low efficiency or higher slippage.