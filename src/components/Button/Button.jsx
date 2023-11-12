import { ButtonStyled } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <ButtonStyled type="button" onClick={() => loadMore()}>
      Load more
    </ButtonStyled>
  );
};
