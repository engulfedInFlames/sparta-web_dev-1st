async function getData() {
  const { temp } = await (
    await fetch("http://spartacodingclub.shop/sparta_api/weather/seoul")
  ).json();
  const showTemp = document.getElementById("show-temp");
  showTemp.innerText = `현재 서울의 날씨: ${temp}도`;
}
getData();
setInterval(() => getData(), 1000 * 900);
