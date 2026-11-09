// Thanh tài khoản: hỏi máy chủ ai đang đăng nhập rồi vẽ liên kết tương ứng.
// Nếu máy chủ không trả lời (mở file trực tiếp, mất mạng) thanh vẫn ẩn, app học chạy như cũ.
(function () {
  'use strict';
  var bar = document.getElementById('account-bar');
  if (!bar) return;

  function link(href, text, cls) {
    var a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    if (cls) a.className = cls;
    return a;
  }

  function render(me) {
    bar.textContent = '';
    if (me.user) {
      var name = document.createElement('span');
      name.className = 'account-name';
      name.textContent = me.user.name;
      var out = document.createElement('button');
      out.type = 'button';
      out.textContent = 'Đăng xuất';
      out.addEventListener('click', function () {
        fetch('/logout', { method: 'POST', headers: { 'x-csrf-token': me.csrfToken } })
          .catch(function () {})
          .then(function () { location.reload(); });
      });
      bar.append(name, link('/uploads', me.user.role === 'admin' ? 'Quản lý file' : 'File của tôi'), out);
    } else {
      bar.append(link('/login', 'Đăng nhập'));
      if (me.allowSignup) bar.append(link('/signup', 'Đăng ký miễn phí', 'account-cta'));
    }
    bar.hidden = false;
  }

  fetch('/api/me', { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
    .then(function (res) { return res.ok ? res.json() : Promise.reject(new Error('me ' + res.status)); })
    .then(render)
    .catch(function () {});
})();
