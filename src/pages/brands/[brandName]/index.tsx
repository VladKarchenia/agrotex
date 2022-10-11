import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BrandIndex = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const brandName = query.brandName as string;

  return <div>{brandName}</div>;
};

export default BrandIndex;
