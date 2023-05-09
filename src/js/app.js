import modalLogin from './modal/modalLogin';

const board = document.querySelector('.board');
// const URL = 'http://localhost:9020';
const URL = 'https://ws-backend-jgax.onrender.com/';

modalLogin(board, URL);
