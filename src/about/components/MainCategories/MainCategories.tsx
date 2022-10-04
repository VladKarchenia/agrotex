import React from "react";

import {
  GridContainer,
  Grid,
  GridItem,
  Flex,
  Stack,
  Title,
  Spacer,
} from "@/shared/components";
import { CategoryContainer } from "../CategoryContainer";

export const MainCategories = () => {
  return (
    <GridContainer>
      <Grid
        columns={{ "@initial": 6, "@sm": 24 }}
        justify="center"
        css={{ position: "relative" }}
      >
        <GridItem column={{ "@initial": "1 / -1", "@sm": "2 / -2" }}>
          <Stack space={8}>
            <Title as="h2" scale={5} editorial>
              Основные категории
            </Title>
          </Stack>
          <Spacer size={24} />
          <Flex
            css={{ gap: "$16" }}
            direction={{ "@initial": "column", "@sm": "row" }}
          >
            <CategoryContainer title={"Животноводство"} />
            <CategoryContainer title={"Электроинструмент"} />
          </Flex>
        </GridItem>
      </Grid>
    </GridContainer>
  );
};
