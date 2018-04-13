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
      // debugger;
      result.push(state.messagethreads[id]);
    }
  }
  if(result.length<=1){
    return result;
  }
  const sortedThreads = result.sort( (a, b) => {
    if (a["last_message_sent"] < b["last_message_sent"]) {
      return 1;
    } else if (a["last_message_sent"] > b["last_message_sent"]) {
      return -1;
    }
    return 0;
  });
  // debugger;
  // console.log(result);
  // let unfinished = true;
  // while(unfinished && result!==[]){
  //   debugger;
  //   unfinished = false;
  //   let counter = 0;
  //   while (counter < result.length-1){
  //     console.log(result);
  //     if (result[counter].last_message_sent<result[counter +1].messages.last_message_sent){
  //       let temp = result[counter];
  //       result[counter] = result[counter+1];
  //       result[counter+1] = temp;
  //       unfinished=true;
  //     }
  //     counter+=1;
  //   }
  // }
  // console.log(result);
  return sortedThreads;
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
