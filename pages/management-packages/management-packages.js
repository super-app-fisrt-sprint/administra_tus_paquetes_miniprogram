Page({
  data: {
    srcImge: '/assets/icons/global.svg',
    arrowImage: '/assets/icons/navigate_next_white.svg',
    nodes: [
      {
        name: "span",
        attrs: {
          style: "color: #DB493E; font-weight: bold; font-size: 0.48rem;"
        },
        children: [
          {
            type: "text",
            text: "Creamos"
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
            text: " paquetes especiales,"
          }
        ]
      },
    ]
  },
  onLoad() {},
  onNavigate() {
    my.navigateTo({
      url: '/pages/data-packages/data-packages'
    })
  },
  
});
