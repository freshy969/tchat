export const fetchUser = (id) =>(
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    async: false,
  })
);

export const fetchUsers = () =>(
  $.ajax({
    method: 'GET',
    url: '/api/users/'
  })
);

//
