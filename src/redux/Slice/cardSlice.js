import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
        isOpen: false,
      },
    ],
    score: 0,
    isOver: 0,
  },
  reducers: {},
});

export default cardSlice.reducer;
