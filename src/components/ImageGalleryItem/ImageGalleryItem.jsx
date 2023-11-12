import { Item, Img } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ModalComponent } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    document.body.style.overflow = 'auto';
  };

  render() {
    const { isModalOpen } = this.state;
    const { item } = this.props;

    return (
      <Item onClick={this.openModal}>
        <Img src={item.webformatURL} alt={item.tags} />
        <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          item={item}
        />
      </Item>
    );
  }
}
