import values from 'lodash/values';

export const selectUsers = state => values(state.users);
