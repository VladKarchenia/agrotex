import * as React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Copy,
  Drawer,
  Spacer,
  Stack,
  useDrawer,
} from "@/shared/components";
import { AccountButton } from "./AccountButton";
import { useTranslation } from "next-i18next";
import { atomicClassNames, ComponentProps } from "@/utils";
import { SNavLink } from "./NavLink.styles";

export const GUEST_TRIPS = "/guest/trips";
export const GUEST_INBOX = "/guest/inbox";
export const WISHLIST = "/about";

export const HOST_BOOKINGS = "/host/bookings";
export const HOST_INBOX = "/host/dashboard/inbox";
export const HOST_EARNINGS = "/host/dashboard/earnings";
export const HOST_HOMES = "/host/dashboard/homes";

interface ITravellingNavProps {
  role?: "guest" | "host";
  currentPathname: string;
}

enum AccordionName {
  Hosting = "Hosting",
  Travelling = "Travelling",
}

const HostViewAccordionHeader: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <AccordionHeader scale={4} thin>
    <AccordionButton
      size="large"
      compact
      css={{
        hover: {
          backgroundColor: "$system-white",
        },
      }}
    >
      {children}
    </AccordionButton>
  </AccordionHeader>
);

export interface INavItem {
  href: string;
  text: string;
}

interface INavLink extends ComponentProps<typeof SNavLink> {
  selected?: boolean;
}

export const HostingNav = ({
  currentPathname = "",
}: {
  currentPathname: string;
}) => {
  const { t } = useTranslation();

  const items: INavItem[] = [
    {
      href: HOST_BOOKINGS,
      text: t("common:nav.loginDrawer.loggedIn.bookings"),
    },
    {
      href: HOST_INBOX,
      text: t("common:nav.loginDrawer.loggedIn.inbox"),
    },
    {
      href: HOST_HOMES,
      text: t("common:nav.loginDrawer.loggedIn.listings"),
    },
    {
      href: HOST_EARNINGS,
      text: t("common:nav.loginDrawer.loggedIn.earnings"),
    },
  ];

  const isActive = (pathname: string, href: string) => pathname === href;

  return (
    <Stack as="ul" space={12}>
      {items.map(({ href, text }) => (
        <NavLink
          key={href}
          href={href}
          selected={isActive(currentPathname, href)}
          role="host"
        >
          {text}
        </NavLink>
      ))}
    </Stack>
  );
};

export const TravellingNav = ({
  role = "guest",
  currentPathname = "",
}: ITravellingNavProps) => {
  const { t } = useTranslation();

  const items: INavItem[] = [
    {
      href: GUEST_TRIPS,
      text: t("common:nav.loginDrawer.loggedIn.trips"),
    },
    {
      href: GUEST_INBOX,
      text: t("common:nav.loginDrawer.loggedIn.inbox"),
    },
    {
      href: WISHLIST,
      text: t("common:nav.loginDrawer.loggedIn.wishlist"),
    },
  ];

  return (
    <Stack as="ul" space={12}>
      {items.map(({ href, text }) => (
        <NavLink
          key={href}
          href={href}
          selected={currentPathname === href}
          role={role}
        >
          {text}
        </NavLink>
      ))}
    </Stack>
  );
};

export const NavLink: React.FC<INavLink> = ({
  children,
  href,
  selected = false,
  role,
}) => (
  <SNavLink href={href} selected={selected} role={role}>
    <Copy
      as="span"
      scale={
        role === "guest"
          ? { "@initial": 6, "@md": 4 }
          : { "@initial": 6, "@md": 5 }
      }
      color="system-inherit"
      className={atomicClassNames({ display: "inline-block" })}
    >
      {children}
    </Copy>
  </SNavLink>
);

export interface IBurgerMenuProps {
  currentPathname?: string;
}
// export interface ILoginMenuProps {
//   config: ILoginConfig;
//   registerCountries?: ICountryOption[];
//   isTransparent?: boolean;
//   theme?: "default" | "cream" | "transparent";
//   /**
//    * @deprecated use `onLogin` and `onLogout` props
//    */
//   consumerCb?: (user: IUserInfo) => void;
//   onLogin?: (user: IUserInfo) => void;
//   onLogout?: () => void;
// }

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  currentPathname = "",
}) => {
  const { openDrawer, drawerProps } = useDrawer({
    direction: "right",
    variant: "secondary",
    hasSeparator: true,
  });

  return (
    <>
      <AccountButton
        // cdnUrl={config.cdnUrl}
        // isLoggedIn={isLoggedIn}
        // theme={theme}
        // isTransparent={isTransparent}
        onClick={() => openDrawer()}
        // userInfo={config.userInfo}
      />
      <Drawer
        {...drawerProps}
        topBarContent={
          // <LoggedInTopBar
          //     name={userInfo?.name}
          //     src={userInfo?.photoUrl}
          //     cdnUrl={config.cdnUrl}
          //   />
          <div>????????</div>
        }
      >
        <Accordion
          // defaultSelected={
          //   selectedAccordion
          //     ? [selectedAccordion.name]
          //     : [previouslySelectedPanel]
          // }
          css={{ borderTop: 0 }}
          // onSelectedChange={handleSelectedChange}
        >
          <AccordionItem value={AccordionName.Hosting}>
            <HostViewAccordionHeader>
              {AccordionName.Hosting}
            </HostViewAccordionHeader>
            <AccordionPanel contentCss={{ padding: 0 }}>
              <HostingNav currentPathname={currentPathname} />
              <Spacer size={32} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value={AccordionName.Travelling}>
            <HostViewAccordionHeader>
              {AccordionName.Travelling}
            </HostViewAccordionHeader>
            <AccordionPanel contentCss={{ padding: 0 }}>
              <TravellingNav currentPathname={currentPathname} role="host" />
              <Spacer size={32} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* <Stack space={16}>
            <Link href="/catalog">??????????????</Link>
            <Link href="/stocks">??????????</Link>
            <Link href="/brands">??????????????????????????</Link>
            <Link href="/faq">?????????? ???????????????????? ??????????????</Link>
          </Stack> */}
      </Drawer>
    </>
  );
};

BurgerMenu.displayName = "BurgerMenu";
