const headers = {
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
  'content-type': 'application/json'
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function transParamsToUrl(url, params) {
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(key + '=' + params[key])
    );
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  return url;
}

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
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: headers,
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })
    .then(checkStatus)
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
  return fetch(url, {
    body: data,
    method: 'PUT',
    headers: headers,
    // 同域请求使用 same-origin
    // 跨域请求使用 include
    credentials: 'same-origin',
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  })
    .then(checkStatus)
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
  return fetch(transParamsToUrl(url, params), {
    method: 'GET',
    headers: headers
  })
    .then(checkStatus)
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
  return fetch(transParamsToUrl(url, params), {
    method: 'DELETE',
    headers: headers
  })
    .then(checkStatus)
    .then(response => response.json());
}
