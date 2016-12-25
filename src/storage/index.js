const storage = window.localStorage
import _ from "lodash"
export function save (key, value) {
  storage.setItem(key, value)
}

export function saveMulti (datas) {
  _.forEach(datas, function(data) {
    save(data.key, data.value)
  });
  //datas.forEach(data => save(data.key, data.value))
}

export function read (key) {
  return storage.getItem(key)
}

export function readMulti (keys) {
  return keys.map(key => read(key))
}

export function clear (key, clearAll = false) {
  if (clearAll) {
    storage.clear()
  } else {
    storage.removeItem(key)
  }
}

export function clearMulti (keys) {
  keys.forEach(key => clear(key))
}
