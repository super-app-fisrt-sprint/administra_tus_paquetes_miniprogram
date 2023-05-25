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
    paquetes: [
      {
          "icono": "X.png",
          "nombreRed": "X",
          "aplicaPagoContraSaldo": "false",
          "aplicaPagoEnLinea": "true",
          "cantidadDatos": "5GB",
          "cantidadDatosRecurrente": "",
          "cantidadSMS": "No Aplica",
          "cantidadSMSRecurrente": "",
          "cantidadVoz": "No Aplica",
          "cantidadVozRecurrente": "",
          "catalogoPaqueteID": "100",
          "catalogoRedSocial": [],
          "categoriaPaqueteID": "1",
          "codigoPaqueteGW": "50077",
          "codigoPaqueteRecurrente": "",
          "codigoPaqueteSaldo": "31198",
          "descripcion": "Paquete Adicional de Datos 5GB para navegar a cualquier sitio de internet hasta que se agote su capacidad. Vigencia 15 días.",
          "descripcionRecurrente": "",
          "esPaqueteRecurrente": "false",
          "nombre": "Datos Adicional 5GB",
          "nombreRecurrente": "",
          "precio": "8900",
          "tipoPaqueteID": "1",
          "tipoProductoID": "1",
          "vigencia": "0",
          "infoXMB": []
      },
      {
          "icono": "X.png",
          "nombreRed": "X",
          "aplicaPagoContraSaldo": "false",
          "aplicaPagoEnLinea": "true",
          "cantidadDatos": "10GB",
          "cantidadDatosRecurrente": "",
          "cantidadSMS": "No Aplica",
          "cantidadSMSRecurrente": "",
          "cantidadVoz": "No Aplica",
          "cantidadVozRecurrente": "",
          "catalogoPaqueteID": "101",
          "catalogoRedSocial": [],
          "categoriaPaqueteID": "1",
          "codigoPaqueteGW": "50078",
          "codigoPaqueteRecurrente": "",
          "codigoPaqueteSaldo": "31199",
          "descripcion": "Paquete Adicional de Datos 10GB para navegar a cualquier sitio de internet hasta que se agote su capacidad. Vigencia 30 días. ",
          "descripcionRecurrente": "",
          "esPaqueteRecurrente": "false",
          "nombre": "Datos Adicional 10GB",
          "nombreRecurrente": "",
          "precio": "15900",
          "tipoPaqueteID": "1",
          "tipoProductoID": "1",
          "vigencia": "0",
          "infoXMB": []
      },
      {
          "icono": "X.png",
          "nombreRed": "X",
          "aplicaPagoContraSaldo": "false",
          "aplicaPagoEnLinea": "true",
          "cantidadDatos": "15GB",
          "cantidadDatosRecurrente": "",
          "cantidadSMS": "No Aplica",
          "cantidadSMSRecurrente": "",
          "cantidadVoz": "No Aplica",
          "cantidadVozRecurrente": "",
          "catalogoPaqueteID": "102",
          "catalogoRedSocial": [],
          "categoriaPaqueteID": "1",
          "codigoPaqueteGW": "50079",
          "codigoPaqueteRecurrente": "",
          "codigoPaqueteSaldo": "31200",
          "descripcion": "Paquete Adicional de Datos 15GB para navegar a cualquier sitio de internet hasta que se agote su capacidad. Vigencia 30 días.",
          "descripcionRecurrente": "",
          "esPaqueteRecurrente": "false",
          "nombre": "Datos Adicional 15GB",
          "nombreRecurrente": "",
          "precio": "24900",
          "tipoPaqueteID": "1",
          "tipoProductoID": "1",
          "vigencia": "0",
          "infoXMB": []
      },
      {
          "icono": "X.png",
          "nombreRed": "X",
          "aplicaPagoContraSaldo": "false",
          "aplicaPagoEnLinea": "true",
          "cantidadDatos": "30GB",
          "cantidadDatosRecurrente": "",
          "cantidadSMS": "No Aplica",
          "cantidadSMSRecurrente": "",
          "cantidadVoz": "No Aplica",
          "cantidadVozRecurrente": "",
          "catalogoPaqueteID": "103",
          "catalogoRedSocial": [],
          "categoriaPaqueteID": "1",
          "codigoPaqueteGW": "50081",
          "codigoPaqueteRecurrente": "",
          "codigoPaqueteSaldo": "31219",
          "descripcion": "Paquete Adicional de Datos 30GB para navegar a cualquier sitio de internet hasta que se agote su capacidad. Vigencia 30 días.",
          "descripcionRecurrente": "",
          "esPaqueteRecurrente": "false",
          "nombre": "Datos Adicional 30GB",
          "nombreRecurrente": "",
          "precio": "39900",
          "tipoPaqueteID": "1",
          "tipoProductoID": "1",
          "vigencia": "0",
          "infoXMB": []
      }
  ],
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
