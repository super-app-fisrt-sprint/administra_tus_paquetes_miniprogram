let requestParameter = getApp();

export function requestApiGetPackagesCatalogue(url) {
  console.log(url)
  return new Promise((resolve, reject) => {
    my.request({
      url: url,
      method: "POST",
      dataType: "json",
      data: {
        data: {
          AccountId: "3103815747",
          esMasivo: "true",
          otraLinea: "",
          saldo: -1,
          tipoPaquete: 2,
          UserProfileID: "angie.copete@neoris.com"
        }
      },
      headers: {
        "X-SESSION-ID": "U2FsdGVkX1/HgyTE69ALHSgjeY5JOcUndYb4QD4in4jeWA/2ozx8JDPbaxcYioozrBKgFzn3Oao0aPG6UOlxeENTNazrr1+QyFW9IkFog7iE6A24Z40XfWLI4ZOoCdmaooAy/38r6xiqqF328/AXQFHWUXG/CGCDHb2AJvOZYnSMYya3O5/QEdRzrleauz+SBqmdj4uAA11zEfpH150kxkoVF1rGeuMFp8XsRu2EFtjBtTG8mv5w6N1mH7WojnplIMhX2bTijVmGby4jM/lYro3jUXCw8LP2DNs4A3y61MuV0jm0juYAFtvexEhzKN440DkGpIFjELmEPlqEWgnGfvnqEaV33XEqbH6K305FkKmC45ctVykFjJcTiABctZxxsFYF595X4S8qTRfWtDp8JOxOBLcUy/zuagvgiqy22wBIsY98uad3DLbp3xVWp7u/k180JsdW2+K/DOmEX7oJKVzJFhQ7YET7fkq/rN2nrfl0aQbm5Y5o0nbU9z/Kz5z9Wd0lBaQLfECNMIpSp8gsJ+i1v12l+wx0ygQ5Y1Pc6PqSa38fLdZud6Mr4KbvZj+lXbcue/fXUU5zvSxOlJaYyaoZb3wZsZ9M3gqP6nDpYb75kbzWPX+TfJi23vDf00MGoRY5X+fYnHLl7rTWaolbF/mnJO+CK2wshdmLs7VwxncuTgQZYeDVLJ8BUmvp9mULzHRwDKLiS/tH5YtWydFvYJSFDZwL4hj/PZD3L+hRzudad9PNb6KFc8Bw7tAnVSoDhraMHG3WIiaWdm/HNSHPCJuoQXKoI4PvFz54I6w4HXO2NJ7alVlUVodfltgFGagnDxWr7+eu+BokmEF1EZ+19de+5gi888nQoOVp8YcPI27j0KYd0/CwfNlv9Zog4vVnJR6+FJFcRXMXEFscW2aEX4sRXYpiUneWpoXhwHo4uz9ZN6WyZjz02O/cqsSC9ekcpY/fGtim0DfoYUsH8+T+uL2YQQVYBedHriGHKWt5gbA=",
        "X-MC-LINE": "3103815747",
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
