import React, { Component } from 'react';
import { findImages } from '../assets/api/pixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { AppStyled } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loader: false,
    error: false,
    hasMore: false,
  };

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        if (prevState.query !== this.state.query) {
          this.setState(() => ({
            images: [],
            page: 1,
          }));
        }

        this.setState(() => ({
          loader: true,
          error: false,
          hasMore: false,
        }));

        let images = await findImages(query, page);

        if (images.hits.length !== 0) {
          this.setState(() => ({
            images: [...this.state.images, ...images.hits],
            hasMore: true,
          }));
        } else {
          this.setState(() => ({
            hasMore: false,
          }));
        }
      } catch (error) {
        this.setState(() => ({
          error: true,
        }));
      } finally {
        this.setState(() => ({
          loader: false,
        }));
      }
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;
    this.setState(() => ({
      query: search,
    }));
  };

  loadMore = () => {
    this.setState(() => ({
      page: this.state.page + 1,
    }));
  };

  render() {
    const { images, loader, hasMore } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length !== 0 && <ImageGallery list={images} />}
        {loader && <Loader />}
        {hasMore && <Button loadMore={this.loadMore} />}
      </AppStyled>
    );
  }
}

export default App;
