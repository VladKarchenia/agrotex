import React from "react";

import {
  GridContainer,
  Grid,
  GridItem,
  Flex,
  Box,
  Stack,
  Title,
  Spacer,
} from "@/shared/components";
import { ParallaxText } from "./ParallaxText";

const maufacturers = [
  [
    {
      alt: "Bla",
      href: "/",
    },
    {
      alt: "Bla",
      href: "/",
    },
    {
      alt: "Bla",
      href: "/",
    },
  ],
  [
    {
      alt: "Bla",
      href: "/",
    },
    {
      alt: "Bla",
      href: "/",
    },
    {
      alt: "Bla",
      href: "/",
    },
  ],
  [
    {
      alt: "Bla",
      href: "/",
    },
    {
      alt: "Bla",
      href: "/",
    },
    {
      alt: "Bla",
      href: "/",
    },
  ],
];

export const Manufacturers = () => {
  return (
    <GridContainer css={{ overflow: "hidden" }}>
      <Grid
        columns={{ "@initial": 6, "@sm": 24 }}
        justify="center"
        css={{ position: "relative" }}
      >
        <GridItem column={{ "@initial": "1 / -1", "@sm": "2 / -2" }}>
          <Stack space={8}>
            <Title as="h2" scale={5} editorial>
              Производители
            </Title>
          </Stack>
          <Spacer size={24} />
          <Stack space={16}>
            {maufacturers.map((items, index) => (
              <ParallaxText key={index} baseVelocity={-5}>
                <Flex
                  justify="between"
                  css={{
                    gap: 16,
                    paddingBottom: "$16",
                    paddingRight: "$16",
                    transform: `translateX(${index * 200}px)`,
                    backgroundColor: "$brand-green-darker",
                    marginRight: "$16",
                  }}
                >
                  {items.map((item, index) => (
                    <Box
                      key={index}
                      css={{
                        width: 200,
                        height: 40,
                        backgroundColor: "$brand-blue-darker",
                      }}
                    >
                      {/* <Picture src={item.href} alt={item.alt} /> */}
                    </Box>
                  ))}
                </Flex>
              </ParallaxText>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </GridContainer>
  );
};
