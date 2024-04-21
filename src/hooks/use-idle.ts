import { useEffect, useRef, useState } from "react";

const DEFAULT_EVENTS: (keyof DocumentEventMap)[] = [
  "keypress",
  "mousemove",
  "touchmove",
  "click",
  "scroll",
];
const DEFAULT_OPTIONS = {
  events: DEFAULT_EVENTS,
  initialState: true,
};

export function useIdle(
  timeout: number,
  options?: Partial<{
    events: (keyof DocumentEventMap)[];
    initialState: boolean;
  }>
) {
  const { events, initialState } = { ...DEFAULT_OPTIONS, ...options };
  const [idle, setIdle] = useState<boolean>(initialState);
  const timer = useRef<number>();

  useEffect(() => {
    const handleEvents = (event: any) => {
      setIdle(false);

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        setIdle(true);
      }, timeout);
    };

    events.forEach((event) =>
      document.addEventListener(event, () => handleEvents(event))
    );

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, () => handleEvents(event))
      );
    };
  }, [timeout]);

  useEffect(() => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      setIdle(true);
    }, timeout);
  }, []);

  return idle;
}
