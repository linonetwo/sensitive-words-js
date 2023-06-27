# sensitive-words-js

ESM package containing dict and mint-filter.

## Usage

### Default zh-CN filter

```ts
import { filter } from 'sensitive-words-js';

const { words, text } = filter.filter('一次性交纳百元');
// words === ['性交']
// text === '一次**纳百元'
```

See [ZhelinCheng/mint-filter](https://github.com/ZhelinCheng/mint-filter#5-%E6%96%B9%E6%B3%95) for more usages.

### Get the dict

```ts
import { zhCN } from 'sensitive-words-js';

// zhCN === ['性交', ...]
```

### Contributing

You can add more words into src/dict folder, not limited to zh-CN words.

```sh
pnpm i
pnpm run generate-barrels
```
