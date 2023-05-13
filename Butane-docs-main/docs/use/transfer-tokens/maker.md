---
sidebar_position: 8
---

# Market Maker Integration

Market Maker Integration on Ethereum

Flamez is integrated with market makers on Ethereum and Butane Smart Chain to help traders execute trades at a lower cost.

In addition to the AMM, trades on Flamez can now be routed to designated white-listed market makers if they offer trade execution that is better than the AMM’s current prices.

 This routing is done automatically by a  so that trades are only routed to market makers when they are actively quoting better prices. 
 
 Where the AMM is more competitive, traders will be routed to the AMMs for execution.

There are 2 scenarios in which market makers operate on Flamez.

### Scenario 1: Existing AMM liquidity pools

If Flamez already has liquidity for a given token (e.g. WETH/USDC) in the AMM, Flamez will ask market makers for a quote on the same trade. Flamez’s smart router will then route the trade request to the AMM or the market makers depending on which source of liquidity is giving the best price at any given time.

### Scenario 2: No existing AMM liquidity pools

In such a scenario, the smart router will automatically route the trade to the market makers. However, this does not stop projects from setting up their AMM liquidity pool subsequently and working with us to maintain decentralized DEX liquidity.
Fees

Flamez does not charge traders any fees executed through us and which are executed by the market makers. However, Flamez receives 0.05% trading fees (0.0375% on BSC) from whitelisted market makers for volumes executed by them. Flamez receives a reduced 0.01% trading fee if the trades executed are between stablecoin pairs. Please refer to the fee breakdown below:

 
The following assets are currently supported and may increase/decrease depending on the market maker(s):

On Ethereum

### Majors: WETH, WBTC 

Stablecoins: USDT, USDC, DAI, BUSD
Other popular ERC-20 assets: MATIC, SAND, DYDX, CRV, MANA, SUSHI, FTM, LINK, APE, CVX, STG, LDO, AAVE, MKR, UNI, SNX

On Butane Smart Chain: 

### Majors: BBC, WBNB, ETH, BTCB

Please note that unlike AMMs, market makers will not be able to trade at any amount and the amounts they are willing to execute will depend on their own liquidity. 

It is not unusual that sometimes very large orders cannot be totally fulfilled. We advise users to please review the quotes carefully to ensure that each trade reflects the price and quantity according to their needs. 

## Market maker downtimes 

Market makers are not expected to quote 24-7. There are some instances (e.g. key economic events, system upgrades) where the market maker may be temporarily unavailable to provide a quote. Please note during these periods, these tokens will simply not be tradable, and we advise users to wait for some time before the market maker comes back online.
