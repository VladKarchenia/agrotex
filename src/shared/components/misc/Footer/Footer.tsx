import * as React from "react";
import getYear from "date-fns/getYear";
import { atomicClassNames } from "@/utils";
import {
  Box,
  Grid,
  GridContainer,
  GridItem,
  Spacer,
} from "@/shared/components";
import { useTranslation } from "next-i18next";

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={atomicClassNames({ backgroundColor: "neutrals-0" })}
      data-nav="footer"
    >
      <Spacer size={{ "@initial": 48, "@md": 64 }} />
      <GridContainer
        fullBleed={{ "@initial": true, "@md": false }}
        css={{ maxWidth: "1400px" }}
      >
        <Box css={{ paddingX: "$16", "@md": "$40" }}>
          <Grid
            columns={{ "@initial": 1, "@md": 4 }}
            columnGap={{ "@initial": 0, "@md": 16 }}
            rowGap={{ "@initial": 16, "@md": 0 }}
          >
            {["col 1", "col 2", "col 3", "col 4"].map((item) => (
              <GridItem
                css={{
                  backgroundColor: "$brand-blue-lighter",
                  justifySelf: "center",
                  "@md": { justifySelf: "auto" },
                }}
                key={item}
              >
                {item}
              </GridItem>
            ))}
          </Grid>
          <Spacer size={24} />
          <Grid
            columns={{ "@initial": 0, "@md": 2 }}
            columnGap={{ "@initial": 0, "@md": 16 }}
            rowGap={{ "@initial": 16, "@md": 0 }}
          >
            <GridItem
              css={{
                backgroundColor: "$brand-blue-lighter",
                justifySelf: "center",
                "@md": { justifySelf: "auto" },
              }}
            >
              {t("app:footer.copyright", { year: getYear(Date.now()) })}
            </GridItem>
            <GridItem
              css={{
                backgroundColor: "$brand-blue-lighter",
                justifySelf: "center",
                "@md": { justifySelf: "end" },
              }}
            >
              Social media links
            </GridItem>
          </Grid>
        </Box>
      </GridContainer>
      <Spacer size={{ "@initial": 48, "@md": 64 }} />
    </footer>
  );
};

Footer.displayName = "Footer";
