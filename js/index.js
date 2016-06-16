(function() {
  var pr;

  pr = {
    t: {
      c: 0,
      ob: ['оплата за результат - никто никому ничего не обязан', 'технологический плюрализм и толерантность', 'каждый может повлиять на развитие компании', 'документация всей работы', 'кто работает, тот ест', 'стандарты', 'свободный режим']
    },
    any: {
      c: 0,
      ob: ['<a href="http://stink.co">stink</a>', '<a href="http://www.stinkdigital.com" target="_blank">не забудь нажать кнопку</a>', '<a href="http://www.ibrush.ru" target="_blank">русские парни</a>', 'softlab']
    },
    wow: {
      c: 0,
      ob: ['showreel', 'снять фильм про историю создания', 'листинг портфолио', 'форма в виде завления', 'сайт в рассрочку', 'аудит ВСЕВОЗМОЖНЫЙ', 'запуск чего-то в космос']
    }
  };

  $('.block').on('click', function() {
    var prg;
    prg = $(this).attr('pr') ? pr[$(this).attr('pr')] : 0;
    if (prg && prg.ob[prg.c]) {
      $(this).append('<p class="s">' + prg.ob[prg.c] + '</p>');
      return prg.c += 1;
    }
  });

}).call(this);