var totalExp = 0;
var levelupExp = 300;
for (var i=0; i<10; i++) {
  var exp = Math.floor(Math.random() * 51) +30;
  totalExp += exp;
  console.log("勇者は" + (i+1) + "回目のトレーニングで" + exp + "経験値を得た");
  if (levelupExp <= totalExp) {
    console.log("勇者のレベルが上がりました");
    levelupExp += 300;
  }
  else{
    console.log("次のレベルまで" + (levelupExp - totalExp) + "の経験値が必要です");
  }
}


//勇者は
//回目のトレーニングで
//経験値を得た
//勇者のレベルが上がりました
//次のレベルまで
//の経験値が必要です