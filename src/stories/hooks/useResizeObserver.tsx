import { useRef, useEffect, useState } from "react";

/**
 * Allows to constantly obtain the height and width of a component
 */
export default <T extends HTMLElement>() => {
  // useRef allows us to "store" the div in a constant, 
  // and to access it via observedDiv.current
  const ref = useRef<T>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleResized = () => {
    if(!!ref.current && ref.current.offsetWidth !== width) {
      setWidth(ref.current!.offsetWidth - 2); 
    }
    if(!!ref.current && ref.current.offsetHeight !== height) {
      setHeight(ref.current!.offsetHeight);
    }
  }
  
  // we also instantiate the resizeObserver and we pass
  // the event handler to the constructor
  const resizeObserver = new ResizeObserver(handleResized);

  useEffect(() => {
    // the code in useEffect will be executed when the component
    // has mounted, so we are certain ref.current will contain
    // the div we want to observe
    resizeObserver.observe(ref.current!);


    // if useEffect returns a function, it is called right before the
    // component unmounts, so it is the right place to stop observing
    // the div
    return function cleanup() {
      resizeObserver.disconnect();
    }
  }, [ref.current])

  return { ref, width, height };
}