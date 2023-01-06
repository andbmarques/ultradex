import * as Styled from "./style";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Pagination = ({
  page,
  totalPages,
  onLeftClick,
  onRightClick,
  itemsPerPage,
  setItemsPerPage,
}) => {
  return (
    <Styled.Container>
      <Styled.ChangeLimitContainer>
        <Menu menuButton={<Styled.MenuBtn>Limit</Styled.MenuBtn>} transition>
          <MenuItem onClick={() => setItemsPerPage(25)}>25</MenuItem>
          <MenuItem onClick={() => setItemsPerPage(30)}>30</MenuItem>
          <MenuItem onClick={() => setItemsPerPage(50)}>50</MenuItem>
          <MenuItem onClick={() => setItemsPerPage(100)}>100</MenuItem>
        </Menu>
      </Styled.ChangeLimitContainer>
      <Styled.PaginationContainer>
        <Styled.BackButton onClick={onLeftClick} />
        <Styled.PagesContainer>
          {page} / {totalPages}
        </Styled.PagesContainer>
        <Styled.NextButton onClick={onRightClick} />
      </Styled.PaginationContainer>
    </Styled.Container>
  );
};

export default Pagination;
