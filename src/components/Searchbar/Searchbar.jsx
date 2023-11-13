import { Header, Form, Input, SubBtn, SubBtnIcon } from './Searchbar.styled';
import svg from '../../img/sprite.svg';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.elements.search.value);
        }}
      >
        <SubBtn type="submit">
          <SubBtnIcon width={20} height={20}>
            <use href={`${svg}#search`}></use>
          </SubBtnIcon>
        </SubBtn>
        <Input
          type="text"
          name="search"
          placeholder="Search images and photos"
        ></Input>
      </Form>
    </Header>
  );
};
