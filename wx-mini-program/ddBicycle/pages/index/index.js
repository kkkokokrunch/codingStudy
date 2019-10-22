Page({
    data: {
        markers: [],
        longitude: 116.438502, //经度 
        latitude: 39.902383, //维度115.823207 28.734118
        scale: 18
    },
    onLoad() {
        //微信赋予小程序可以调用的API
        wx.showLoading({
            title: '获取坐标中',
        });
        //获得手机gps
        wx.getLocation({
            type: 'gcj02',
            success: (res) => {
                let { longitude, latitude } = res
                this.tocreateMarkers(longitude, latitude)
                this.setData({
                    longitude,
                    latitude
                }, () => {
                    wx.hideLoading();
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },
    onReady() {
        //地图上下文环境
        this.mapCtx = wx.createMapContext('myMap');
    },
    toVisit(e) {
        console.log(e)
    },
    toScan() {
        return wx.scanCode({
            success: (result) => {
                wx.showModal({
                    title: 'scan',
                    content: 'JSON.stringify(result)'
                });
            }
        });
    },
    toUser() {},
    toMst() {},
    toReset() {
        //当你使用地图来来去去，可以再回到原来的起点
        this.mapCtx.moveToLocation();
        // this.setData({
        //     scale: 18
        // })
    },
    tocreateMarkers(longitude, latitude) {
        let markers = [{
            "id": 1,
            "iconPath": "/images/map-bicycle.png",
            "latitude": latitude,
            "longitude": longitude,
            "width": 52.5,
            "height": 30,
            "callout": {}
        }]
        this.setData({
            markers
        });
    }

})