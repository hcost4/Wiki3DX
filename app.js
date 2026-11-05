var GW_CSS = ":root{--bg:#1A1A1A;--bar:#141414;--card:#26292C;--field:#222528;--line:#3A3D40;--strong:#4A4E53;--accent:#BAD532;--on-accent:#141414;--title:#FFFFFF;--text:#C9CDD1;--muted:#A5ABB1;--ok:#BAD532;--warn:#F2B84B;--err:#FF7A6B}\nhtml,body{margin:0;padding:0;background:var(--bg)!important;color:var(--text);font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:14px}\n#gw{background:var(--bg);min-height:100vh;box-sizing:border-box}\n#gw *{box-sizing:border-box}\n.gw-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--bar);padding:12px 16px;border-bottom:1px solid var(--line)}\n.gw-bar img{height:18px;display:block}\n.gw-badge{font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:500;background:var(--accent);color:var(--on-accent);padding:3px 8px;border-radius:4px;white-space:nowrap}\n.gw-main{padding:16px;display:grid;gap:14px;max-width:880px}\n.gw-kicker{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin:0 0 4px}\n.gw-h1{font-family:'Space Grotesk',Arial,sans-serif;font-weight:600;font-size:22px;color:var(--title);margin:0}\n.gw-dash{width:44px;height:4px;background:var(--accent);border-radius:2px;margin:8px 0 0}\n.gw-card{background:var(--card);border:1px solid var(--line);border-radius:8px;padding:14px}\n.gw-card h2{font-family:'Space Grotesk',Arial,sans-serif;font-size:15px;font-weight:600;color:var(--title);margin:0 0 10px}\n.gw-row{display:grid;grid-template-columns:150px 1fr;gap:6px 12px;font-size:13px}\n.gw-row dt{color:var(--muted)}\n.gw-row dd{margin:0;color:var(--text);font-family:'IBM Plex Mono',monospace;font-size:12px;word-break:break-all}\n.gw-field{display:grid;gap:6px;margin-bottom:10px}\n.gw-field label{font-size:12px;color:var(--muted)}\n.gw-field input{background:var(--field);border:1px solid var(--line);border-radius:6px;color:var(--title);padding:9px 10px;font:inherit}\n.gw-field input:focus{outline:2px solid var(--accent);outline-offset:0;border-color:var(--accent)}\n.gw-actions{display:flex;gap:10px;flex-wrap:wrap}\n.gw-btn{font:inherit;font-weight:700;border-radius:6px;padding:9px 16px;cursor:pointer;border:1px solid var(--strong);background:transparent;color:var(--title)}\n.gw-btn.primary{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}\n.gw-btn:disabled{opacity:.45;cursor:not-allowed}\n.gw-log{background:var(--field);border:1px solid var(--line);border-radius:6px;padding:10px;font-family:'IBM Plex Mono',monospace;font-size:12px;line-height:1.55;max-height:300px;overflow:auto;white-space:pre-wrap;margin:0}\n.gw-log .ok{color:var(--ok)}.gw-log .warn{color:var(--warn)}.gw-log .err{color:var(--err)}.gw-log .mut{color:var(--muted)}\n.gw-note{font-size:12px;color:var(--muted);margin:8px 0 0}\n.gw-foot{border-top:1px solid var(--line);padding:10px 16px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}\n.gw-link{color:var(--accent)}\n@media (max-width:520px){.gw-row{grid-template-columns:1fr}}\n";
/* Gerador de Wiki 3DX — v0.2 (teste mínimo)
   Usa a sessão do usuário logado na 3DEXPERIENCE (WAFData). Não guarda senha nem dados de cliente. */
