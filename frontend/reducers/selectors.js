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

export const selectMessagethreads = state => {
  let result = [];
  for (let id in state.messagethreads){
    if (state.messagethreads[id].initiator_id === state.session.currentUser.id || state.messagethreads[id].receiver_id === state.session.currentUser.id){
      result.push(state.messagethreads[id]);
    }
  }
  return result;
};

export const selectMessages = state => {
  let result = [];
  for (let id in state.messages){
    if (state.messages[id].message_thread_id===state.ui.currentMessagethread){
      result.push(state.messages[id]);
    }
  }
  return result;
}
