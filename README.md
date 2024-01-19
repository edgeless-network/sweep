This is the monorepo for pari. Scaffolding will be added tomorrow

## Description
This is the onchain portion of the system.

Streamers can create new games for users to bet on.

Users can enter into positions or sell out of positions, as long as the game has not ended

When the game ends, an oracle fetches the status of the game from the computer vision api and posts it on chain

Users can then redeem their positions for cash at the end of the game

All of the accounting logic below has already been created - we are using the same model and solidity contracts as polymarket
https://github.com/mvllow/next-pwa-template

![image](https://github.com/edgeless-network/pari/assets/156271310/b3df24e6-14a7-4eec-92c7-e9552b295852)
