import {
  MOCK_API,
  API
} from '../constants/ApiConstants';

/**
 * POST更新资源
 * @param {String} url
 * @param {Object} data
 * @example
 * postData('http://example.com/answer', {answer: 42})
 * .then(data => console.log(data))
 * .catch(error => console.error(error))
 */
export function postData(url, data) {
  return fetch(MOCK_API + url, {
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
    .then(response => response.json()); // parses response to JSON
}

/**
 * PUT添加资源
 * @param {String} url
 * @param {Object} data
 * @example
 * putData('http://example.com/answer', {answer: 42})
 * .then(data => console.log(data))
 * .catch(error => console.error(error))
 */
export function putData(url, data) {
  return fetch(MOCK_API + url, {
      body: data,
      method: 'PUT',
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
 * GET请求请求资源
 * @param {String} url
 * @param {Object} params
 * @example
 * getData('http://example.com/answer', {answer: 42})
 * .then(data => console.log(data))
 * .catch(error => console.error(error))
 */
export function getData(url, params) {

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
  return fetch(API + url, {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());
}

/**
 * DELETE删除资源
 * @param {String} url
 * @param {Object} params
 * @example
 * deleteData('http://example.com/answer', {answer: 42})
 * .then(data => console.log(data))
 * .catch(error => console.error(error))
 */
export function deleteData(url, params) {

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
  return fetch(API + url, {
      method: 'DELETE',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());
}