var GW = {
  VERSAO: 'v0.2 (05/11/2026)',
  LOGO: 'https://hcost4.github.io/Wiki3DX/logo.png',
  WAF: null, swymUrl: null, user: null, ocupado: false,

  el: function (tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; },
  log: function (msg, tipo) {
    var box = document.getElementById('gw-log'); if (!box) return;
    var hh = new Date().toTimeString().slice(0, 8);
    var line = GW.el('div', tipo || '', hh + '  ' + msg); box.appendChild(line); box.scrollTop = box.scrollHeight;
  },
  set: function (id, v) { var e = document.getElementById(id); if (e) e.textContent = v; },
  esperar: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },

  render: function (root) {
    root.innerHTML = '';
    var gw = GW.el('div'); gw.id = 'gw';
    var bar = GW.el('div', 'gw-bar'); var img = GW.el('img'); img.src = GW.LOGO; img.alt = 'SKA + GoEngineer';
    bar.appendChild(img); bar.appendChild(GW.el('span', 'gw-badge', GW.VERSAO)); gw.appendChild(bar);
    var main = GW.el('div', 'gw-main');
    var head = GW.el('div'); head.appendChild(GW.el('p', 'gw-kicker', 'Implantação 3DEXPERIENCE'));
    head.appendChild(GW.el('h1', 'gw-h1', 'Gerador de Wiki')); head.appendChild(GW.el('div', 'gw-dash')); main.appendChild(head);

    var c1 = GW.el('div', 'gw-card'); c1.appendChild(GW.el('h2', null, '01 · Conexão'));
    var dl = GW.el('dl', 'gw-row');
    [['Ambiente', 'gw-amb'], ['Serviço 3DSwym', 'gw-swym'], ['Usuário', 'gw-user']].forEach(function (p) {
      dl.appendChild(GW.el('dt', null, p[0])); var dd = GW.el('dd', null, 'verificando…'); dd.id = p[1]; dl.appendChild(dd);
    });
    c1.appendChild(dl); main.appendChild(c1);

    var c2 = GW.el('div', 'gw-card'); c2.appendChild(GW.el('h2', null, '02 · Teste mínimo'));
    var f = GW.el('div', 'gw-field'); var lb = GW.el('label', null, 'Nome da comunidade de teste'); lb.htmlFor = 'gw-nome';
    var inp = GW.el('input'); inp.id = 'gw-nome'; inp.value = 'TESTE Widget ' + new Date().toLocaleString('pt-BR').replace(',', '').slice(0, 16);
    f.appendChild(lb); f.appendChild(inp); c2.appendChild(f);
    var acts = GW.el('div', 'gw-actions');
    var b1 = GW.el('button', 'gw-btn primary', 'Criar comunidade + Capa + 1 página'); b1.id = 'gw-run'; b1.disabled = true; b1.onclick = GW.testeMinimo;
    var b2 = GW.el('button', 'gw-btn', 'Limpar log'); b2.onclick = function () { document.getElementById('gw-log').innerHTML = ''; };
    acts.appendChild(b1); acts.appendChild(b2); c2.appendChild(acts);
    c2.appendChild(GW.el('p', 'gw-note', 'Cria uma comunidade Secreta, renomeia a página raiz para "Capa" e cria uma página filha. Use só na base de teste.'));
    main.appendChild(c2);

    var c3 = GW.el('div', 'gw-card'); c3.appendChild(GW.el('h2', null, '03 · Log'));
    var lg = GW.el('div', 'gw-log'); lg.id = 'gw-log'; c3.appendChild(lg); main.appendChild(c3);
    gw.appendChild(main);
    gw.appendChild(GW.el('div', 'gw-foot', 'SKA + GoEngineer · 3DEXPERIENCE'));
    root.appendChild(gw);
  },

  /* ---------- chamadas ---------- */
  req: function (metodo, caminho, dados, csrf) {
    return new Promise(function (ok, falha) {
      var h = { 'Accept': 'application/json' };
      if (dados) h['Content-Type'] = 'application/json';
      if (csrf) h['X-DS-SWYM-CSRFTOKEN'] = csrf;
      GW.WAF.authenticatedRequest(GW.swymUrl + caminho, {
        method: metodo, type: 'json', headers: h, timeout: 60000,
        data: dados ? JSON.stringify(dados) : undefined,
        onComplete: function (r) { if (typeof r === 'string') { try { r = JSON.parse(r); } catch (e) {} } ok(r); },
        onFailure: function (err, resp) { falha(new Error((err && err.message ? err.message : String(err)) + (resp ? ' · ' + JSON.stringify(resp).slice(0, 300) : ''))); },
        onTimeout: function () { falha(new Error('tempo esgotado')); }
      });
    });
  },
  csrf: function () { return GW.req('GET', '/api/index/tk').then(function (r) { return r.result.ServerToken; }); },
  post: function (caminho, params) {
    return GW.csrf().then(function (tk) { return GW.req('POST', caminho, { params: params }, tk); });
  },

  /* Descobre o endereço do 3DSwym: 1) serviços da plataforma, 2) Compass, 3) endereço do dashboard */
  acharSwym: function (Compass, Plat) {
    function comPrazo(p, ms) { return Promise.race([p, new Promise(function (_, f) { setTimeout(function () { f(new Error('sem resposta em ' + ms / 1000 + 's')); }, ms); })]); }
    var t1 = function () {
      return comPrazo(new Promise(function (ok, falha) {
        if (!Plat) return falha(new Error('módulo indisponível'));
        Plat.getPlatformServices({
          onComplete: function (lista) {
            lista = Array.isArray(lista) ? lista : [lista];
            var p = lista.filter(function (x) { return x && x['3DSwym']; })[0];
            p ? ok(p['3DSwym']) : falha(new Error('3DSwym não listado'));
          },
          onFailure: function (e) { falha(new Error(String(e))); }
        });
      }), 8000);
    };
    var t2 = function () {
      return comPrazo(new Promise(function (ok, falha) {
        var pid = (window.widget && widget.getValue) ? widget.getValue('x3dPlatformId') : undefined;
        Compass.getServiceUrl({ serviceName: '3DSwym', platformId: pid,
          onComplete: function (u) { if (Array.isArray(u)) u = (u[0] && u[0].url) || ''; u ? ok(u) : falha(new Error('vazio')); },
          onFailure: function (e) { falha(new Error(String(e))); } });
      }), 8000);
    };
    var t3 = function () {
      var ref = document.referrer || ''; var m = ref.match(/^https:\/\/([^\/]+)-ifwe\.([^\/]+)/);
      return m ? Promise.resolve('https://' + m[1] + '-3dswym.' + m[2]) : Promise.reject(new Error('endereço do dashboard não disponível'));
    };
    return t1().catch(function (e) { GW.log('Busca 1 (serviços da plataforma): ' + e.message, 'warn'); return t2(); })
      .catch(function (e) { GW.log('Busca 2 (Compass): ' + e.message, 'warn'); return t3(); });
  },

  conectar: function () {
    if (typeof require !== 'function') {
      GW.set('gw-amb', 'fora da 3DEXPERIENCE'); GW.set('gw-swym', '—'); GW.set('gw-user', '—');
      GW.log('Abra este widget pelo Run your App dentro do 3DDashboard.', 'warn'); return;
    }
    require(['DS/WAFData/WAFData', 'DS/i3DXCompassServices/i3DXCompassServices'], function (WAF, Compass) {
      GW.WAF = WAF; GW.set('gw-amb', '3DDashboard');
      var seguir = function (Plat) {
        GW.acharSwym(Compass, Plat).then(function (u) {
          GW.swymUrl = String(u).replace(/\/$/, ''); GW.set('gw-swym', GW.swymUrl);
          return GW.req('GET', '/api/user/getcurrent');
        }).then(function (r) {
          var u2 = (r && r.result) || r || {}; GW.user = u2;
          GW.set('gw-user', (u2.first_name || '') + ' ' + (u2.last_name || '') + ' · ' + (u2.login || ''));
          document.getElementById('gw-run').disabled = false; GW.log('Conectado ao 3DSwym.', 'ok');
        }).catch(function (e) {
          if (!GW.swymUrl) GW.set('gw-swym', 'não encontrado'); GW.set('gw-user', 'erro');
          GW.log('Falha na conexão: ' + e.message, 'err');
        });
      };
      require(['DS/i3DXCompassPlatformServices/i3DXCompassPlatformServices'], seguir, function () { seguir(null); });
    }, function (e) { GW.set('gw-amb', 'sem módulos DS'); GW.log('Módulos da plataforma indisponíveis: ' + e, 'err'); });
  },

  idDe: function (r) { var x = (r && r.result) || r || {}; return x.id || x.mid || (x.result && x.result.id) || null; },

  testeMinimo: function () {
    if (GW.ocupado) return; GW.ocupado = true; var btn = document.getElementById('gw-run'); btn.disabled = true;
    var nome = document.getElementById('gw-nome').value.trim() || 'TESTE Widget';
    var u = GW.user || {}; var cid, raiz;
    GW.log('1/4 · Criando comunidade "' + nome + '"…', 'mut');
    GW.post('/api/community/add', { hash_key: u.hash_key || u.id, title: nome, description: 'Comunidade criada pelo Gerador de Wiki (teste).' })
      .then(function (r) { cid = GW.idDe(r); if (!cid) throw new Error('sem ID na resposta: ' + JSON.stringify(r).slice(0, 300)); GW.log('Comunidade criada · id ' + cid, 'ok'); return GW.esperar(1500); })
      .then(function () { GW.log('2/4 · Lendo a árvore da Wiki…', 'mut'); return GW.post('/api/WikiTree/getfulltree', { community_id: cid }); })
      .then(function (r) {
        var lista = (r && r.result) || []; if (!Array.isArray(lista)) lista = [lista];
        lista.sort(function (a, b) { return (+a.dfs_left_value || 0) - (+b.dfs_left_value || 0); });
        raiz = lista.length ? (lista[0].id || lista[0].mid) : null;
        if (!raiz) throw new Error('página raiz não encontrada: ' + JSON.stringify(r).slice(0, 300));
        GW.log('Página raiz · id ' + raiz, 'ok'); return GW.esperar(1500);
      })
      .then(function () {
        GW.log('3/4 · Renomeando a raiz para "Capa"…', 'mut');
        return GW.post('/api/WikiTree/update', { id: raiz, community_id: cid, title: 'Capa', message: '<p><strong>Capa</strong> criada pelo Gerador de Wiki.</p>' });
      })
      .then(function () { GW.log('Capa atualizada.', 'ok'); return GW.esperar(1500); })
      .then(function () {
        GW.log('4/4 · Criando a página "01 – Workshop"…', 'mut');
        return GW.post('/api/WikiTree/addChild', { community_id: cid, parent_id: raiz, title: '01 – Workshop', message: '<p>Página de teste com <strong>negrito</strong>:</p><ul><li>item 1</li><li>item 2</li></ul>' });
      })
      .then(function (r) { GW.log('Página criada · id ' + (GW.idDe(r) || '?'), 'ok'); GW.log('Concluído. Abra a comunidade no 3DSwym e confira.', 'ok'); })
      .catch(function (e) { GW.log('Erro: ' + e.message, 'err'); })
      .then(function () { GW.ocupado = false; btn.disabled = false; });
  },

  iniciar: function () {
    var root = (window.widget && widget.body) ? widget.body : document.body;
    GW.render(root); GW.conectar();
  }
};
(function () {
  var st = document.createElement('style'); st.textContent = GW_CSS; document.head.appendChild(st);
  if (!document.getElementById('gw-fonts')) { var lk = document.createElement('link'); lk.id = 'gw-fonts'; lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=Plus+Jakarta+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap'; document.head.appendChild(lk); }
  if (window.widget && widget.body) { GW.iniciar(); }
  else if (window.widget && widget.addEvent) { widget.addEvent('onLoad', GW.iniciar); }
  else if (document.readyState !== 'loading') { GW.iniciar(); }
  else { document.addEventListener('DOMContentLoaded', GW.iniciar); }
})();
