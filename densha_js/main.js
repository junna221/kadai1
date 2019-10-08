var station = prompt("1.a駅 2.b駅 3.c駅\n行き先の駅を1,2,3から選んでくでください");

station = Number(station);

var type;

switch (station) {
    case 1:
      type="快速";
      break;
    case 2:
      type="快速と急行";
      break;
    case 3:
      type="特急";
      break;
  default:
    alert("駅が正しく入力されていません。このページを再度読み込んでください。");
}

if (station >= 1 && station <= 3) {
  alert("その駅には" + type + "の電車が止まります");
}






//1.a駅 2.b駅 3.c駅\n行き先の駅を1,2,3から選んでくでください
//
//快速
//快速と急行
//特急
//駅が正しく入力されていません。このページを再度読み込んでください。
//
//その駅にはの電車が止まります
