import { request } from "./request";

export function getMostExpectedData() {
    return request({
        url: '/Movie/MovieComingNew.api?locationId=290'
    })
}