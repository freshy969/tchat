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
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: {message}
  })
);

export const postMessageThread = (messagethread) => (
  $.ajax({
    method: 'POST',
    url: 'api/messagethreads',
    data: {messagethread}
  })
)
