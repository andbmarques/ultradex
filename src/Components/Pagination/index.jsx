import * as Styled from "./style";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useContext } from "react";
import SearchContext from "../../Contexts/SearchContext";

const Pagination = ({
  page,
  totalPages,
  onLeftClick,
  onRightClick,
  setItemsPerPage,
  isBottom,
}) => {
  const { searched } = useContext(SearchContext);

  return (
    <Styled.Container>
      {!isBottom && (
        <>
          {!searched && (
            <Styled.ChangeLimitContainer>
              <Menu
                menuButton={<Styled.MenuBtn>Limit</Styled.MenuBtn>}
                transition
              >
                <MenuItem onClick={() => setItemsPerPage(25)}>25</MenuItem>
                <MenuItem onClick={() => setItemsPerPage(30)}>30</MenuItem>
                <MenuItem onClick={() => setItemsPerPage(50)}>50</MenuItem>
                <MenuItem onClick={() => setItemsPerPage(100)}>100</MenuItem>
                <MenuItem onClick={() => setItemsPerPage(200)}>200</MenuItem>
              </Menu>
            </Styled.ChangeLimitContainer>
          )}
        </>
      )}
      {!searched && (
        <Styled.PaginationContainer>
          <Styled.BackButton onClick={onLeftClick} />
          <Styled.PagesContainer>
            {page} / {totalPages}
          </Styled.PagesContainer>
          <Styled.NextButton onClick={onRightClick} />
        </Styled.PaginationContainer>
      )}
    </Styled.Container>
  );
};

export default Pagination;
