import usePrevious from "hooks/usePrevious";
import { Input } from "native-base";
import React, { memo, useLayoutEffect, useRef } from "react";

const SingleInput = ({ focus, autoFocus, ...rest }) => {
  const inputRef = useRef(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <Input mx="3" placeholder="Input" />
    // <input
    //   className="w-max mr-2 p-5 text-sm-4 text-center text-gray-900 border border-gray-700 rounded bg-shade-FG"
    //   ref={inputRef}
    //   {...rest}
    // />
  );
};

const SingleOTPInput = memo(SingleInput);
export default SingleOTPInput;
