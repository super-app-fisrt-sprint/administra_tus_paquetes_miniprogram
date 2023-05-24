Page({
  data: {
    nit: "900999998",
    lineNumber: getApp().globalData.lineNumber,
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
  
  onLoad() {},
});
