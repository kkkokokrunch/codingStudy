import { request } from "./request";

export function getNowPlayingData() {
    return request({
        url: '/Showtime/LocationMovies.api?locationId=290'
    })
}