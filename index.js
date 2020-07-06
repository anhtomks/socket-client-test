const io = require('socket.io-client');

const thien_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoid2VvdGlnajk5M2dzZSIsImFkbWluTmFtZSI6IlRoaWVuIiwicm9vbVN0cmluZ0lkIjoidjRkQUVqNWlXbHBkUnRtIiwiaWF0IjoxNTkzNTkyODI2LCJleHAiOjE1OTYxODQ4MjZ9.3LddXCwM6lahKs6Njkulfxb9wGxrsQki2EssaDjMu_E';
const admin_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlVXNlciI6MSwiaWF0IjoxNTkxNjY2NjY2LCJleHAiOjE1OTQyNTg2NjZ9.c_wynke4I7we5gZp0LdSH2lVT44qQFy_jiG0T-bxEWI';
const socket = io(`http://localhost:6000/notify?token=${thien_token}`);
// const socket = io(`https://api.takunomi.amela.vn/notify?token=${thien_token}`);
console.log('============== Nodemon watching file change ==============');

const data = {
  id: 15
}

socket.on('connect', function () {
  // socket.emit('user-join-room');
  console.log('here');
});

// socket.emit('user-join-room', data);

// socket.on('admin-actived', function(data) {
//   console.log(data);
// });

// socket.on('invite-join-room', function(data) {
//   console.log('Requested');
//   console.log(data);
// });


socket.on('invite-merge-room', function(data) {
  console.log('Requested');
  console.log(data);
})


socket.on('invalid-condition-merge', function(data) {
  console.log('Invalid');
  console.log(data);
})

// socket.on('event', function(data){});
// socket.on('disconnect', function(){});
