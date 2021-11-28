# TON Contract Executor

Runs TVM locally and provides primitives for TON smart contracts local development.

⚠️ we currently support only arm64 Macs

## Install

```bash
yarn add ton-contract-executor
```

## How it works 
This package internally uses vm-execute cli tool (which will be published soon).
vm-execute fetches vm code, initial stack and data cell from json config, executes TVM and returns resulting vm stack as json.

## How to use

```typescript
const source = `
    () main() {
        ;; noop
    }

    int test() method_id {
        return 777;
    }
`

let contract = await SmartContract.fromFuncSource(source, new Cell())
let res = await contract.invokeGetMethod('test', [])    // returns stack with int 777 as first and only entry
```


# License

MIT