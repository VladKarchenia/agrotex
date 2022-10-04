import React from "react";

import { Grid, StockCard, GridItem } from "@/shared/components";

export interface IStockCard {
  id: number;
  name: string;
  cityName: string;
  neighbourhood: string;
  image: string;
  price: number;
  url: string;
}

export interface IStockMultiCardProps {
  items: IStockCard[];
}

export const StockMultiCard: React.FC<IStockMultiCardProps> = ({ items }) => {
  return (
    <Grid
      columns={{ "@initial": 1, "@sm": 4 }}
      columnGap={{ "@initial": 0, "@sm": 8 }}
      rows={{ "@initial": 1, "@sm": 2 }}
      rowGap={{ "@initial": 0, "@sm": 8 }}
    >
      {items.map((item) => (
        <GridItem
          key={item.id}
          css={{
            height: "260px",
            overflow: "hidden",
          }}
        >
          <StockCard
            key={item.id}
            name={item.name}
            cityName={item.cityName}
            image={item.image}
            // url={item.url}
            // openInSameTab={false}
            // onClick={() => {
            //   itemCardOnClick(item.Id);
            // }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
