let requestParameter = getApp();

export function userInfo(url, loginUser) {
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "POST",
      data: loginUser,
      headers: {
        "X-SESSION-ID": requestParameter.globalData.sessionId,
        "X-MC-LOB": "0",
        "X-MC-LINE": "0",
        "X-MC-MAIL": "",
        "X-MC-SO": "android",
        "X-MC-HE-V": "3",
        "X-MC-SO-V": "9",
        "X-MC-SO-API": "28",
        "X-MC-APP-V": "15.1.3",
        "X-MC-DEVICE-ID":"NpEycdUlBFk4Kpb+R1GG9lqZcAAIpDBJThmCly03TVY+dCxLU0crZufrF4WcdHIyFpdOceXaOf96Eel/6096nTLvYJieWECkrUnYORPqMW09WBz0bIGuh444pf0QKAbQ7uBfpZji98SfAAy/3e6FPEmk+ykqG9tFUDqJJuAW7nrcySZ28G/N2/fTsufNIY+d",
        "X-MC-USER-AGENT":"eyJpcCI6IjEwLjAuMi4xNSIsInVzZXJBZ2VudCI6Ik1pQ2xhcm9BcHAvMC4wLjEgKEdvb2dsZTsgQW5kcm9pZCBTREsgYnVpbHQgZm9yIHg4NjsgXHUwMDNjYW5kcm9pZC83LjBcdTAwM2UpIn0="
      },
      success: res => {
        resolve(res);
      },
      fail: res => {
        reject(res);
      }
    });
  });
}
