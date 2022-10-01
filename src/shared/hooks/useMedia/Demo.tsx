import React from "react";
import { useMedia } from "./useMedia";
import { Breakpoint, mediaQueries } from "@/config";
import { Copy, Global, Spacer } from "@/shared/components";

interface IWrapComponentProps {
  breakpoint: Breakpoint;
}

const DemoComponent = ({ breakpoint }: IWrapComponentProps) => {
  const isUserBreakpoint = useMedia([mediaQueries[breakpoint]], [true], false);

  const maxBreakpoint = useMedia(
    [
      mediaQueries["max-xxs"],
      mediaQueries["max-xs"],
      mediaQueries["max-sm"],
      mediaQueries["max-md"],
      mediaQueries["max-lg"],
      mediaQueries["max-xl"],
      mediaQueries["max-xxl"],
    ],
    ["max-xxs", "max-xs", "max-sm", "max-md", "max-lg", "max-xl", "max-xxl"],
    null
  );

  const minBreakpoint = useMedia(
    [
      mediaQueries["xxl"],
      mediaQueries["xl"],
      mediaQueries["lg"],
      mediaQueries["md"],
      mediaQueries["sm"],
      mediaQueries["xs"],
      mediaQueries["xxs"],
    ],
    ["xxl", "xl", "lg", "md", "sm", "xs", "xxs"],
    null
  );
  return (
    <Global>
      {isUserBreakpoint && <h1>Is shown from breakpoint: {breakpoint} </h1>}
      <Copy scale={7} modern color="system-black">
        Resize viewport to see results
      </Copy>
      <Spacer size={8} />
      <ul>
        <li>Current Breakpoint: {minBreakpoint}</li>
        <li>Max-width Breakpoint: {maxBreakpoint}</li>
      </ul>
    </Global>
  );
};

export const WrapComponent = ({ breakpoint }: IWrapComponentProps) => {
  return <DemoComponent breakpoint={breakpoint} key={breakpoint} />;
};
