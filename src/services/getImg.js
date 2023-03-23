import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = 'key=33457250-a9616b28919c0d18acf47fde1';

export default class ApiSearchImg {
  constructor() {
    this.page = 1;
  }

  async getImg(searchQuery) {
    try {
      const response = await axios.get(
        `${URL}?q=${searchQuery}&page=${this.page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
