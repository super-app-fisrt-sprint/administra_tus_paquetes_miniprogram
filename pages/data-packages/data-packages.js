import { requestApiGetCurrentPackageDetail } from "/services/GetCurrentPackageDetail";

Page({
  data: {
    current: 0,
    tabIndex: 0,
    nit: "900999998",
    urlPackages: 'https://apiselfservice.co/M3/Empresas/Postpago/GetCurrentPackageDetail/',
    lineNumber: getApp().globalData.lineNumber,
    packages: "",
    showLoading : false,
    iconPackage: "/assets/icons/redeem.svg",
    items: [
      {
        title: 'Mis paquetes',
        content: "Paquete adquirido vigente"
      },
      {
        title: 'Ofertas para tí',
        content: "Paquete adquirido asdfsad"
      }
    ]
  },
  onLoad(options) {
    console.log(options)
    this.showLoading();
    const that = this;
    requestApiGetCurrentPackageDetail(this.data.urlPackages, that)
    .then(res => {
      const packages = res.data.response
      console.log(packages.packageName)
      this.setData({
        packages: packages.packageName,
      });
      console.log(this.packages)
      this.hideLoading({});
      console.log("Package", this.data.packages);
    })
    .catch(error => {
      this.hideLoading({
        page: that,
      });
      my.alert({
        title: 'Error',
        content: 'En este momento no podemos atender esta solicitud, intenta nuevamente',
        buttonText: 'Cerrar',
      });
    });
  },

  showLoading() {
    this.setData({
      showLoading: true
    });
  },
  //Metodo necesario para ocultar el loading
  hideLoading() {
    this.setData({
      showLoading: false
    });
  },

  switchTab(e) {
    const { tab } = e.target.dataset;
    this.setData({ tabIndex: tab })
  },

  onSwipeChange(e) {
    this.setData({
      current: e.detail.current,
    });
  },

  onChange(current) {
    this.setData({
      current,
    });
  },
});
