import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "@/about/gql/characters";
import { STextBlock, STextCopy } from "./TextBlock.styles";
import { Box } from "@/shared/components";

export const TextBlock = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  if (!loading && !data) {
    return null;
  }

  if (error) {
    return <Box>Error</Box>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <STextBlock hasShadow>
      <STextCopy>first line</STextCopy>
      <STextCopy>second line</STextCopy>
    </STextBlock>
  );
};
