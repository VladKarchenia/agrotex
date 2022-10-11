import React from "react";
import {
  Indicator,
  Item,
  Link,
  Trigger,
} from "@radix-ui/react-navigation-menu";
import {
  SArrow,
  SChevron,
  SContentList,
  SIndicator,
  SLinkText,
  SLinkTitle,
  SListItem,
  SNavLink,
  SNavMenu,
  SNavMenuContent,
  SNavMenuList,
  STrigger,
  SViewport,
  SViewportPosition,
} from "./NavMenu.styles";

export const NavMenu: React.FC = () => {
  return (
    <SNavMenu>
      <SNavMenuList>
        <Item>
          <NavMenuTrigger>Learn</NavMenuTrigger>

          <SNavMenuContent>
            <SContentList layout="one">
              <ContentListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ContentListItem>

              <ContentListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ContentListItem>

              <ContentListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ContentListItem>
            </SContentList>
          </SNavMenuContent>
        </Item>

        <Item>
          <NavMenuTrigger>Learn</NavMenuTrigger>

          <SNavMenuContent>
            <SContentList layout="one">
              <ContentListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ContentListItem>

              <ContentListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ContentListItem>

              <ContentListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ContentListItem>
            </SContentList>
          </SNavMenuContent>
        </Item>

        <Item>
          <SNavLink href="https://github.com/radix-ui">Link</SNavLink>
        </Item>

        <NavMenuIndicator />
      </SNavMenuList>

      <SViewportPosition>
        <SViewport />
      </SViewportPosition>
    </SNavMenu>
  );
};

const NavMenuIndicator = React.forwardRef<
  React.ElementRef<typeof Indicator>,
  React.ComponentProps<typeof Indicator>
>((props, forwardedRef) => (
  <SIndicator {...props} ref={forwardedRef}>
    <SArrow />
  </SIndicator>
));

NavMenuIndicator.displayName = "NavMenuIndicator";

const NavMenuTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentProps<typeof Trigger>
>(({ children, ...props }, forwardedRef) => (
  <STrigger {...props} ref={forwardedRef}>
    {children}
    <SChevron aria-hidden />
  </STrigger>
));

NavMenuTrigger.displayName = "NavMenuTrigger";

const ContentListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentProps<typeof Link>
>(({ children, title, ...props }, forwardedRef) => (
  <SListItem>
    <SNavLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
        "&:hover": { backgroundColor: "$neutrals-5" },
      }}
    >
      <SLinkTitle>{title}</SLinkTitle>
      <SLinkText>{children}</SLinkText>
    </SNavLink>
  </SListItem>
));

ContentListItem.displayName = "ContentListItem";
