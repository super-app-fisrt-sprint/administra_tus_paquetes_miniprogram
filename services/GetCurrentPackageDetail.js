let requestParameter = getApp();

export function requestApiGetCurrentPackageDetail(url) {
  console.log(url)
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "POST",
      dataType: "json",
      data: {
        data: null
      },
      headers: {
        "X-SESSION-ID": requestParameter.globalData.sessionId,
        "X-MC-LINE": requestParameter.globalData.lineNumber,
        "X-MC-MAIL":"angie.copete@neoris.com",
        "X-MC-DEVICE-ID":"sdSS5V/uzNMk7u+w5J7jrLK82uPH+QeVMag0lGPgjM/XZ5KOc7MKnHFsFNb8kPQtil3fH8ewmXvXD88huw4LGecaguoggK6aWSq+o3TmC0uyWNagvvJpl2R8VGwFdiil/JDQXF/JXv5Jm8nA+lr0TEMDDWqfc5bEtnOvX9mmmaQ=",
        "X-MC-USER-AGENT":"eyJpcCI6IjE3Mi4xOC4xNzguODIiLCJ1c2VyQWdlbnQiOiJNaUNsYXJvQXBwLzAuMC4xIChzYW1zdW5nOyBTTS1HOTg4TjsgXHUwMDNjYW5kcm9pZC85XHUwMDNlKSJ9"
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res.data.response);
      }
    });
  });
}
