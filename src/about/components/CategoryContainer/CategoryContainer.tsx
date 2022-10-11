import { SCategoryContainer, SCategoryTitle } from "./CategoryContainer.styles";

export const CategoryContainer = ({
  title,
  grow,
}: {
  title: string;
  grow?: boolean;
}) => {
  return (
    <SCategoryContainer grow={grow}>
      <SCategoryTitle color={"neutrals-0"} scale={4} bold>
        {title}
      </SCategoryTitle>
    </SCategoryContainer>
  );
};
