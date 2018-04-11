export const fetchMessagethreads = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messagethreads'
  })
);

// export const fetchMessagethread = (id) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/messagethreads/${id}`
//   })
// );

export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
);

export const fetchMessage = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/messages/${id}`
  })
);

export const postMessage = (message) => (
  $.ajaz({
    method: 'POST',
    url: 'api/messages',
    data: {message}
  })
)
