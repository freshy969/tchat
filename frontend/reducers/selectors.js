import values from 'lodash/values';

// export const selectUsers = state => values(state.users);

export const selectUsers = state => {
  let result = [];
  for (let id in state.users){
    if (state.users[id].id !== state.session.currentUser.id){
      if (state.users[id].city === state.session.currentUser.city){
        result.push(state.users[id]);
      }
    }
  }
  return result;
};
