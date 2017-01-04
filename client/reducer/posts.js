

 function posts(state = [], action) {
   console.log("The post will change");
   switch(action.type) {
     case 'INCREMENT_LIKES':
      console.log('NCREMENT LIKES!!!')
      const i = action.index;
      return [
        ...state.slice(0, i),//before the one we update
        {...state[i], likes: state[i].likes + 10},
        ...state.slice(i + 1)
      ]
     default:
      return state
   }
   return state;
 }

 export default posts;
