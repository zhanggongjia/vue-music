import {commonParams, options} from 'api/config'

import jsonp from 'common/js/jsonp';

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({},commonParams, {
        platfrom: 'h5',
        uin: 0,
        needNewCode: 1
    })
    return jsonp(url, data, options)
} 