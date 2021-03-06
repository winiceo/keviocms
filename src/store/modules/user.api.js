import Vue from 'vue'
//import { authSocket } from '../../socket'
import { readMulti } from '../../storage'
import { STORE_KEY_USERNAME, STORE_KEY_ACCESS_TOKEN, STORE_KEY_REFRESH_TOKEN,STORE_BILL_BID,STORE_BILL } from '../../constants'

export function init () {
  return readMulti([STORE_KEY_USERNAME, STORE_KEY_ACCESS_TOKEN, STORE_KEY_REFRESH_TOKEN])
}

export function getStoreBill () {
  return readMulti([STORE_BILL_BID,STORE_BILL])
}

export function login (username, password) {
  var user = new K.User();
  // 设置用户名
  user.setUsername(username);
  // 设置密码
  user.setPassword(password);
  // 设置邮箱
  //user.setEmail('tom@leancloud.cn');
  return user.logIn()

}
export function register (username, password) {
  var user = new K.User();
  // 设置用户名
  user.setUsername(username);
  // 设置密码
  user.setPassword(password);
  // 设置邮箱
  //user.setEmail('tom@leancloud.cn');
  return user.signUp()


  // return Vue.http.post('auth/local', {
  //   username,
  //   password
  // }).then(res => res.json())
}

export function getUserInfo (token) {
  return new Promise((resolve) => {
    Vue.http.get('users/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(data => data.json()).then(data => {
      // authSocket(token, () => {
      //   console.log('Token authenticated.')
      // })
      resolve(data)
    }).catch(() => {
      resolve({})
    })
  })
}
