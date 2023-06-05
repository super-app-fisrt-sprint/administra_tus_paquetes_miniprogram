import { requestApiGetPackagesCatalogue } from "/services/GetCataloguePackages";
import { requestApiGetCurrentPackageDetail } from "/services/GetCurrentPackageDetail";
import { userInfo } from "/services/userInfoService";

Page({
  data: {
    current: 0,
    tabIndex: 0,
    nit: "860066942",
    urlUserInfo: "https://apiselfservice.co/api/index.php/v1/soap/LoginUsuarioApp.json",
    urlPackages: 'https://apiselfservice.co/M3/Empresas/Postpago/GetCurrentPackageDetail/',
    urlOffers: 'https://apiselfservice.co/api/index.php/v1/soap/ConsultarCatalogoPaqueteRecarga.json',
    lineNumber: getApp().globalData.lineNumber,
    packages: "",
    offers: [],
    showLoading : false,
    iconPackage: "/assets/icons/gifticon.png",
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
    loginUser: {
      data: {
        clave: "Neoris.2023",
        nombreUsuario: "angie.copete@neoris.com",
        usuarioEmpresa: "1"
      }
    },
    showPackageDescription: false,
    showPackageInformation: false,
    showPaymentPopup: false,
    indexOfferSelected: 0
  },
  openPackageInformation() {
    this.setData({
      showPackageInformation: true,
    })
  },
  openPackageDescription(event) {
    this.setData({
      showPackageDescription: true,
      indexOfferSelected: event.target.dataset.indexOffers
    })
    console.log("event: ", event)
  },
  closePackageDescriptionPopup() {
    this.setData({
      showPackageDescription: false,
      showPackageInformation: false
    })
  },
  closePaymentPopup() {
    this.setData({
      showPaymentPopup: false
    })
  },
  openPaymentPopup(event) {
    this.setData({
      showPaymentPopup: true,
      indexOfferSelected: event.target.dataset.indexOffers
    })
  },
  openPaymentWebview() {
    my.navigateTo({
      url: "/pages/data-packages/payment-webview/payment-webview"
    })
  },
  onLoad() {
   /*  this.getUserInfo(); */
    this.getRequestApiGetCurrentPackageDetail();
  },

  packagesItems(res) {
    const that = this;
    const packagesItemslist = res.data.response.listaCatalogo.paquetes.map(item => {
      const { nombre, cantidadDatos, precio, descripcion } = item;
      return { nombre, cantidadDatos, precio, descripcion }
    })
    console.log(packagesItemslist)
    this.setData({
      offers: packagesItemslist,
    });
    console.log(that.offers);
    this.hideLoading();
  },

  GetPackagesCatalogue() {
    this.showLoading();
    
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

  getUserInfo() {
    userInfo(this.data.urlUserInfo, this.data.loginUser)
      .then((res) => {
        console.log(res);
        const itemUser = res.data.response.usuario;
        const { DocumentNumber } = itemUser;
        this.setData({
          nit: DocumentNumber,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getRequestApiGetCurrentPackageDetail() {
    this.showLoading();
    const that = this;
    requestApiGetCurrentPackageDetail(this.data.urlPackages)
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

  onChange(current) {
    this.setData({
      current,
    });
    if(current == 1) {
      this.GetPackagesCatalogue()
    }
  },
});
