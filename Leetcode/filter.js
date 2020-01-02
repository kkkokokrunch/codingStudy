var arr = [

       {name:'小米1', value: 1,  type: 2, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'锤子T1', value: 1, type: 2, date: '2018-06-07T08:10:01.589Z' },
    
       {name:'小米2', value: 1, type: 4, date: '2018-06-07T20:00:01.589Z' },
    
       {name:'小米2', value: 4, type: 4, date: '2018-06-07T20:10:21.189Z' },
    
       {name:'小米4', value: 1, type: 4, date: '2018-06-07T08:00:01.560Z' },
    
       {name:'小米4', value: 2, type: 4, date: '2018-06-07T08:10:31.584Z' },
    
       {name:'小米6', value: 1, type: 3, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'小米5s',value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'锤子T2', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'锤子T1', value: 4, type: 4, date: '2018-06-07T08:06:01.589Z' },
    
       {name:'魅蓝note5', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'魅蓝note2', value: 5, type: 4, date: '2018-06-02T08:07:01.589Z' },
    
       {name:'魅蓝note2', value: 6, type: 4, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'魅蓝note3', value: 1, type: 4, date: '2018-06-05T08:00:01.589Z' },
    
       {name:'魅蓝note', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
    
       {name:'oppor9', value: 7, type: 4, date: '2018-06-04T08:04:01.588Z' },
    
       {name:'华为p9', value: 1, type: 4, date: '2018-06-02T08:00:01.577Z' },
    
       {name:'华为p9', value: 2, type: 4, date: '2018-06-07T08:00:01.110Z' },
    
       {name:'华为p10', value: 1, type: 1, date: '2018-06-07T08:00:01.534Z' }
    
    ];
    let r = arr.filter(function(x) {
        return x.type == 4
    })
    console.log(r)