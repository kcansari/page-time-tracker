# Surf-Timer

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Description

Tracks consumed time in a page while considering idle time and user activity.

## Installation

```javascript
 # With yarn
yarn add surf-timer

# With npm
npm i surf-timer
```

## Example Usage

```javascript
import { useSurfTimer } from "surf-timer";

const surfTime = useSurfTimer({
  idleTime: 2000,
  initialState: false,
  intervalTime: 1000,
  fn() {
    console.log("hello world");
  },
});

useEffect(() => {
  surfTime.interval.start();
  return surfTime.interval.stop;
}, []);
```

## Definition

| Parameters     | Description                                        |
| :------------- | :------------------------------------------------- |
| `idleTime`     | Refers to the duration seconds of user inactivity. |
| `initialState` | Initial state of idle (boolean)                    |
| `intervalTime` | Amount of milliseconds between each tick           |
| `fn`           | Function that is called at each interval tick      |
| `events`       | Events that hook will listen                       |

## Custom Events

By default, the hook will listen to `keypress`, `mousemove`, `touchmove`, `click` and `scroll`events to set idle status.

## Return Object

`surfTime.idle` -> current idle status

`surfTime.interval.start` -> start interval br

`surfTime.interval.stop` -> stop interval

`surfTime.interval.toggle` -> toggle interval

`surtTime.interval.active` -> current interval status
