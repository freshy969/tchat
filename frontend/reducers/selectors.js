import values from 'lodash/values';

// export const selectUsers = state => values(state.users);

// fisher-yates shuffle
function shuffle (array) {
  let i = 0;
  let j = 0
  let temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export const selectUsers = state => {
  let result = [];
  for (let id in state.users){
    if (state.users[id].id !== state.session.currentUser.id){
      if (state.users[id].city === state.session.currentUser.city){
        result.push(state.users[id]);
      }
    }
  }
  shuffle(result);
  return result;
};
