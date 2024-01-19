# Edgeless Contracts

## Getting Started

```sh
npm i
forge test
```
## Overview

Contracts

Polymarket docs: https://docs.polymarket.com/#overview-8

FPAMM: https://docs.gnosis.io/conditionaltokens/docs/introduction3
https://github.com/gnosis/conditional-tokens-market-makers/tree/master?tab=readme-ov-file

Conditional tokens: https://docs.gnosis.io/conditionaltokens/
https://github.com/gnosis/conditional-tokens-contracts

### Background

## System Design

# Contract Design

### Contract Structure

- The contracts are organized into four distinct groups of contracts. Additionally, there is an integration with a standard bridge designed for Layer 1 (L1).

### Invariants

The following invariants should always be maintained within the contract:

- The balance of Wrapped Eth should always be less than or equal to the total Steth balance combined with the Eth balance.
- The balance of Wrapped USD should always be less than or equal to the sum of the DSR amount and the Dai balance.
- If autostaking is not enabled, only the designated staker has the authority to stake Eth and Dai.
- Toggling the AutoStake feature can only be done by the staker.
- Setting the staker, L1Bridge, bridgePause, authorizing upgrades, and minting tokens can only be performed by the owner of the contract.
- If the bridge is paused, users are unable to bridge to L1.
- The mint and burn functions can only be called by the Edgeless Deposit contract.

## Usage

This is a list of the most frequently needed commands.

### Clean

Delete the build artifacts and cache directories:

```sh
$ forge clean
```

### Compile

Compile the contracts:

```sh
$ forge build
```

### Coverage

Get a test coverage report:

```sh
$ forge coverage
```

### Format

Format the contracts:

```sh
$ forge fmt
```

### Gas Usage

Get a gas report:

```sh
$ forge test --gas-report
```

### Lint

Lint the contracts:

```sh
$ npm run lint
```

### Test

Run the tests:

```sh
$ forge test
```

Generate test coverage and output result to the terminal:

```sh
$ npm run test:coverage
```

Generate test coverage with lcov report (you'll have to open the `./coverage/index.html` file in your browser, to do so
simply copy paste the path):

```sh
$ npm run test:coverage:report
```

### Deploy
There are four steps to the deployment process

For this script to work, you need to have a valid `.env` file. Copy the `.env.example` file to get started
