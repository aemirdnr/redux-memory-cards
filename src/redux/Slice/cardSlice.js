import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
        isOpen: false,
        isMatched: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
        isOpen: false,
        isMatched: false,
      },
    ],
    score: 0,
    isOver: false,
  },
  reducers: {
    start: (state) => {
      state.score = 0;
      state.items = state.items.sort(() => Math.random() - 0.5);
    },
    cardCheck: (state, action) => {
      const cards = state.items;
      const card = cards.find((card) => card.id === action.payload);
      card.isOpen = true;
    },
  },
});

export const { cardCheck, start } = cardSlice.actions;

export default cardSlice.reducer;
