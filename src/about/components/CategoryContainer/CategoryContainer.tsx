import { SCategoryContainer, SCategoryTitle } from "./CategoryContainer.styles";

export const CategoryContainer = ({ title }: { title: string }) => {
  return (
    <SCategoryContainer>
      <SCategoryTitle color={"neutrals-0"} scale={4} bold>
        {title}
      </SCategoryTitle>
    </SCategoryContainer>
  );
};
