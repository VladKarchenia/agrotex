import React, { useRef } from "react";

import { AspectRatio, Redacted, Spacer } from "@/shared/components";

import { SStockMultiCard, SStockMultiCardBody } from "./StockMultiCard.styles";

export interface IStockMultiCardPlaceholderProps {
  className?: string;
}

export const StockMultiCardPlaceholder: React.FC<
  IStockMultiCardPlaceholderProps
> = () => {
  const isTwoLines = useRef<boolean>(Math.random() < 0.5);

  return (
    <SStockMultiCard data-plum-ui="listing-card-placeholder">
      <AspectRatio ratio="4:5">
        <Redacted height="100%" width="100%" animated />
      </AspectRatio>

      <SStockMultiCardBody>
        <Redacted height="$16" width={140} animated />
        <Spacer size={8} />
        <Redacted height="$24" width={200} animated css={{ marginTop: "$4" }} />
        {isTwoLines.current && (
          <Redacted
            height="$24"
            width={100}
            animated
            css={{ marginTop: "$4" }}
          />
        )}
      </SStockMultiCardBody>
    </SStockMultiCard>
  );
};
