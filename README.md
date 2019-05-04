# CodeChain Exchange

Decentralized exchange platform for an asset on the CodeChain

## Getting Started

## Download CodeChain exchange code

```
# git clone https://github.com/CodeChain-io/codechain-exchange.git
# cp codechain-exchange
```

## Prerequisites

```
# yarn install
# sudo service postgresql start
# yarn migration
```

### Account setting
#### Development mode
Matched transactions are signed by secret. You don't actually need to do nothing
#### Test mode
Matched transactions are singed by secret. You need to add platform and its secret into the `/server/config/dex.json`
#### Production mode
Matched transactions are signed with the local keystore `/server/config/keystore.db`. The local keystore should store only one key.

## Start server

```
# yarn start
```

## Start server in develop mode

```
# yarn start-dev
```

## Start client (Not implemented)

```
# cd client
# yarn serve
```

## Running the tests

```
# yarn test
```

## Deployment

## DB migration and undo migration

```
# yarn migration
# yarn undo-migration
```

## Insert seed data into DB

```
# yarn seed
# yarn undo-seed
```

## Formatting

```
# yarn fmt
```
