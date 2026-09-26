const menu = () => {

  //ハンバーガーメニュー、使用HTML要素取得
  //ハンバーガーボタン
  const btn = document.querySelector('.toggle-btn');
  //ナビメニュー
  const nav = document.querySelector('.header-nav-container');
  //メニュー背景
  const mask = document.querySelector('.mask');

  //ハンバーガーボタンクリック処理
  btn.addEventListener('click', () => {

    //メニューにopenクラスがついてるか
    if (nav.classList.contains('open')){

    //openクラスを削除
    nav.classList.remove('open');
    btn.classList.remove('open');
    mask.classList.remove('open');

    } else {

      //openクラスを追加
      nav.classList.add('open');
      btn.classList.add('open');
      mask.classList.add('open');
    }
  });
};

menu();