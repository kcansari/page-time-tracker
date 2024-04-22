import { useIdle } from "./use-idle";
import { useInterval } from "./use-interval";

const DEFAULT_EVENTS: (keyof DocumentEventMap)[] = [
  "keypress",
  "mousemove",
  "touchmove",
  "click",
  "scroll",
];

export function useSurfTimer({
  idleTime,
  initialState = true,
  events,
  fn,
  intervalTime,
}: {
  idleTime: number;
  initialState: boolean;
  events: (keyof DocumentEventMap)[];
  fn: () => void;
  intervalTime: number;
}) {
  const idle = useIdle(idleTime, {
    events: [...DEFAULT_EVENTS, ...events],
    initialState: initialState,
  });

  const interval = useInterval(fn, intervalTime);

  return { idle, interval };
}
