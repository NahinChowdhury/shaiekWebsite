const FB = require('fb');
const fetch = require('node-fetch');


FB.options({version: 'v11.0'});
FB.setAccessToken('EAAODkNA2NxkBALHJpRtUYXAul4VVQ3utkSQ6WhX8dYj1HzEAvscDk2cZCSMONE5i6h72m6GLAW7cKwF9PWmFC4Sz8DUxF2L84Q5lDjfXXa1ZC7xjmzYYW5OpzySjvYSFje63JOn05HSmiKGfG6EYnqTtNI05HVDZACPb9iWAwZCnCVQfUE6V9EzIPPIyr3fBt6VunZCR99A6AwsoA7q1w');
 

// FB.api('/me/posts', function (res) {
//     if(!res || res.error) {
//      console.log(!res ? 'error occurred' : res.error);
//      return;
//     }
//     console.log(res);
//     console.log(res.name);
//   });
let result = "";



// FB.api(
//     '/1472271192991880',
//     'GET',
//     {"fields":"posts{full_picture,message}, name"},
//     function(response) {
//         // Insert your code here
//         // console.log(response)
//         result = response.posts.paging.next;
//         // console.dir(result);

// });

// for initial request
// https://graph.facebook.com/v11.0/1472271192991880?fields=posts.limit(3)&access_token=EAANZABqYBZBUMBABUmGpZAxhKZBItSlYBxnB7J1jwfRDZBuqtMeFO00vwZBmeCKYiZAVReq0piDTNhRsBCAQUBvCoMzq90NZAgfA9kLbhP4BzqqcwFa7a8q9fx8cB2BdF3FCXx9hn53Wf1ymwjl0HZAmh2AmiUJN0h6zganjFSicVA52N2Ya6pbPvCZCwGGfPz4ZBZC4Q3jYMH5YWgZDZD

// after getting next page token
// https://graph.facebook.com/v11.0/1472271192991880/posts?access_token=EAANZABqYBZBUMBABUmGpZAxhKZBItSlYBxnB7J1jwfRDZBuqtMeFO00vwZBmeCKYiZAVReq0piDTNhRsBCAQUBvCoMzq90NZAgfA9kLbhP4BzqqcwFa7a8q9fx8cB2BdF3FCXx9hn53Wf1ymwjl0HZAmh2AmiUJN0h6zganjFSicVA52N2Ya6pbPvCZCwGGfPz4ZBZC4Q3jYMH5YWgZDZD&limit=3&after=QVFIUmpJQUZAaNjJYejAxQVlrelBPSG5Sam9MTVlzWktDSGMzQ1VGajYwUC1USFdiQ29HRjZABOVIzbXNJSWNEa2tBazBVdHBCUmdaaUlRNnBhU0lHNE92ZAWpjd3ZA5LWFLVFlVaUNRVUdwOGEtSGV5WnV2b04xT1ZAyWXlmRmdqUEQwcVJv

fetch("https://graph.facebook.com/v11.0/513890198968428?fields=posts.limit(3)&access_token=EAANZABqYBZBUMBABUmGpZAxhKZBItSlYBxnB7J1jwfRDZBuqtMeFO00vwZBmeCKYiZAVReq0piDTNhRsBCAQUBvCoMzq90NZAgfA9kLbhP4BzqqcwFa7a8q9fx8cB2BdF3FCXx9hn53Wf1ymwjl0HZAmh2AmiUJN0h6zganjFSicVA52N2Ya6pbPvCZCwGGfPz4ZBZC4Q3jYMH5YWgZDZD")
.then((response) => response.json())
.then(res =>{
  result = res.posts
  console.log(res);
  console.log("Showing result")
  console.log(result);
})



// setTimeout(function() {
//   fetch(result)
//   .then((res)=>{
//     console.log(res);
//   })
// }, 1000)