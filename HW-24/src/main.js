
import { Video } from "./ui/video.js";


export function onStart()
{
  vid.Start(); 
}

const vid = new Video("my-video", 10000, "myVideos/20230203_154453.mp4");

//onStart();

// const TIMEOUT2 = 20000;
//  const fun = async () => {
   
// await sleep(TIMEOUT1);
// //start(video);
// await sleep(TIMEOUT2);
// //stop (video);
// console.log(`after ${TIMEOUT2/1000} seconds the video will be stoped`)
// }
// fun();
// console.log(`waiting for video ${TIMEOUT1/1000} seconds`)
// import { sleep } from "./utils/sleep.js";

// const TIMEOUT = 5000;
// const fun = async () => { 
// await sleep(TIMEOUT);
// console.log(`after ${TIMEOUT/1000} seconds`)
// }

// fun();
// console.log(`waiting for ${TIMEOUT/1000} seconds`)
// console.log("*****************************************")