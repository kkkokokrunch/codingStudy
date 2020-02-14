import { request } from "./request";

export function getBannersdata() {
    return request({
        url: "/swiper.json"
    });
}

export function getFresherdata() {
    return request({
        url:"/fresher.json"
    })
}

export function getGoodesdata() {
    return request({
        url:"/goods.json"
    })
}
// export function getHomeGoods(type, page) {
//     return request({
//         url: "/home/data",
//         params: { type, page }
//     });
// }