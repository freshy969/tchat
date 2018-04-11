export const fetchMessagethreads = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messagethreads'
  })
);

export const fetchMessagethread = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/messagethreads/${id}`
  })
);

export const fetchMessage = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/messages/${id}`
  })
)
