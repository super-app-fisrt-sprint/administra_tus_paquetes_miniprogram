let requestParameter = getApp();

export function requestApiGetCurrentPackageDetail(url, that) {
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
        "X-MC-LOB":"3",
        "Content-Length":141,
        "X-MC-MAIL":"angie.copete@neoris.com",
        "X-MC-SO":"android",
        "X-Carrier":"T-Mobile",
        "X-Wifi":"false",
        "X-MC-HE-V":"3",
        "X-MC-SO-V":"9",
        "Cache-Control":"no-cache",
        "X-MC-SO-API":"28", 
        "X-MC-SO-PHONE-F":"samsung",
        "X-MC-SO-PHONE-M":"SM-S908E",
        "X-MC-APP-V":"15.0.0",
        "X-MC-DEVICE-NAME":"samsungSM-S908E",
        "X-MC-DEVICE-ID":"NpEycdUlBFk4Kpb+R1GG9lqZcAAIpDBJThmCly03TVY+dCxLU0crZufrF4WcdHIyFpdOceXaOf96Eel/6096nTLvYJieWECkrUnYORPqMW09WBz0bIGuh444pf0QKAbQ7uBfpZji98SfAAy/3e6FPEmk+ykqG9tFUDqJJuAW7nrcySZ28G/N2/fTsufNIY+d",
        "X-MC-USER-AGENT":"eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKEdvb2dsZTsgQW5kcm9pZCBTREsgYnVpbHQgZm9yIHg4NjsgXHUwMDNjYW5kcm9pZC83LjBcdTAwM2UpIn0="
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
