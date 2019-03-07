/**
 * POST请求方式
 * @param {String} url 
 * @param {Object} data 
 */
export function postData(url,data){
  return fetch(url,{
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })
  .then(response => response.json());// parses response to JSON
}

/**
 * GET请求方式
 * @param {String} url 
 * @param {Object} data 
 */
export function putData(url,data){
  return fetch(url,{
    body:data,
    method:'PUT',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    // 同域请求使用 same-origin
    // 跨域请求使用 include
    credentials: 'same-origin',
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })
  .then(response => response.json());
}

/**
 * PUT请求方式
 * @param {String} url 
 * @param {Object} params 
 */
export function getData(url,params){
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
    if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
    } else {
        url += '&' + paramsArray.join('&');
    }
  }
  return fetch(url,{
    method:'GET',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    }
  })
  .then(response => response.json());
}