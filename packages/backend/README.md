We need one backend service currently

## Create Game
Parameters:
Question: How many kills will I get in this stream?
Stream link: twitch.tv/...
Outcomes: More than 5 kills, 5 or less kills
Collateral token: Eth
Trading fee: 1%
Initial Funding: 5 eth

Functionality:
- Create a backend service to monitor games
- When a gets within 5 minutes of finishing, pause the ability to buy, sell, or swap
positions
- When the game ends, call the oracle to update the result on chain
