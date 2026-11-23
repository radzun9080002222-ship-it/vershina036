window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
window.ym.l = 1 * new Date();
window.ym(112470058, 'init', { webvisor: true, clickmap: true, accurateTrackBounce: true, trackLinks: true });
window.ym(114629983, 'init', { webvisor: true, clickmap: true, accurateTrackBounce: true, trackLinks: true });
var s = document.createElement('script');
s.async = 1;
s.src = 'https://mc.yandex.ru/metrika/tag.js';
document.head.appendChild(s);
document.addEventListener('click', function (event) {
  if (!/\/sertifikat\/(?:index\.html)?$/.test(location.pathname)) return;
  var link = event.target.closest && event.target.closest('a[data-cert-order]');
  if (!link) return;
  window.ym(112470058, 'reachGoal', 'cert_order');
  window.ym(114629983, 'reachGoal', 'cert_order');
  var href = link.getAttribute('href') || '';
  var goal = href.startsWith('tel:') ? 'click_phone' :
    /^https:\/\/max\.ru\//.test(href) ? 'click_max' :
    /^https:\/\/t\.me\//.test(href) ? 'click_telegram' :
    /^https:\/\/wa\.me\//.test(href) ? 'click_whatsapp' : null;
  if (goal) {
    window.ym(112470058, 'reachGoal', goal);
    window.ym(114629983, 'reachGoal', goal);
  }
});
