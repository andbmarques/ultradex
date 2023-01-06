import * as Styled from "./style";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <Styled.Container>
      <Styled.BackButton onClick={onLeftClick} />
      <Styled.PagesContainer>{page}... {totalPages}</Styled.PagesContainer>
      <Styled.NextButton onClick={onRightClick} />
    </Styled.Container>
  );
};

export default Pagination;
