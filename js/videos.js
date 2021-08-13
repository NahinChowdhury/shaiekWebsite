const line_yellow = document.querySelector('.line-yellow');
const top_btn = document.querySelector('.top-btn');


top_btn.addEventListener("click", ()=>{
    window.scrollTo(0,0);
})


const observerLine = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('line-animation');
      }
    });
});

observerLine.observe(line_yellow);



async function fetch_playlist_id(api_key){

    let id = 0;
    // console.log("before fetch")

    const shaiekID = "UCwNXRGwoxROY0OaC9uX_7uw";
    await fetch("https://www.googleapis.com/youtube/v3/channels?id="+shaiekID+"&key="+api_key+"&part=contentDetails")
    .then((response) => response.json()) //2
    .then((result) => {
        id = result.items[0].contentDetails.relatedPlaylists.uploads
        // console.log(id); //3
    });

    // console.log("after fetch")

    return id;
}

async function fetch_video_info(api_key, playlist_id, nextPageToken=null){

    // console.log("this one is in top of fetch video info: " + nextPageToken);
    const maxResults = 8;
    let videos = [];
    if(nextPageToken){

        // console.log("token is not null: " + nextPageToken);

        await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist_id}&key=${api_key}&part=snippet&pageToken=${nextPageToken}&maxResults=${maxResults}`)
        .then((response) => response.json()) //2
        .then((result) => {
            videos = result.items;
            nextPageToken = result.nextPageToken;
            if(nextPageToken === undefined){
                nextPageToken = 0;
                const moreVidsButton = document.querySelector("#retrieveButton");
                moreVidsButton.classList.add("disabled");
            }
            // console.log(result);
            // console.log(result.nextPageToken);
            
            // console.log(videos); //3
        });
    }
    else if(nextPageToken === 0){
        // alert("No more videos available");
        // do nothing as there's no more videos to load

        // disable button
        const moreVidsButton = document.querySelector("#retrieveButton");
        moreVidsButton.classList.add("disabled");
    }
    else{

        // console.log("token is null: " + nextPageToken);

        await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist_id}&key=${api_key}&part=snippet&maxResults=${maxResults}`)
        .then((response) => response.json()) //2
        .then((result) => {
            videos = result.items;
            nextPageToken = result.nextPageToken;
            // console.log(videos); //3
        });

    }

    return { videos, nextPageToken };
}

function createDiv(videos){

    const videosDiv = document.querySelector(".videos");
    // const body = document.querySelector("body");

    for(video of videos){
        console.log(video);
        const video_id = video.snippet.resourceId.videoId;
        const position = video.snippet.position;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.medium.url;
        const thumbnail_w = video.snippet.thumbnails.default.width;
        const thumbnail_h = video.snippet.thumbnails.default.height;
        const description = video.snippet.description;

        const div = document.createElement("div");
        div.classList.add("videoBox");
        // div.innerHTML = `<a href = "https://www.youtube.com/watch?v=${video_id}">
        //                     <div>
        //                         <div class="imgCenter">
        //                             <img src="${thumbnail}">
        //                         </div>
        //                         <h3>${position+1}. ${title}</h3>
        //                         <p>${description}</p>
        //                     </div>
        //                 </a>`;



        div.innerHTML = `
        <div class="card mb-5 mx-auto shadow bg-color" style="max-width: 80%;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center mt-md-0">
                    <img src="${thumbnail}" alt="Youtube Video Thumbnail" class="img-fluid img-thumbnail">
                </div>
                <div class="col-md-8 mr-2 my-2">
                    <div class="card-body">
                        <h5 class="card-title italic-700 fs-2">${position+1}. ${title}</h5>
                        <p class="card-text font-1">${description}</p>
                    </div>
                    <div class="d-flex justify-content-md-start">
                        <a href = "https://www.youtube.com/watch?v=${video_id}" class="btn btn-danger text-white mx-md-3 mx-auto" target="_blank">Watch on YouTube</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        videosDiv.appendChild(div);
        // body.appendChild(div);
    }
}

async function init(){

    const moreVidsButton = document.querySelector("#retrieveButton");

    const api_key = "AIzaSyAv7wjtDW08AAlrvg8mfwJaVOf_fGI-cMQ";
    const playlist_id = await fetch_playlist_id(api_key);

    let nextPageToken1 = 0;
    let { videos, nextPageToken} = await fetch_video_info(api_key, playlist_id);
    nextPageToken1 = nextPageToken;
    // console.log(nextPageToken);
    // console.log("before create");
    // console.log(videos);
    createDiv(videos);

    moreVidsButton.addEventListener("click",async ()=>{
        // console.log("This is in add event listener: " + nextPageToken1);
        if(!moreVidsButton.classList.contains("disabled")){
            let { videos, nextPageToken} = await fetch_video_info(api_key, playlist_id, nextPageToken1);
            nextPageToken1 = nextPageToken;
            // console.log(nextPageToken1);
            createDiv(videos);
        }

    })

}

init();