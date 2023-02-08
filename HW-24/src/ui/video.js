import { sleep } from "../utils/sleep.js";

export class Video {
    #time;
    #linckV;
    #parentElement;
    constructor(parentId, time, linckV) {
        this.#time = time;
        this.#linckV = linckV;
        this.#parentElement = document.getElementById(parentId);
         if (!this.#parentElement) {
            throw `wrong parent id ${parentId}`;
        }
    }

    Start() {
        this.#parentElement.innerHTML = `  <p>The video will be stoped after${this.#time / 1000} sec.</p>
                                    <video id="vid-id" width="320" height "240" controls>
                                        <source src="${this.#linckV}" type="video/mp4">
                                    </video>`;

        let vidElement = document.getElementById("vid-id");
        vidElement.play();

        console.log("video started");

        
        const fun = async () => { 
            console.log("Waiting timeout");
            await sleep(this.#time);
            this.Stop();
            }

        fun();

    }

    Stop() {
        let vidElement = document.getElementById("vid-id");
        vidElement.pause();
        console.log("video paused");
    }
}