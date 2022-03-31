import { useMemo, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import breakpoints from 'styles/breakpoint';

type Props = {
  sizes: string[];
};

const useMatchBreakPoint = ({ sizes = [] }: Props) => {
  const { width } = useWindowDimensions();

  const sizeRef = useRef<string[]>([]);
  sizeRef.current = sizes;

  const matchedBreakpoint = useMemo(
    () => sizeRef.current.find((size) => width < breakpoints[size]),
    [width],
  );

  return {
    match: matchedBreakpoint || sizes[sizes.length - 1],
  };
};

export default useMatchBreakPoint;
