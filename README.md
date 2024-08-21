# osrs-ge
Old school runescape (osrs) grand exchange api


## What it does

This wrapper GE data into a more usable JSON object and provides extra information about items in the GE

---
## Installation

With npm:

```
$ npm install osrs-ge
```

## How to use

Install the package and then import it into your project:

const ge = require('osrs-ge');

Once you import it you can call the functions asynchronously:

```typescript
const item = await ge.getItem(4151);
const items = await getItems('rune');
const graphData = await getGraphData();
const lastUpdatedDate = await getLastUpdatedDate();
```
## What you'll get

`getItem` returns an item object that looks like this:

```typescript
{
  item: {
    icon: 'https://secure.runescape.com/m=itemdb_oldschool/1724236194410_obj_sprite.gif?id=4151',
    icon_large: 'https://secure.runescape.com/m=itemdb_oldschool/1724236194410_obj_big.gif?id=4151',
    id: 4151,
    type: 'Default',
    typeIcon: 'https://www.runescape.com/img/categories/Default',
    name: 'Abyssal whip',
    description: 'A weapon from the Abyss.',
    current: { trend: 'neutral', price: '1.4m' },
    today: { trend: 'positive', price: '+12.8k' },
    members: 'true',
    day30: { trend: 'negative', change: '-2.0%' },
    day90: { trend: 'negative', change: '-15.0%' },
    day180: { trend: 'negative', change: '-18.0%' }
  }
}
```

`getItems` returns and array of items based on your input:

```typescript

  total: 4152,
  items: [
    {
      icon: 'https://secure.runescape.com/m=itemdb_oldschool/1724236194410_obj_sprite.gif?id=1319',
      icon_large: 'https://secure.runescape.com/m=itemdb_oldschool/1724236194410_obj_big.gif?id=1319',
      id: 1319,
      type: 'Default',
      typeIcon: 'https://www.runescape.com/img/categories/Default',
      name: 'Rune 2h sword',
      description: 'A two handed sword.',
      current: [Object],
      today: [Object],
      members: 'false'
    },
    // ...
        ]
    }
```

`getGraphData` Graph shows the prices each day of a given item for the previous 180 days. The timecode is the number of milliseconds that has passed since 1 January 1970 and the price is the market value of the item for the given day. When no price information is available, then a value of zero is returned.

```typescript

  {"daily":{"1419897600000":15633853,"1419984000000":15475988,"1420070400000":15379017},"average":{"1419897600000":14708793,"1419984000000":14764787,"1420070400000":148288055}}
```

`getLastUpdatedDate` returns the runedate of when the Grand Exchange Database was last updated.