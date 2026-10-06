/* Eesha Global Services — site behaviour. No libraries. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Destinations menu (desktop) ---------- */
  var group = document.querySelector('.nav__group');
  var more = group && group.querySelector('.nav__more');
  if (group && more) {
    var setMenu = function (open) {
      group.classList.toggle('is-open', open);
      more.setAttribute('aria-expanded', String(open));
    };
    more.addEventListener('click', function (e) {
      e.stopPropagation();
      group.classList.remove('is-closing');
      setMenu(!group.classList.contains('is-open'));
    });

    // After choosing a country the pointer is still resting where the menu was.
    // Hide the menu once; the next pointer movement puts normal hover behaviour back.
    var holdShut = function () {
      group.classList.add('is-closing');
      document.addEventListener(
        'mousemove',
        function () {
          group.classList.remove('is-closing');
        },
        { once: true }
      );
    };
    holdShut();
    window.__eeshaCloseMenu = holdShut;
    document.addEventListener('click', function (e) {
      if (!group.contains(e.target)) setMenu(false);
    });
    group.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setMenu(false);
        more.focus();
      }
    });
  }

  /* ---------- "Call a branch" dialog ---------- */
  var dialog = document.getElementById('call-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-open-call]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        dialog.showModal();
      });
    });
    dialog.querySelectorAll('[data-close-call]').forEach(function (el) {
      el.addEventListener('click', function () {
        dialog.close();
      });
    });
    // click on the backdrop closes it
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  }

  /* ---------- Hero route planner ---------- */
  var route = document.querySelector('[data-route]');
  if (route) initRoute(route);

  function initRoute(root) {
    var data;
    try {
      data = JSON.parse(root.querySelector('[data-route-data]').textContent);
    } catch (err) {
      return; // leave the server-rendered default in place
    }

    var q = function (sel) {
      return root.querySelector(sel);
    };
    var path = q('.route__path');
    var progress = q('.route__progress');
    var plane = q('.route__plane');
    var total = path.getTotalLength();
    var END = 0.8; // how far along the route the plane settles
    var frame = null;

    function place(f) {
      var len = f * total;
      var p = path.getPointAtLength(len);
      var a = path.getPointAtLength(Math.max(0, len - 1));
      var b = path.getPointAtLength(Math.min(total, len + 1));
      var angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      // the plane artwork points up-right, so add 45 degrees to line it up with the path
      plane.setAttribute(
        'transform',
        'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ') rotate(' + (angle + 45).toFixed(1) + ') scale(1.6) translate(-12 -12)'
      );
      progress.setAttribute('stroke-dasharray', f.toFixed(4) + ' 1');
    }

    function fly() {
      if (frame) cancelAnimationFrame(frame);
      if (reduceMotion) {
        place(END);
        return;
      }
      var start = null;
      var duration = 1400;
      var step = function (now) {
        if (start === null) start = now;
        var t = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - t, 3);
        place(eased * END);
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }

    function update(animate) {
      var destId = (q('input[name="route-dest"]:checked') || {}).value;
      var officeId = (q('input[name="route-office"]:checked') || {}).value;
      var d = data.destinations[destId];
      var o = data.offices[officeId];
      if (!d || !o) return;

      q('[data-route-from]').textContent = o.city;
      q('[data-route-to]').textContent = d.name;
      q('[data-route-flag]').setAttribute('src', d.flag);
      q('[data-route-name]').textContent = o.name;
      q('[data-route-role]').textContent = o.role ? o.role + ', ' + o.city : o.city;

      var av = q('[data-route-avatar]');
      av.textContent = '';
      var node;
      if (o.photo) {
        node = document.createElement('img');
        node.src = o.photo;
        node.alt = '';
      } else {
        node = document.createElement('span');
        node.setAttribute('aria-hidden', 'true');
        node.textContent = o.initials;
      }
      node.className = 'avatar';
      av.appendChild(node);

      var msg = 'Hi ' + data.company + ', I am interested in studying in ' + d.short + '. My nearest branch is ' + o.city + '.';
      q('[data-route-wa]').setAttribute('href', 'https://wa.me/' + o.phone + '?text=' + encodeURIComponent(msg));
      q('[data-route-wa-label]').textContent = 'Ask about ' + d.short + ' on WhatsApp';
      q('[data-route-call]').setAttribute('href', 'tel:+' + o.phone);
      q('[data-route-call-label]').textContent = 'Call ' + o.display;

      if (animate) fly();
    }

    root.addEventListener('change', function (e) {
      if (e.target && e.target.type === 'radio') update(true);
    });

    update(false);
    fly(); // the one page-load animation
  }

  /* ---------- Reading ?key=value from the address ---------- */
  function params() {
    try {
      // the single-file preview sets __eeshaQuery; the real site uses the address bar
      var q = typeof window.__eeshaQuery === 'string' ? window.__eeshaQuery : window.location.search;
      return new URLSearchParams(q);
    } catch (err) {
      return { get: function () { return null; } };
    }
  }

  /* ---------- Course finder ---------- */
  var finder = document.querySelector('[data-finder]');
  if (finder) initFinder(finder);

  function initFinder(f) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-uni]'));
    var count = document.querySelector('[data-finder-count]');
    var empty = document.querySelector('[data-finder-empty]');
    var list = document.querySelector('[data-finder-list]');

    // apply filters passed in the address, e.g. course-finder.html?country=uk&subject=data
    var p = params();
    ['country', 'subject', 'level', 'q'].forEach(function (name) {
      var v = p.get(name);
      var el = f.elements[name];
      if (!v || !el) return;
      if (el.tagName === 'SELECT') {
        for (var i = 0; i < el.options.length; i++) if (el.options[i].value === v) el.value = v;
      } else {
        el.value = v;
      }
    });

    function apply() {
      var country = f.elements.country.value;
      var subject = f.elements.subject.value;
      var level = f.elements.level.value;
      var q = f.elements.q.value.trim().toLowerCase();
      var uniCount = 0;
      var courseCount = 0;

      cards.forEach(function (card) {
        var shown = 0;
        if (!country || card.getAttribute('data-country') === country) {
          // a search that matches the university shows all its courses;
          // otherwise only the courses whose name matches
          var uniMatches = !q || card.getAttribute('data-text').indexOf(q) !== -1;
          card.querySelectorAll('[data-course]').forEach(function (c) {
            var ok =
              (!level || c.getAttribute('data-level') === level) &&
              (!subject || c.getAttribute('data-subject') === subject) &&
              (uniMatches || c.getAttribute('data-name').indexOf(q) !== -1);
            c.hidden = !ok;
            if (ok) shown++;
          });
          card.querySelectorAll('[data-level-group]').forEach(function (g) {
            g.hidden = !g.querySelector('[data-course]:not([hidden])');
          });
        }
        card.hidden = shown === 0;
        if (shown) {
          uniCount++;
          courseCount += shown;
        }
      });

      count.textContent =
        uniCount + (uniCount === 1 ? ' university, ' : ' universities, ') + courseCount + (courseCount === 1 ? ' course' : ' courses');
      empty.hidden = uniCount !== 0;
      list.hidden = uniCount === 0;
    }

    f.addEventListener('input', apply);
    f.addEventListener('change', apply);
    f.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    f.addEventListener('reset', function () {
      setTimeout(apply, 0); // wait for the browser to clear the fields
    });
    apply();
  }

  /* ---------- Enquiry form ---------- */
  var form = document.querySelector('[data-enquiry]');
  if (form) initForm(form);

  function initForm(f) {
    var status = f.querySelector('[data-status]');
    var accessKey = f.getAttribute('data-access-key') || '';
    var company = f.getAttribute('data-company') || 'our team';

    // links from country guides and the course finder pre-fill the form
    var p = params();
    var wantedDest = (p.get('dest') || '').replace(/[^a-z]/g, '');
    if (wantedDest && f.elements.dest.querySelector('option[value="' + wantedDest + '"]')) f.elements.dest.value = wantedDest;
    var interest = p.get('interest');
    if (interest) f.elements.interest.value = interest.slice(0, 120);

    function setError(name, show) {
      var field = f.elements[name];
      var msg = f.querySelector('[data-error-for="' + name + '"]');
      field.setAttribute('aria-invalid', String(show));
      if (msg) {
        msg.hidden = !show;
        if (show) {
          msg.id = msg.id || 'err-' + name;
          field.setAttribute('aria-describedby', msg.id);
        } else {
          field.removeAttribute('aria-describedby');
        }
      }
      return show;
    }

    ['name', 'phone', 'email'].forEach(function (n) {
      f.elements[n].addEventListener('input', function () {
        if (f.elements[n].getAttribute('aria-invalid') === 'true') setError(n, false);
      });
    });

    function say(text, isError) {
      status.textContent = text;
      status.classList.toggle('is-error', !!isError);
    }

    // returns the cleaned-up answers, or null if something needs fixing
    function collect() {
      var name = f.elements.name.value.trim();
      var phone = f.elements.phone.value.trim();
      var email = f.elements.email.value.trim();
      var badName = setError('name', name.length < 2);
      var badPhone = setError('phone', phone.replace(/\D/g, '').length < 10);
      var badEmail = setError('email', email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      if (badName || badPhone || badEmail) {
        (badName ? f.elements.name : badPhone ? f.elements.phone : f.elements.email).focus();
        say('');
        return null;
      }
      var officeOpt = f.elements.office.selectedOptions[0];
      return {
        name: name,
        phone: phone,
        email: email,
        branch: officeOpt.textContent,
        branchPhone: officeOpt.getAttribute('data-phone'),
        branchDisplay: officeOpt.getAttribute('data-display'),
        branchPerson: officeOpt.getAttribute('data-name'),
        destination: f.elements.dest.selectedOptions[0].textContent,
        level: f.elements.level.value,
        interest: f.elements.interest.value.trim(),
        message: f.elements.message.value.trim(),
      };
    }

    function whatsappUrl(d) {
      var lines = ['Hi, I would like to submit an enquiry.', '', 'Name: ' + d.name, 'Phone: ' + d.phone];
      if (d.email) lines.push('Email: ' + d.email);
      lines.push('Nearest branch: ' + d.branch, 'Destination: ' + d.destination, 'Level: ' + d.level);
      if (d.interest) lines.push('Interested in: ' + d.interest);
      if (d.message) lines.push('Note: ' + d.message);
      return 'https://wa.me/' + d.branchPhone + '?text=' + encodeURIComponent(lines.join('\n'));
    }

    function sendWhatsApp(d) {
      var url = whatsappUrl(d);
      window.open(url, '_blank', 'noopener');
      say('');
      status.appendChild(
        document.createTextNode('WhatsApp should now be open with your enquiry. Press send there to reach ' + d.branchPerson + '. If nothing opened, ')
      );
      var link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'open WhatsApp here';
      status.appendChild(link);
      status.appendChild(document.createTextNode(' or call ' + d.branchDisplay + '.'));
    }

    function sendEmail(d) {
      if (f.elements.botcheck.checked) return; // filled in by a bot, not a person
      var button = f.querySelector('[type="submit"]');
      button.disabled = true;
      say('Sending your enquiry…');

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Website enquiry: ' + d.name + ' (' + d.branch + ')',
          from_name: company + ' website',
          replyto: d.email || undefined,
          Name: d.name,
          Phone: d.phone,
          Email: d.email || 'Not given',
          'Nearest branch': d.branch,
          Destination: d.destination,
          Level: d.level,
          'Interested in': d.interest || 'Not given',
          Message: d.message || 'None',
        }),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          if (!json || !json.success) throw new Error('not sent');
          f.reset();
          say('Enquiry submitted. Our ' + d.branch + ' team will call you on ' + d.phone + '.');
        })
        .catch(function () {
          say('Your enquiry did not send. Check your internet connection and submit again, or call ' + d.branchDisplay + '.', true);
        })
        .then(function () {
          button.disabled = false;
        });
    }

    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = collect();
      if (!d) return;
      if (accessKey) sendEmail(d);
      else sendWhatsApp(d);
    });

    var waButton = f.querySelector('button[type="button"][data-send="whatsapp"]');
    if (waButton) {
      waButton.addEventListener('click', function () {
        var d = collect();
        if (d) sendWhatsApp(d);
      });
    }
  }
})();
