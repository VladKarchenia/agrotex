import * as React from "react";
import getYear from "date-fns/getYear";
import { atomicClassNames } from "@/utils";
import {
  Box,
  Copy,
  Grid,
  GridContainer,
  GridItem,
  Link,
  Spacer,
  Stack,
  Title,
} from "@/shared/components";
import { useTranslation } from "next-i18next";
import sections, { IFooterNavSection } from "./data";

const FooterSection = ({ section }: { section: IFooterNavSection[] }) => {
  const { t } = useTranslation();

  return (
    <Stack space={32}>
      {section.map((item) => (
        <Box key={item.id}>
          <Title as="h4" scale={8} color={"brand-yellow-primary"}>
            {t(item.title)}
          </Title>
          <Spacer size={8} />
          <Stack space={8}>
            {item.links.map((link) => (
              <Link
                href={t(link.href)}
                key={link.id}
                color={"brand-yellow-light"}
                scale={8}
              >
                {t(link.name)}
              </Link>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={atomicClassNames({ backgroundColor: "brand-green-darkest" })}
      data-nav="footer"
    >
      <Spacer size={{ "@initial": 48, "@md": 64 }} />
      <GridContainer
        fullBleed={{ "@initial": true, "@md": false }}
        css={{ maxWidth: "1400px" }}
      >
        <Box css={{ paddingX: "$16", "@md": "$40" }}>
          <Grid
            columns={{ "@initial": 6, "@md": 12 }}
            columnGap={{ "@initial": 0, "@md": 16 }}
            rows={{ "@initial": 1 }}
            rowGap={{ "@initial": 32, "@md": 0 }}
          >
            <GridItem column={{ "@initial": "1 / -1", "@md": "1 / 5" }}>
              <FooterSection section={sections.contact} />
            </GridItem>
            <GridItem column={{ "@initial": "1 / -1", "@md": "5 / 9" }}>
              <FooterSection section={sections.info} />
            </GridItem>
            <GridItem column={{ "@initial": "1 / -1", "@md": "9 / -1" }}>
              <FooterSection section={sections.company} />
            </GridItem>
          </Grid>
          <Spacer size={24} />
          <Grid
            columns={{ "@initial": 0, "@md": 2 }}
            columnGap={{ "@initial": 0, "@md": 16 }}
            rowGap={{ "@initial": 16, "@md": 0 }}
          >
            <GridItem
              css={{
                justifySelf: "center",
                "@md": { justifySelf: "auto" },
              }}
            >
              <Copy color={"brand-yellow-primary"} scale={9}>
                {t("app:footer.copyright", { year: getYear(Date.now()) })}
              </Copy>
            </GridItem>
            {/* <GridItem
              css={{
                justifySelf: "center",
                "@md": { justifySelf: "end" },
              }}
            >
              Social media links
            </GridItem> */}
          </Grid>
        </Box>
      </GridContainer>
      <Spacer size={48} />
    </footer>
  );
};

Footer.displayName = "Footer";
