import { requestApiGetPackagesCatalogue } from "/services/GetCataloguePackages";
import { requestApiGetCurrentPackageDetail } from "/services/GetCurrentPackageDetail";

Page({
  data: {
    current: 0,
    tabIndex: 0,
    nit: "900999998",
    urlPackages: 'https://apiselfservice.co/M3/Empresas/Postpago/GetCurrentPackageDetail/',
    urlOffers: 'https://apiselfservice.co/api/index.php/v1/soap/ConsultarCatalogoPaqueteRecarga.json',
    lineNumber: getApp().globalData.lineNumber,
    packages: "",
    offers: [],
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
    ],
    nodes: [
      {
        name: "span",
        attrs: {
          style: "color: #DB493E; font-weight: bold; font-size: 0.48rem;"
        },
        children: [
          {
            type: "text",
            text: "Descubre las mejores"
          }
        ]
      },
      {
        name: "span",
        attrs: {
          style: "color: #4e4e4e; font-weight: bold; font-size: 0.48rem;"
        },
        children: [
          {
            type: "text",
            text: " ofertas y promociones"
          }
        ]
      },
    ],
    showPackageDescription: false,
    showPaymentPopup: true,
  },
  openPackageDescription() {
    this.setData({
      showPackageDescription: true
    })
  },
  closePackageDescriptionPopup() {
    this.setData({
      showPackageDescription: false
    })
  },
  closePaymentPopup() {
    this.setData({
      showPaymentPopup: false
    })
  },
  openPaymentWebview() {
    my.navigateTo({
      url: "/pages/data-packages/payment-webview/payment-webview"
    })
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

  packagesItems(res) {
    const that = this;
    const packagesItemslist = res.data.response.listaCatalogo.paquetes.map(item => {
      const { nombre, cantidadDatos, precio } = item;
      return { nombre, cantidadDatos, precio }
    })
    console.log(packagesItemslist)
    this.setData({
      offers: packagesItemslist,
    });
    console.log(that.offers);
    this.hideLoading();
  },

  GetPackagesCatalogue() {
  requestApiGetPackagesCatalogue(this.data.urlOffers, this)
    .then(res => {
      
      if (res.data.error == 1) {
        this.setData({
          title: 'Error',
          content: 'En este momento no podemos atender esta solicitud, intenta nuevamente',
          buttonText: 'Cerrar',
        })
      } else {
        this.packagesItems(res)
      }
    })
    .catch(error => {
      /* this.hideLoading({
        page: that,
      }); */
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
    if(current == 1) {
      this.GetPackagesCatalogue()
    }
  },
});
