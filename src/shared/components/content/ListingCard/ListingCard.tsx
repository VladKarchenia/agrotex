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
  SListingCard,
  SListingCardLink,
  SListingCardImageContainer,
  SListingCardImage,
  SListingCardBody,
} from "./ListingCard.styles";

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

export interface IListingCardProps {
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

export interface IListingCardState {
  isBrowser: boolean;
}

const defaultImageSize = 768;

export const ListingCard: React.FC<IListingCardProps> = ({
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
    <SListingCard data-plum-ui="listing-card" className={className}>
      <SListingCardLink {...linkProps}>
        <SListingCardImageContainer>
          <SListingCardImage>
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
          </SListingCardImage>
        </SListingCardImageContainer>

        <SListingCardBody>
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
        </SListingCardBody>
      </SListingCardLink>
    </SListingCard>
  );
};
