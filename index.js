function UA() {

}

UA.detect = function(userAgent) {
  userAgent += ''
  var versionKeywords = ['MSIE', 'Trident', 'Windows NT', 'Firefox', 'Safari', 'Chrome', 'Edge', 'AppleWebKit']
  var versionMap = {}

  for (var i = 0; i < versionKeywords.length; i++) {
    var keyword = versionKeywords[i]
    var version = getVersion(keyword, userAgent)
    versionMap[keyword] = version
  }

  var browserName = null
  var browserVersion

  if (versionMap.MSIE) {
    browserName = 'IE'
    browserVersion = versionMap.MSIE
  } else if (versionMap.Trident) {
    // https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537503(v=vs.85)
    browserName = 'IE'
    browserVersion = parseFloat(versionMap.Trident) + 4 // always plus 4
  } else {
    var arr = 'Edge Firefox Chrome Safari'.split(' ') // safari always last one
    for (var i = 0; i < arr.length; i++) {
      if (!browserName) {
        if (versionMap[arr[i]]) {
          browserName = arr[i]
          browserVersion = versionMap[arr[i]]
        }
      }
    }
  }

  // always return number for version compare
  browserVersion = parseFloat(browserVersion)

  return {
    browserName: browserName,
    browserVersion: browserVersion
  }
}

function getVersion(keyword, userAgent) {
  var reg = new RegExp(keyword + '[. /]*([0-9.]+)')
  var parsed = reg.exec(userAgent)
  if (parsed) {
    return parsed[1]
  }
  return null
}

module.exports = UA
