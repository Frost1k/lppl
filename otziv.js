(function () {
    'use strict'; var num; function otzyv_kp_imdb(kpid, imdbid, num) {
        if (kpid != '') {
            $.get('http://62.84.100.7/otzyv.php?kp=' + kpid + '&tmdb=' + imdbid + '&num=' + num, function (data) {
                var modal = $('
'+data+'
'); var enabled = Lampa.Controller.enabled().name; Lampa.Modal.open({ title: "", html: modal, size: "large", mask: !0, onBack: function() { Lampa.Modal.close(), Lampa.Controller.toggle(enabled) }, onSelect: function() {} }); }); } } $('.otzyvb').on('hover: enter', function () { console.log(123); }); function startPlugin() { window.otzyv_plugin = true; Lampa.Listener.follow('full', function (e) { if (e.type == 'complite') { var num=0; $('.full - start - new__buttons').append('
Отзывы
'); $('.button--otzyv').on('hover: enter', function (card) { if (num > 9) num = 0; otzyv_kp_imdb(e.data.movie['kinopoisk_id'],e.data.movie['imdb_id'],num); num += 1; }); } }); } if (!window.otzyv_plugin) startPlugin(); })();