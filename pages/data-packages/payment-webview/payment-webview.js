Page({
  data: {},
  onLoad(query) {
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    const {
      id
    } = query;
    this.data.url = `https://portalpagos.claro.com.co/index.php?id=${id}&view=vistas/personal/claro/estadoMsg.php&id_objeto=10031#no-back-button`;
    console.log(this.data.url)
  },
});