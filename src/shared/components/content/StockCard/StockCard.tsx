import React from "react";
import TextTruncate from "react-text-truncate";

import { mediaQueries } from "@/config";

import {
  Picture,
  IPictureDimensions,
  Title,
  Copy,
  Spacer,
} from "@/shared/components";

import {
  SStockCard,
  SStockCardLink,
  SStockCardImageContainer,
  SStockCardImage,
  SStockCardBody,
} from "./StockCard.styles";

const imageDimensions: IPictureDimensions[] = [
  {
    mediaQuery: mediaQueries.md,
    width: 320,
    extraParams: {
      fit: "crop",
    },
  },
  {
    mediaQuery: mediaQueries.sm,
    width: 360,
    extraParams: {
      fit: "crop",
    },
  },
  {
    mediaQuery: "",
    width: 240,
    extraParams: {
      fit: "crop",
    },
  },
];

export interface IStockCardProps {
  className?: string;
  name: string;
  location?: string;
  cityName: string;
  image: string;
  url?: string;
  openInSameTab?: boolean;
  onClick?: () => void;
  dataTrackId?: string;
}

export interface IStockCardState {
  isBrowser: boolean;
}

const defaultImageSize = 768;

export const StockCard: React.FC<IStockCardProps> = ({
  cityName,
  className,
  dataTrackId,
  image,
  location,
  name,
  onClick,
  openInSameTab,
  url,
}) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const linkProps = {
    ref: linkRef,
    href: url,
    target: openInSameTab ? "" : "_blank",
    onClick,
    "data-track-id": dataTrackId,
  };

  return (
    <SStockCard data-plum-ui="listing-card" className={className}>
      <SStockCardLink {...linkProps}>
        <SStockCardImageContainer>
          <SStockCardImage>
            {image ? (
              <Picture
                alt={name}
                src={image}
                defaultImageRatio="4:5"
                defaultImageSize={defaultImageSize}
                dimensions={imageDimensions}
                lazyload
              />
            ) : null}
          </SStockCardImage>
        </SStockCardImageContainer>

        <SStockCardBody>
          <div>
            {location && (
              <>
                <Copy intent="cta" color="neutrals-7" uppercase truncate>
                  {location}
                </Copy>
                <Spacer size={8} />
              </>
            )}
            <Title as="h3" scale={6} color="neutrals-9" thin>
              <TextTruncate line={2} text={`${name}, ${cityName}`} />
            </Title>
          </div>
        </SStockCardBody>
      </SStockCardLink>
    </SStockCard>
  );
};
