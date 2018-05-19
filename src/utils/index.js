function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function objKeySort(arys) {
  let newkey = Object.keys(arys).sort()
  let newObj = {}
  for (var i = 0; i < newkey.length; i++) {
    if (!!arys[newkey[i]]) {
      newObj[newkey[i]] = arys[newkey[i]]
    }
  }
  return newObj
}
