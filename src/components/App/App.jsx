import { Component } from 'react';
import ApiSearchImg from 'services/getImg';
import Searchbar from '../Searchbar/Searchbar';
import { AppWrapper } from './AppStyled';
import Notiflix from 'notiflix';
import { ImageGallery } from 'components/ImageGallery/Imagegallery';
import { Btn } from 'components/Button/btn';
import { Loader } from 'components/Loader/Loader';

const apiSearchImg = new ApiSearchImg();

class App extends Component {
  state = {
    searchValue: '',
    images: [],
    isLoading: false,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.setState({ isLoading: true });
      apiSearchImg.resetPage();
      apiSearchImg
        .getImg(this.state.searchValue)
        .then(data => {
          if (data.hits.length === 0) {
            return Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.',
              { width: '400px', fontSize: '20px' }
            );
          }
          this.galleryLengthCheck(data);
          this.setState({
            images: data.hits,
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };

  galleryLengthCheck = data => {
    const galleryLength = data.hits.length < 12;
    if (galleryLength) {
      this.setState({ showBtn: false });
      Notiflix.Notify.info('These are all images per your request', {
        width: '400px',
        fontSize: '20px',
      });
    } else {
      this.setState({ showBtn: true });
    }
  };

  onClick = async () => {
    try {
      await apiSearchImg.incrementPage();
      const data = await apiSearchImg.getImg(this.state.searchValue);
      this.galleryLengthCheck(data);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { showBtn, images, isLoading } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery galleryArr={images} />
        {isLoading && <Loader />}
        {showBtn && <Btn onClick={this.onClick} />}
      </AppWrapper>
    );
  }
}

export default App;
