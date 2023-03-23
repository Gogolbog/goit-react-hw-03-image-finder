import { Component } from 'react';
import ApiSearchImg from 'services/getImg';
import Searchbar from '../Searchbar/Searchbar';
import { AppWrapper } from './AppStyled';
import Notiflix from 'notiflix';

const apiSearchImg = new ApiSearchImg();

class App extends Component {
  state = {
    searchValue: '',
    images: [],
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
    }
    apiSearchImg
      .getImg(this.state.searchValue)
      .then(data => {
        if (data.hits.length === 0) {
          return Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        this.setState({
          images: data.hits,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        console.log(this.state.images);
      });
  }

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSubmit} />
      </AppWrapper>
    );
  }
}

export default App;
