// Gerador de Wiki 3DX — SKA + GoEngineer
// Usa a sessão do usuário logado na 3DEXPERIENCE (WAFData). Não guarda senha nem dados de cliente.
var GW_VERSAO = 'v0.6 (05/11/2026)';
var GW_BASE = 'https://hcost4.github.io/Wiki3DX/';

var GW_CSS = `
:root{--bg:#1A1A1A;--surface:#26292C;--surface-2:#222528;--surface-3:#2F3337;--line:#3A3D40;--line-strong:#4A4E53;--fg:#E4E6E8;--muted:#A5ABB1;--accent:#BAD532;--accent-soft:#33381F;--accent-ink:#141414;--bar:#141414;--ok:#BAD532;--ok-soft:#33381F;--warn:#F0B86A;--warn-soft:#3A2C17;--err:#FF7A6B;--font-display:'Space Grotesk','Segoe UI',Arial,sans-serif;--font-ui:'Plus Jakarta Sans','Segoe UI',Arial,sans-serif;--font-mono:'IBM Plex Mono',Consolas,monospace;--r:8px;--r-s:6px;color-scheme:dark}
html,body{margin:0;padding:0;background:var(--bg)!important}
#gw,#gw *{box-sizing:border-box}
#gw{background:var(--bg);color:var(--fg);font-family:var(--font-ui);font-size:15px;line-height:1.5;min-height:100vh}
#gw .topbar{background:var(--bar);border-bottom:1px solid var(--line)}
#gw .topbar .in{padding:10px 16px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
#gw .brand{display:flex;align-items:center;gap:12px;min-width:0;flex-wrap:wrap}
#gw .logo-img{display:block;height:20px;width:auto}
#gw .sep{width:1px;height:28px;background:var(--line-strong)}
#gw .brand h1{font-family:var(--font-display);font-size:18px;font-weight:600;margin:0;line-height:1.25;color:#FFF}
#gw .brand p{margin:0;font-size:12px;color:var(--muted)}
#gw .mode{font-family:var(--font-mono);font-size:11px;font-weight:600;color:var(--accent-ink);background:var(--accent);border-radius:4px;padding:3px 8px;white-space:nowrap}
#gw .wrap{padding:20px 16px 40px}
#gw .grid{display:grid;grid-template-columns:minmax(0,500px) minmax(0,1fr);gap:20px;align-items:start}
@media (max-width:960px){#gw .grid{grid-template-columns:minmax(0,1fr)}}
#gw .col{display:flex;flex-direction:column;gap:16px;min-width:0}
#gw .card{background:var(--surface);border:1px solid var(--line);border-radius:var(--r);min-width:0}
#gw .card>.hd{padding:14px 18px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
#gw .card>.hd h2{font-family:var(--font-display);font-size:15px;margin:0;font-weight:600;color:#FFF;display:flex;align-items:center;gap:10px}
#gw .num{font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--accent);background:var(--accent-soft);border-radius:6px;padding:2px 7px}
#gw .card>.bd{padding:16px 18px 18px;display:flex;flex-direction:column;gap:14px}
#gw .aux{font-size:12.5px;color:var(--muted)}
#gw label.f{display:flex;flex-direction:column;gap:5px;font-size:13px;font-weight:600}
#gw .lbl{font-size:13px;font-weight:600;display:flex;justify-content:space-between;gap:8px;align-items:baseline}
#gw .lbl small,#gw .hint{font-weight:400;color:var(--muted);font-size:12px}
#gw input[type=text],#gw input[type=email],#gw input[type=date],#gw input[type=number],#gw select,#gw textarea{font:inherit;font-weight:400;font-size:14px;color:var(--fg);background:var(--surface-2);border:1px solid var(--line);border-radius:var(--r-s);padding:9px 11px;width:100%;min-width:0}
#gw textarea{resize:vertical;min-height:64px}
#gw :focus-visible{outline:2px solid var(--accent);outline-offset:2px}
#gw .req{color:var(--accent)}
#gw .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media (max-width:480px){#gw .row2{grid-template-columns:1fr}}
#gw .seg{display:flex;border:1px solid var(--line);border-radius:var(--r-s);overflow:hidden;background:var(--surface-2)}
#gw .seg label{flex:1;display:flex;align-items:center;justify-content:center;padding:8px;font-weight:600;font-size:13px;cursor:pointer;color:var(--muted)}
#gw .seg label+label{border-left:1px solid var(--line)}
#gw .seg input{position:absolute;opacity:0;pointer-events:none}
#gw .seg label:has(input:checked){background:var(--accent);color:var(--accent-ink)}
#gw .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
#gw .tile{position:relative;display:flex;flex-direction:column;gap:2px;padding:10px 12px 10px 34px;border:1px solid var(--line);border-radius:var(--r-s);background:var(--surface-2);cursor:pointer;min-width:0}
#gw .tile input{position:absolute;opacity:0;pointer-events:none}
#gw .tile .box{position:absolute;left:11px;top:12px;width:15px;height:15px;border-radius:4px;border:1.5px solid var(--line-strong);background:var(--surface)}
#gw .tile .box svg{display:none;width:11px;height:11px;margin:1px}
#gw .tile .t{font-weight:600;font-size:13.5px;line-height:1.25}
#gw .tile .t code{font-family:var(--font-mono);font-size:12px;font-weight:600}
#gw .tile .s{font-size:11.5px;color:var(--muted);line-height:1.3;overflow-wrap:anywhere}
#gw .tile:has(input:checked){border-color:var(--accent);background:var(--accent-soft)}
#gw .tile:has(input:checked) .box{background:var(--accent);border-color:var(--accent)}
#gw .tile:has(input:checked) .box svg{display:block}
#gw .tiles.chips{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}
#gw .counts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
#gw .cnt>div:first-child{min-width:0}
@media (max-width:480px){#gw .counts{grid-template-columns:1fr}}
#gw .cnt{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px 8px 12px;border:1px solid var(--line);border-radius:var(--r-s);background:var(--surface-2)}
#gw .cnt .t{font-weight:600;font-size:13.5px;line-height:1.25}
#gw .cnt .s{font-size:11.5px;color:var(--muted)}
#gw .step{display:flex;align-items:center;border:1px solid var(--line);border-radius:7px;overflow:hidden;background:var(--surface);flex:none}
#gw .step button{all:unset;cursor:pointer;width:30px;height:32px;display:grid;place-items:center;font-size:16px;font-weight:600;color:var(--muted)}
#gw .step button:hover{background:var(--surface-3);color:var(--fg)}
#gw .step input{width:44px;border:0;border-left:1px solid var(--line);border-right:1px solid var(--line);border-radius:0;text-align:center;padding:6px 2px;background:var(--surface);font-family:var(--font-mono);-moz-appearance:textfield}
#gw .step input::-webkit-inner-spin-button,#gw .step input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
#gw .total{font-size:12.5px;color:var(--muted)}
#gw .total b{color:var(--fg)}
#gw .callout{font-size:12.5px;padding:8px 11px;border-radius:var(--r-s);background:var(--warn-soft);color:var(--warn)}
#gw .periods{display:grid;grid-template-columns:auto 1fr 1fr;gap:6px 8px;align-items:center;font-size:13px}
#gw .periods span{font-weight:600;white-space:nowrap}
#gw .periods .h{font-size:11.5px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.05em}
#gw .periods input{padding:7px 9px;font-size:13px}
@media (max-width:480px){#gw .periods{grid-template-columns:1fr 1fr}#gw .periods span{grid-column:1/-1;margin-top:4px}#gw .periods .h{display:none}}
#gw .hab{display:flex;flex-direction:column;gap:8px}
#gw .hab .it{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:11px 12px;border:1px solid var(--line);border-radius:var(--r-s);background:var(--surface-2);cursor:pointer}
#gw .hab .it:has(input:checked){border-color:var(--accent);background:var(--accent-soft)}
#gw .hab .it input{width:17px;height:17px;accent-color:var(--accent);margin:0}
#gw .hab .it .nm{font-weight:600;font-size:14px}
#gw .hab .it .ds{font-size:12px;color:var(--muted)}
#gw .hab .it .hh{font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--muted);white-space:nowrap}
#gw .hab .carga input{padding:7px 9px;font-size:13px;max-width:200px}
#gw .sugg{font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--accent);margin-left:6px}
#gw button.b{font:inherit;font-size:14px;font-weight:600;border-radius:var(--r-s);padding:9px 14px;cursor:pointer;border:1px solid var(--line);background:var(--surface);color:var(--fg)}
#gw button.b:hover{border-color:var(--line-strong)}
#gw button.primary{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
#gw button.confirm{background:var(--warn);border-color:var(--warn);color:var(--accent-ink)}
#gw button.b:disabled{opacity:.55;cursor:not-allowed}
#gw .btns{display:flex;flex-wrap:wrap;gap:8px}
#gw .stats{display:flex;flex-wrap:wrap;gap:8px}
#gw .chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font-size:12.5px;font-weight:600;background:var(--surface-3)}
#gw .chip.warn{background:var(--warn-soft);color:var(--warn)}
#gw .prev{display:grid;grid-template-columns:minmax(0,300px) minmax(0,1fr)}
@media (max-width:720px){#gw .prev{grid-template-columns:minmax(0,1fr)}}
#gw .tree{padding:12px;border-right:1px solid var(--line);display:flex;flex-direction:column;gap:2px;min-width:0;background:var(--surface-2);border-bottom-left-radius:var(--r)}
#gw .tree .community{font-size:11.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);padding:4px 8px 10px;border-bottom:1px dashed var(--line);margin-bottom:6px}
#gw .tree .community b{color:var(--fg);display:block;font-size:13.5px;text-transform:none;letter-spacing:0;margin-top:2px}
#gw .tree button{all:unset;cursor:pointer;display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:6px;font-size:13.5px;line-height:1.3;min-width:0}
#gw .tree button .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
#gw .tree button:hover{background:var(--surface-3)}
#gw .tree button[aria-current="true"]{background:var(--accent-soft);color:var(--accent);font-weight:600}
#gw .tree .open{font-family:var(--font-mono);font-size:10.5px;font-weight:600;color:var(--warn);background:var(--warn-soft);border-radius:999px;padding:0 6px;margin-left:auto;flex:none}
#gw .page{padding:20px 24px;min-width:0}
#gw .page .crumb{font-size:12px;color:var(--muted);margin-bottom:6px}
#gw .page h3.ttl{font-family:var(--font-display);font-size:20px;font-weight:600;color:#FFF;margin:0 0 12px;line-height:1.25}
#gw .doc{font-size:14.5px;max-width:72ch}
#gw .doc h4{font-size:15.5px;margin:18px 0 6px}
#gw .doc p{margin:6px 0}
#gw .doc ul,#gw .doc ol{margin:6px 0;padding-left:22px}
#gw .doc blockquote{margin:10px 0;padding:8px 12px;border-left:3px solid var(--accent);background:var(--surface-2);border-radius:0 6px 6px 0}
#gw .doc .tbl{overflow-x:auto;margin:8px 0}
#gw .doc table{border-collapse:collapse;font-size:13.5px;min-width:100%}
#gw .doc th,#gw .doc td{border:1px solid var(--line);padding:6px 9px;text-align:left;vertical-align:top}
#gw .doc th{background:var(--surface-3);font-weight:700}
#gw mark.ph{background:var(--warn-soft);color:var(--warn);border-radius:4px;padding:0 3px;font-family:var(--font-mono);font-size:.86em}
#gw mark.val{background:var(--ok-soft);color:var(--ok);border-radius:4px;padding:0 3px}
#gw .legend{font-size:12.5px;color:var(--muted);margin-top:16px;display:flex;gap:14px;flex-wrap:wrap}
#gw .conn{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
#gw .conn dt{color:var(--muted)}
#gw .conn dd{margin:0;font-family:var(--font-mono);font-size:12px;word-break:break-all}
#gw .log{font-family:var(--font-mono);font-size:12.5px;display:flex;flex-direction:column;gap:4px;max-height:320px;overflow:auto;background:var(--surface-2);border:1px solid var(--line);border-radius:var(--r-s);padding:10px 12px}
#gw .log div{display:flex;gap:8px;min-width:0}
#gw .log .s{flex:none;width:16px}
#gw .log .m{min-width:0;overflow-wrap:anywhere}
#gw .log .done .s{color:var(--ok)}
#gw .log .run .s{color:var(--muted)}
#gw .log .run .m{color:var(--muted)}
#gw .log .warn .s,#gw .log .warn .m{color:var(--warn)}
#gw .log .err .s,#gw .log .err .m{color:var(--err)}
#gw .log a{color:var(--accent);font-weight:700}
#gw .note{font-size:13px;color:var(--muted);margin:0}
#gw .foot{border-top:1px solid var(--line);padding:10px 16px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
`;

var GW_HTML = `
<div class="topbar"><div class="in">
  <div class="brand">
    <img class="logo-img" src="${GW_BASE}logo.png" alt="SKA + GoEngineer">
    <span class="sep" aria-hidden="true"></span>
    <div><h1>Gerador de Wiki</h1><p>Implantação 3DEXPERIENCE · a partir do Template Wiki da SKA</p></div>
  </div>
  <span class="mode">${GW_VERSAO}</span>
</div></div>
<div class="wrap"><div class="grid">
  <form class="col" id="form" autocomplete="off">
    <section class="card">
      <div class="hd"><h2><span class="num">01</span>Comunidade</h2></div>
      <div class="bd">
        <div class="seg" role="radiogroup" aria-label="Comunidade de destino">
          <label><input type="radio" name="cmode" value="new" checked>Criar nova</label>
          <label><input type="radio" name="cmode" value="ex">Usar existente</label>
        </div>
        <div class="row2" id="c-new">
          <label class="f">Nome da comunidade<input type="text" id="cname"></label>
          <label class="f">Visibilidade<select id="cvis"><option value="Secreta">Secreta</option></select><span class="hint">Privada: alterar depois no 3DSwym.</span></label>
        </div>
        <label class="f" id="c-ex" hidden>Link da comunidade existente<span class="hint">Abra a comunidade no 3DSwym e copie o endereço da barra. Você precisa ser administrador dela.</span>
          <input type="text" id="cexist" placeholder="https://…/community/swym:prd:…:community:XXXX/…">
        </label>
      </div>
    </section>
    <section class="card">
      <div class="hd"><h2><span class="num">02</span>Projeto</h2></div>
      <div class="bd">
        <div class="row2">
          <label class="f">Cliente <span class="hint">obrigatório</span><input type="text" id="cliente" placeholder="Nome do cliente"></label>
          <label class="f">Ambiente<select id="ambiente"><option>On Cloud</option><option>On Premise</option></select></label>
        </div>
        <label class="f">Objetivo da implantação<textarea id="objetivo" placeholder="Ex.: implantar a gestão dos dados de engenharia (SOLIDWORKS) na 3DEXPERIENCE, com controle de revisão, ciclo de vida e colaboração entre as equipes."></textarea></label>
        <div><div class="lbl">Roles contratadas <small id="roles-n"></small></div><div class="tiles" id="roles" style="margin-top:6px"></div></div>
        <div><div class="lbl">Áreas envolvidas <small id="areas-n"></small></div><div class="tiles chips" id="areas" style="margin-top:6px"></div>
          <input type="text" id="areaOutra" placeholder="Outra área (opcional)" style="margin-top:8px"></div>
        <div><div class="lbl">Usuários por perfil <small class="total" id="users-total"></small></div><div class="counts" id="users" style="margin-top:6px"></div></div>
        <div><div class="lbl">Fora do escopo</div><div class="tiles chips" id="fora" style="margin-top:6px"></div>
          <input type="text" id="foraOutro" placeholder="Outro item fora do escopo (opcional)" style="margin-top:8px"></div>
      </div>
    </section>
    <section class="card">
      <div class="hd"><h2><span class="num">03</span>Períodos das etapas</h2><span class="aux">Opcional</span></div>
      <div class="bd"><div class="periods" id="periods"><span></span><span class="h">Início</span><span class="h">Fim</span></div>
        <p class="note">O que ficar em branco vira campo a preencher na Wiki.</p></div>
    </section>
    <section class="card">
      <div class="hd"><h2><span class="num">04</span>Equipe</h2></div>
      <div class="bd">
        <div class="row2"><label class="f">Gerente do projeto (SKA)<input type="text" id="gerente"></label><label class="f">E-mail<input type="email" id="gerenteMail"></label></div>
        <div class="row2"><label class="f">Especialista de implantação (SKA)<input type="text" id="especialista"></label><label class="f">E-mail<input type="email" id="especialistaMail"></label></div>
        <div class="row2"><label class="f">Responsável do projeto (cliente)<input type="text" id="resp"></label><label class="f">E-mail<input type="email" id="respMail"></label></div>
        <label class="f">Key users (cliente)<input type="text" id="keyusers" placeholder="Nomes separados por vírgula"></label>
      </div>
    </section>
    <section class="card">
      <div class="hd"><h2><span class="num">05</span>Habilitações contratadas</h2></div>
      <div class="bd"><div class="hab" id="hab"></div></div>
    </section>
  </form>
  <div class="col">
    <section class="card">
      <div class="hd"><h2>Prévia da Wiki</h2><div class="stats" id="summary"></div></div>
      <div class="prev"><nav class="tree" id="tree"></nav><article class="page" id="page"></article></div>
    </section>
    <section class="card">
      <div class="hd"><h2>Gerar na 3DEXPERIENCE</h2>
        <div class="btns"><button type="button" class="b" id="copy">Copiar plano (JSON)</button><button type="button" class="b primary" id="gen" disabled>Gerar Wiki</button></div>
      </div>
      <div class="bd">
        <dl class="conn"><dt>Conexão</dt><dd id="c-amb">verificando…</dd><dt>3DSwym</dt><dd id="c-swym">—</dd><dt>Usuário</dt><dd id="c-user">—</dd></dl>
        <p class="note">Cria a comunidade e as páginas com a sua credencial, na ordem da prévia. Leva cerca de 1 minuto. No fim, a comunidade abre em outra aba.</p>
        <div class="log" id="log" hidden></div>
      </div>
    </section>
  </div>
</div></div>
<div class="foot">SKA + GoEngineer · 3DEXPERIENCE</div>
`;

var GW = {
  WAF: null, swymUrl: null, tk: null, user: null, ocupado: false, armado: false,

  // ---------- utilidades ----------
  $: function (id) { return document.getElementById(id); },
  esc: function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); },
  esperar: function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); },
  log: function (msg, tipo, html) {
    var box = GW.$('log'); if (!box) return; box.hidden = false;
    var cls = { ok: 'done', mut: 'run', warn: 'warn', err: 'err' }[tipo || 'mut'];
    var sym = { ok: '✓', mut: '›', warn: '!', err: '✕' }[tipo || 'mut'];
    var row = document.createElement('div'); row.className = cls;
    row.innerHTML = '<span class="s">' + sym + '</span><span class="m">' + (html ? msg : GW.esc(msg)) + '</span>';
    box.appendChild(row); box.scrollTop = box.scrollHeight;
  },

  // ---------- chamadas ao 3DSwym ----------
  req: function (metodo, caminho, dados, csrf) {
    return new Promise(function (ok, falha) {
      var h = { 'Accept': 'application/json' };
      if (dados) h['Content-Type'] = 'application/json';
      if (csrf) h['X-DS-SWYM-CSRFTOKEN'] = csrf;
      GW.WAF.authenticatedRequest(GW.swymUrl + caminho, {
        method: metodo, type: 'json', headers: h, timeout: 60000,
        data: dados ? JSON.stringify(dados) : undefined,
        onComplete: function (r) { if (typeof r === 'string') { try { r = JSON.parse(r); } catch (e) {} } ok(r); },
        onFailure: function (err, resp) { var m = (err && err.message ? err.message : String(err)).replace(/\?[^"\s]+/g, ''); falha(new Error(m + (resp ? ' · ' + JSON.stringify(resp).slice(0, 300) : ''))); },
        onTimeout: function () { falha(new Error('tempo esgotado')); }
      });
    });
  },
  csrf: function (renovar) {
    if (GW.tk && !renovar) return Promise.resolve(GW.tk);
    return GW.req('GET', '/api/index/tk').then(function (r) { GW.tk = r.result.ServerToken; return GW.tk; });
  },
  comToken: function (fn) {
    return GW.csrf().then(fn).catch(function (e) {
      if (/CSRF/.test(e.message)) { GW.log('Token recusado, renovando…', 'warn'); return GW.csrf(true).then(fn); }
      if (/429/.test(e.message)) { GW.log('Plataforma pediu uma pausa, tentando de novo em 5 s…', 'warn'); return GW.esperar(5000).then(function () { return GW.csrf().then(fn); }); }
      throw e;
    });
  },
  get: function (c) { return GW.comToken(function (tk) { return GW.req('GET', c, null, tk); }); },
  post: function (c, params) { return GW.comToken(function (tk) { return GW.req('POST', c, { params: params }, tk); }); },
  idDe: function (r) { var x = (r && r.result) || r || {}; return x.id || x.mid || (x.result && x.result.id) || null; },
  tenant: function () { return (GW.swymUrl.split('//')[1] || '').split('-')[0].toUpperCase(); },
  linkComunidade: function (cid) { return GW.swymUrl + '/community/swym:prd:' + GW.tenant() + ':community:' + cid + '/wiki'; },

  // ---------- conexão ----------
  acharSwym: function (Compass, Plat) {
    function comPrazo(p, ms) { return Promise.race([p, new Promise(function (_, f) { setTimeout(function () { f(new Error('sem resposta em ' + ms / 1000 + 's')); }, ms); })]); }
    var porReferrer = function () {
      var m = (document.referrer || '').match(/^https:\/\/([^\/]+)-ifwe\.([^\/]+)/);
      return m ? Promise.resolve('https://' + m[1] + '-3dswym.' + m[2]) : Promise.reject(new Error('endereço do dashboard não disponível'));
    };
    var porPlataforma = function () {
      return comPrazo(new Promise(function (ok, falha) {
        if (!Plat) return falha(new Error('módulo indisponível'));
        Plat.getPlatformServices({
          onComplete: function (l) { l = Array.isArray(l) ? l : [l]; var p = l.filter(function (x) { return x && x['3DSwym']; })[0]; p ? ok(p['3DSwym']) : falha(new Error('3DSwym não listado')); },
          onFailure: function (e) { falha(new Error(String(e))); }
        });
      }), 8000);
    };
    var porCompass = function () {
      return comPrazo(new Promise(function (ok, falha) {
        var pid = (window.widget && widget.getValue) ? widget.getValue('x3dPlatformId') : undefined;
        Compass.getServiceUrl({ serviceName: '3DSwym', platformId: pid,
          onComplete: function (u) { if (Array.isArray(u)) u = (u[0] && u[0].url) || ''; u ? ok(u) : falha(new Error('vazio')); },
          onFailure: function (e) { falha(new Error(String(e))); } });
      }), 8000);
    };
    return porReferrer().catch(function (e) { GW.log('Busca 1 (endereço do dashboard): ' + e.message, 'warn'); return porPlataforma(); })
      .catch(function (e) { GW.log('Busca 2 (serviços da plataforma): ' + e.message, 'warn'); return porCompass(); });
  },
  conectar: function () {
    var set = function (id, v) { var e = GW.$(id); if (e) e.textContent = v; };
    if (typeof require !== 'function') { set('c-amb', 'fora da 3DEXPERIENCE (só prévia)'); return; }
    require(['DS/WAFData/WAFData', 'DS/i3DXCompassServices/i3DXCompassServices'], function (WAF, Compass) {
      GW.WAF = WAF; set('c-amb', '3DDashboard');
      var seguir = function (Plat) {
        GW.acharSwym(Compass, Plat).then(function (u) {
          GW.swymUrl = String(u).replace(/\/$/, ''); set('c-swym', GW.swymUrl.replace('https://', ''));
          return GW.get('/api/user/getcurrent');
        }).then(function (r) {
          var u = (r && r.result) || r || {}; GW.user = u;
          set('c-user', (u.first_name || '') + ' ' + (u.last_name || '') + ' · ' + (u.login || ''));
          var esp = GW.$('especialista'), mail = GW.$('especialistaMail');
          if (esp && !esp.value) esp.value = ((u.first_name || '') + ' ' + (u.last_name || '')).trim();
          if (mail && !mail.value && u.email) mail.value = u.email;
          GW.$('gen').disabled = false; FORM.render();
        }).catch(function (e) { set('c-user', 'erro'); GW.log('Falha na conexão: ' + e.message, 'err'); });
      };
      require(['DS/i3DXCompassPlatformServices/i3DXCompassPlatformServices'], seguir, function () { seguir(null); });
    }, function (e) { set('c-amb', 'sem módulos da plataforma'); GW.log('Módulos da plataforma indisponíveis: ' + e, 'err'); });
  },

  // ---------- geração ----------
  limparHtml: function (h) { return h.replace(/\n\s{0,}/g, '').trim(); },
  idDoLink: function (txt) {
    txt = (txt || '').trim(); var m = txt.match(/community:([A-Za-z0-9_-]{10,})/);
    if (m) return m[1]; return /^[A-Za-z0-9_-]{10,}$/.test(txt) ? txt : null;
  },
  clicarGerar: function () {
    var btn = GW.$('gen'); if (GW.ocupado) return;
    var b = FORM.build(), d = b.d;
    if (!d.cliente) { GW.log('Preencha o nome do cliente antes de gerar.', 'warn'); GW.$('cliente').focus(); return; }
    if (d.cmode === 'ex' && !GW.idDoLink(d.cexist)) { GW.log('Cole o link da comunidade existente (bloco 01).', 'warn'); GW.$('cexist').focus(); return; }
    if (!GW.armado) {
      GW.armado = true; btn.className = 'b confirm';
      btn.textContent = 'Confirmar: ' + (d.cmode === 'new' ? 'criar comunidade + ' : '') + b.pages.length + ' páginas';
      setTimeout(function () { if (GW.armado && !GW.ocupado) { GW.armado = false; btn.className = 'b primary'; btn.textContent = 'Gerar Wiki'; } }, 8000);
      return;
    }
    GW.armado = false; GW.gerar(b);
  },
  gerar: async function (b) {
    var btn = GW.$('gen'), d = b.d, pages = b.pages, u = GW.user || {}, cid, raiz, ids = {}, total = pages.length;
    GW.ocupado = true; btn.disabled = true; btn.className = 'b primary'; btn.textContent = 'Gerando…';
    GW.$('log').innerHTML = '';
    try {
      if (d.cmode === 'new') {
        GW.log('Criando comunidade "' + d.cname + '"…');
        var rc = await GW.post('/api/community/add', { hash_key: u.hash_key || u.id, title: d.cname, description: 'Implantação 3DEXPERIENCE – ' + d.cliente + ' · SKA + GoEngineer' });
        cid = GW.idDe(rc); if (!cid) throw new Error('a plataforma não devolveu o ID da comunidade: ' + JSON.stringify(rc).slice(0, 300));
        GW.log('Comunidade criada (Secreta).', 'ok');
      } else {
        cid = GW.idDoLink(d.cexist); GW.log('Usando a comunidade existente · id ' + cid, 'ok');
      }
      await GW.esperar(1500);
      var rt = await GW.post('/api/WikiTree/getfulltree', { community_id: cid });
      var lista = (rt && rt.result) || []; if (!Array.isArray(lista)) lista = [lista];
      lista.sort(function (a, c) { return (+a.dfs_left_value || 0) - (+c.dfs_left_value || 0); });
      raiz = lista[0]; if (!raiz) throw new Error('página raiz da Wiki não encontrada');
      var raizId = raiz.id || raiz.mid, raizLivre = d.cmode === 'new' || /default root page/i.test(raiz.title || '');
      for (var i = 0; i < pages.length; i++) {
        var p = pages[i], n = (i + 1) + '/' + total + ' · ';
        await GW.esperar(1200);
        var corpo = GW.limparHtml(p.bodyPlain);
        if (p.k === 'capa' && raizLivre) {
          GW.log(n + 'Capa: ' + p.title);
          await GW.post('/api/WikiTree/update', { id: raizId, community_id: cid, title: p.title, published: 1, message: corpo });
          ids.capa = raizId;
        } else {
          var pai = p.k === 'capa' ? raizId : ids[p.parent];
          if (!pai) throw new Error('página pai de "' + p.title + '" não foi criada');
          GW.log(n + p.title);
          var rp = await GW.post('/api/WikiTree/addChild', { community_id: cid, parent_id: pai, title: p.title, published: 1, message: corpo });
          ids[p.k] = GW.idDe(rp); if (!ids[p.k]) throw new Error('sem ID para "' + p.title + '": ' + JSON.stringify(rp).slice(0, 200));
        }
      }
      GW.log('Wiki gerada: ' + total + ' páginas.', 'ok');
      var url = GW.linkComunidade(cid);
      GW.log('<a href="' + url + '" target="_blank" rel="noopener">→ Abrir a comunidade</a>', 'ok', true);
      var w = null; try { w = window.open(url, '_blank', 'noopener'); } catch (e) {}
      if (!w) GW.log('O navegador bloqueou a aba nova. Use o link acima.', 'warn');
    } catch (e) {
      GW.log('Erro: ' + e.message, 'err');
      if (cid) GW.log('O que já foi criado continua na comunidade. Confira antes de gerar de novo.', 'warn');
    }
    GW.ocupado = false; btn.disabled = false; btn.textContent = 'Gerar Wiki';
  },

  iniciar: function () {
    var root = (window.widget && widget.body) ? widget.body : document.body;
    root.innerHTML = '<div id="gw">' + GW_HTML + '</div>';
    FORM.init(); GW.conectar();
  }
};

// ---------- formulário + template (Template Wiki da SKA) ----------
var FORM = (function () {
  var $ = GW.$, esc = GW.esc;
  var CHECK = '<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2l2.2 2.2 4.8-4.8" stroke="#141414" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ROLES = [
    { k: 'PCS', n: 'Bundle da plataforma', def: true }, { k: 'UES', n: 'Collaborative Designer for SOLIDWORKS', def: true },
    { k: 'IFW', n: '3DSwymer' }, { k: 'CSV', n: 'Collaborative Industry Innovator', def: true },
    { k: 'XEN', n: 'Product Release Engineer' }, { k: 'CCM', n: 'Classification Manager' },
    { k: 'XPP', n: 'Project Planner' }, { k: 'DPM', n: 'Project Manager' },
    { k: 'CHG', n: 'Change Manager' }, { k: 'MDG', n: 'Mechanical Designer (CATIA)' }
  ];
  var AREAS = [{ k: 'Engenharia de Produto', def: true }, { k: 'Engenharia de Processos' }, { k: 'Manufatura / Produção' }, { k: 'Qualidade' }, { k: 'Compras / Suprimentos' }, { k: 'PCP' }, { k: 'TI' }, { k: 'Comercial' }];
  var FORA = [{ k: 'Integração com ERP', def: true }, { k: 'Migração total do legado' }, { k: 'Customizações / desenvolvimento' }, { k: 'Treinamento CATIA' }, { k: 'Outras unidades / plantas' }];
  var PERFIS = [
    { k: 'proj', n: 'Projetistas', s: 'SOLIDWORKS + UES', v: 0, sing: 'projetista', plur: 'projetistas' },
    { k: 'col', n: 'Colaboradores', s: 'Consulta e colaboração', v: 0, sing: 'colaborador', plur: 'colaboradores' },
    { k: 'adm', n: 'Administradores', s: 'Gestão da plataforma', v: 0, sing: 'administrador', plur: 'administradores' },
    { k: 'ges', n: 'Gestores de projeto', s: 'Planejamento', v: 0, sing: 'gestor de projeto', plur: 'gestores de projeto' }
  ];
  var ETAPAS = [{ k: 'p1', label: '01 – Workshop' }, { k: 'p2', label: '02 – Regras de Negócio' }, { k: 'p3', label: '03 – Capacitação' }, { k: 'p4', label: '04 – Projeto Piloto' }, { k: 'p5', label: '05 – Hyper Care' }];
  var HABS = [
    { k: 'ues', nome: 'Colaboração Projetista SOLIDWORKS', ds: 'Projetistas', horas: 16, def: true },
    { k: 'col', nome: 'Colaboração na 3DEXPERIENCE', ds: 'Usuários que consultam e colaboram', horas: null, def: true },
    { k: 'adm', nome: 'Administração da Plataforma', ds: 'Administradores', horas: 4, def: true },
    { k: 'pp', nome: 'Planejamento de Projeto', ds: 'Gestores de projeto · se contratado', horas: 8, def: false }
  ];
  var ppTouched = false, current = 'capa';

  function tile(group, id, title, sub, checked) {
    return `<label class="tile"><input type="checkbox" name="${group}" id="${id}" value="${esc(title)}" ${checked ? 'checked' : ''}><span class="box" aria-hidden="true">${CHECK}</span><span class="t">${title}</span>${sub ? `<span class="s">${esc(sub)}</span>` : ''}</label>`;
  }
  function init() {
    $('roles').innerHTML = ROLES.map(function (r) { return tile('role', 'role-' + r.k, `<code>${r.k}</code>`, r.n, r.def); }).join('');
    $('areas').innerHTML = AREAS.map(function (a, i) { return tile('area', 'area-' + i, esc(a.k), '', a.def); }).join('');
    $('fora').innerHTML = FORA.map(function (a, i) { return tile('fora', 'fora-' + i, esc(a.k), '', a.def); }).join('');
    $('users').innerHTML = PERFIS.map(function (p) {
      return `<div class="cnt"><div><div class="t">${p.n}</div><div class="s">${p.s}</div></div><div class="step"><button type="button" data-d="-1" data-k="${p.k}" aria-label="Diminuir ${p.n}">−</button><input type="number" id="u-${p.k}" min="0" max="999" value="${p.v}" aria-label="${p.n}"><button type="button" data-d="1" data-k="${p.k}" aria-label="Aumentar ${p.n}">+</button></div></div>`;
    }).join('');
    $('users').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-k]'); if (!b) return;
      var inp = $('u-' + b.dataset.k); inp.value = Math.max(0, (parseInt(inp.value, 10) || 0) + parseInt(b.dataset.d, 10)); render();
    });
    var pEl = $('periods');
    ETAPAS.forEach(function (e) {
      var s = document.createElement('span'); s.textContent = e.label; pEl.appendChild(s);
      ['ini', 'fim'].forEach(function (w) { var inp = document.createElement('input'); inp.type = 'date'; inp.id = e.k + '-' + w; inp.setAttribute('aria-label', e.label + (w === 'ini' ? ' · início' : ' · fim')); pEl.appendChild(inp); });
    });
    $('hab').innerHTML = HABS.map(function (h) {
      return `<label class="it"><input type="checkbox" id="hab-${h.k}" ${h.def ? 'checked' : ''}><div><div class="nm">${h.nome}<span class="sugg" id="sugg-${h.k}" hidden>sugerida</span></div><div class="ds">${h.ds}</div></div><div class="hh">${h.horas ? h.horas + 'h' : 'a definir'}</div></label>` +
        (h.k === 'col' ? `<div class="carga" style="display:flex;flex-direction:column;gap:6px;padding:0 2px 4px 41px"><label class="f" style="font-size:12.5px">Carga contratada da Colaboração<input type="text" id="cargaCol" placeholder="ex.: 6h"></label><div class="callout" id="col-call" hidden></div></div>` : '');
    }).join('');
    $('hab-pp').addEventListener('change', function () { ppTouched = true; });
    ['role-XPP', 'role-DPM'].forEach(function (id) { $(id).addEventListener('change', function () { if (!ppTouched) $('hab-pp').checked = $('role-XPP').checked || $('role-DPM').checked; }); });
    $('form').addEventListener('input', render);
    $('form').addEventListener('change', render);
    $('form').addEventListener('submit', function (e) { e.preventDefault(); });
    $('copy').addEventListener('click', copiar);
    $('gen').addEventListener('click', GW.clicarGerar);
    render();
  }

  var fmt = function (v) { if (!v) return ''; var a = v.split('-'); return a[2] + '/' + a[1]; };
  var join = function (arr) { return arr.length <= 1 ? (arr[0] || '') : arr.slice(0, -1).join(', ') + ' e ' + arr[arr.length - 1]; };
  function data() {
    var v = function (id) { return ($(id).value || '').trim(); };
    var checked = function (name) { return Array.prototype.slice.call(document.querySelectorAll('#gw input[name=' + name + ']:checked')).map(function (i) { return i.value; }); };
    var roles = ROLES.filter(function (r) { return $('role-' + r.k).checked; });
    var areas = checked('area'); if (v('areaOutra')) areas.push(v('areaOutra'));
    var fora = checked('fora'); if (v('foraOutro')) fora.push(v('foraOutro'));
    var users = {}; PERFIS.forEach(function (p) { users[p.k] = Math.max(0, parseInt($('u-' + p.k).value, 10) || 0); });
    var usersTxt = PERFIS.filter(function (p) { return users[p.k] > 0; }).map(function (p) { return users[p.k] + ' ' + (users[p.k] === 1 ? p.sing : p.plur); });
    var d = {
      cmode: document.querySelector('#gw input[name=cmode]:checked').value,
      cliente: v('cliente'), ambiente: v('ambiente'), objetivo: v('objetivo'),
      roles: roles, pacote: roles.map(function (r) { return r.k; }).join(' + '), areas: areas, areasTxt: join(areas), fora: fora, foraTxt: join(fora),
      users: users, usersTxt: usersTxt.join(' · '), usersTotal: Object.keys(users).reduce(function (a, k) { return a + users[k]; }, 0),
      gerente: v('gerente'), gerenteMail: v('gerenteMail'), especialista: v('especialista'), especialistaMail: v('especialistaMail'),
      resp: v('resp'), respMail: v('respMail'), keyusers: v('keyusers'), cargaCol: v('cargaCol'), hab: {}, per: {}
    };
    HABS.forEach(function (h) { d.hab[h.k] = $('hab-' + h.k).checked; });
    ETAPAS.forEach(function (e) { var a = fmt(v(e.k + '-ini')), b = fmt(v(e.k + '-fim')); d.per[e.k] = (a && b) ? a + ' – ' + b : ''; });
    d.cname = v('cname') || ('Implantação 3DEXPERIENCE – ' + (d.cliente || '[Cliente]'));
    d.cvis = v('cvis'); d.cexist = v('cexist');
    return d;
  }
  function placeholders(d) {
    return {
      'Cliente': d.cliente, 'Ambiente': d.ambiente, 'Objetivo': d.objetivo, 'Pacote': d.pacote, 'Áreas': d.areasTxt,
      'Usuários': d.usersTxt, 'Fora do escopo': d.foraTxt,
      'Período 01': d.per.p1, 'Período 02': d.per.p2, 'Período 03': d.per.p3, 'Período 04': d.per.p4, 'Período 05': d.per.p5,
      'Gerente SKA': d.gerente, 'E-mail gerente': d.gerenteMail, 'Especialista SKA': d.especialista, 'E-mail especialista': d.especialistaMail,
      'Responsável cliente': d.resp, 'E-mail responsável': d.respMail, 'Key users': d.keyusers, 'Carga colaboração': d.cargaCol
    };
  }
  function horasCap(d) {
    var n = 0; HABS.forEach(function (h) { if (d.hab[h.k] && h.horas) n += h.horas; });
    var s = n + 'h'; if (d.hab.col) s += d.cargaCol ? ' + ' + d.cargaCol + ' (Colaboração)' : ' + Colaboração (a definir)';
    return s;
  }

  var T = function (title, parent, body, cond) { return { title: title, parent: parent, body: body, cond: cond || function () { return true; } }; };
  var tbl = function (head, rows) { return `<div class="tbl"><table><thead><tr>${head.map(function (h) { return `<th>${h}</th>`; }).join('')}</tr></thead><tbody>${rows.map(function (r) { return `<tr>${r.map(function (c) { return `<td>${c}</td>`; }).join('')}</tr>`; }).join('')}</tbody></table></div>`; };
  var versao = function () { return tbl(['Versão', 'Data', 'Aprovado por ([Cliente])'], [['[01]', '[dd/mm/aaaa]', '[Nome – Cargo]']]); };
  function habPage(obj, pub, carga, qtd, sessoes) {
    return `<h4>🎯 Objetivo desta habilitação</h4><p>${obj}</p>
    <h4>📌 Informações da habilitação</h4><ul><li>👥 <b>Público:</b> ${pub}${qtd ? ` (${qtd})` : ''}</li><li>⏱️ <b>Carga horária:</b> ${carga}</li><li>🧑‍🏫 <b>Instrutor:</b> [Especialista SKA]</li></ul>
    <h4>🗓️ Sessões</h4>${tbl(['Sessão', 'Data', 'Status'], sessoes.map(function (s) { return [s, '[dd/mm/aaaa]', '🔴']; }))}
    <blockquote>💡 <i><b>Como usar:</b> clique na sessão desejada na árvore ao lado para acessar a gravação, o material e o resumo.</i></blockquote>`;
  }
  var PAGES = {
    capa: T('🚀 Implantação 3DEXPERIENCE – [Cliente] 🟡', null, function (d) { return `
      <h4>🎯 Objetivo desta Wiki</h4>
      <p>Este espaço foi criado para centralizar <b>toda a documentação da implantação da plataforma 3DEXPERIENCE [Ambiente] na [Cliente]</b>.</p>
      <p>Aqui ficam registrados os <b>workshops, as regras de negócio aprovadas, os materiais de capacitação, o projeto piloto e as dúvidas do acompanhamento</b>, em uma estrutura padronizada e organizada por etapa.</p>
      <h4>📌 Objetivo da implantação</h4><p>[Objetivo]</p>
      <h4>📦 Escopo contratado</h4>
      <ul><li>☁️ <b>Roles contratadas:</b> [Pacote]</li><li>🏭 <b>Áreas envolvidas:</b> [Áreas]</li><li>👥 <b>Usuários:</b> [Usuários]</li><li>🚫 <b>Fora do escopo:</b> [Fora do escopo]</li></ul>
      <h4>🗓️ Etapas da implantação</h4>
      ${tbl(['Etapa', 'Esforço previsto', 'Período', 'Status'], [
        ['01 – Workshop / Engajamento', '32h (24h preparação + 8h execução)', '[Período 01]', '🔴'],
        ['02 – Regras de Negócio (AS-IS + TO-BE)', '80h (40h + 40h)', '[Período 02]', '🔴'],
        ['03 – Capacitação (Habilitações)', horasCap(d), '[Período 03]', '🔴'],
        ['04 – Projeto Piloto', '40h', '[Período 04]', '🔴'],
        ['05 – Hyper Care', '24h', '[Período 05]', '🔴']])}
      <blockquote>🟢 <i>concluída</i> · 🟡 <i>em andamento</i> · 🔴 <i>não iniciada</i></blockquote>
      <h4>📄 O que você encontrará aqui?</h4>
      <ul><li><b>01 – Workshop:</b> apresentação do Workshop de Engajamento;</li><li><b>02 – Regras de Negócio:</b> como a [Cliente] trabalha hoje (<b>AS-IS</b>) e como vai trabalhar na plataforma (<b>TO-BE</b>);</li><li><b>03 – Capacitação:</b> gravações e resumos de cada treinamento;</li><li><b>04 – Projeto Piloto:</b> <b>Use Case</b> aprovado e registro da execução;</li><li><b>05 – Hyper Care:</b> dúvidas frequentes do acompanhamento.</li></ul>
      <h4>👥 Equipe do projeto</h4>
      ${tbl(['Papel', 'Nome', 'Contato'], [
        ['Gerente do projeto (SKA)', '[Gerente SKA]', '[E-mail gerente]'],
        ['Especialista de implantação (SKA)', '[Especialista SKA]', '[E-mail especialista]'],
        ['Responsável do projeto ([Cliente])', '[Responsável cliente]', '[E-mail responsável]'],
        ['Key users ([Cliente])', '[Key users]', '[e-mails]']])}
      <h4>🔄 Atualização</h4><p>Esta Wiki é <b>atualizada ao final de cada etapa</b> pela equipe SKA, mantendo sempre a versão vigente dos documentos aprovados.</p>
      <blockquote>💡 <i><b>Dúvidas sobre a implantação:</b> fale com [Especialista SKA] ([E-mail especialista]).</i></blockquote>`; }),
    e01: T('🤝 01 – Workshop de Engajamento 🔴', 'capa', function () { return `
      <h4>🎯 Objetivo desta etapa</h4>
      <p>O Workshop apresenta aos <b>usuários que vão utilizar a plataforma</b> o que a [Cliente] adquiriu, por meio de uma <b>demonstração montada sobre um projeto real da [Cliente]</b>.</p>
      <h4>📌 Informações do Workshop</h4>
      <ul><li>🗓️ <b>Data:</b> [dd/mm/aaaa]</li><li>📍 <b>Local:</b> [Presencial / Online]</li><li>⏱️ <b>Duração:</b> 8h de execução (24h de preparação pela equipe SKA)</li><li>👥 <b>Áreas participantes:</b> [Áreas]</li><li>🧑‍🏫 <b>Condução:</b> [Especialista SKA]</li></ul>
      <h4>📎 Material do Workshop</h4><p><b>Apresentação:</b> [Anexar PDF da apresentação]</p><p><b>Gravação:</b> [Anexar printscreen da gravação e link do OneDrive]</p>
      <blockquote>💡 <i><b>Próximo passo:</b> os temas apresentados aqui são aprofundados na etapa <b>02 – Regras de Negócio (AS-IS)</b>.</i></blockquote>`; }),
    e02: T('📐 02 – Regras de Negócio 🔴', 'capa', function () { return `
      <h4>🎯 Objetivo desta etapa</h4>
      <p>As Regras de Negócio definem <b>como a [Cliente] trabalha hoje</b> e <b>como vai trabalhar dentro da plataforma 3DEXPERIENCE</b>.</p>
      <ul><li>🔎 <b>AS-IS:</b> levantamento do cenário atual (40h);</li><li>🚀 <b>TO-BE:</b> desenho do processo futuro na plataforma (40h).</li></ul>
      <h4>📄 O que você encontrará aqui?</h4>
      <ul><li><b>AS-IS:</b> documento do cenário atual, aprovado e assinado;</li><li><b>TO-BE:</b> documento do processo futuro, aprovado na apresentação do <b>Use Case</b> (04).</li></ul>
      <blockquote>💡 <i><b>Importante:</b> as configurações da plataforma e o Projeto Piloto seguem o que foi aprovado no <b>TO-BE</b>.</i></blockquote>`; }),
    asis: T('🔎 AS-IS 🔴', 'e02', function () { return `
      <h4>🎯 Objetivo desta Wiki</h4><p>Esta Wiki reúne o documento que descreve <b>como os processos da [Cliente] funcionam antes da implantação</b> da 3DEXPERIENCE.</p>
      <h4>📌 O que o documento contempla</h4><ol><li><b>Objetivo</b></li><li><b>Organizacional</b></li><li><b>Configurações</b></li><li><b>Processos</b></li><li><b>Revisão do documento</b></li><li><b>Assinaturas</b></li></ol>
      <h4>📎 Documento</h4><p><b>AS-IS – [Cliente]:</b> [Anexar PDF do documento assinado]</p>${versao()}`; }),
    tobe: T('🚀 TO-BE 🔴', 'e02', function () { return `
      <h4>🎯 Objetivo desta Wiki</h4><p>Esta Wiki reúne o documento que descreve <b>como os processos da [Cliente] vão funcionar na plataforma 3DEXPERIENCE</b>.</p>
      <h4>📌 O que o documento contempla</h4><ol><li><b>Objetivo da documentação</b></li><li><b>Aplicabilidade</b></li><li><b>Pessoas e Organizações</b></li><li><b>Colaboração Estruturada</b></li><li><b>Colaboração de Conteúdo</b></li><li><b>Centro de Configurações dos Espaços Colaborativos</b></li><li><b>Fluxograma Geral</b></li><li><b>Fluxograma Projeto 3D/2D</b></li><li><b>Revisão de Objetos</b></li><li><b>Fluxo de Aprovações</b> <i>(quando aplicável)</i></li><li><b>Revisão do documento</b></li><li><b>Assinaturas</b></li></ol>
      <h4>📎 Documento</h4><p><b>TO-BE – [Cliente]:</b> [Anexar PDF do documento aprovado no Use Case]</p>${versao()}`; }),
    e03: T('🎓 03 – Capacitação 🔴', 'capa', function (d) {
      var rows = [];
      if (d.hab.ues) rows.push(['🛠️ Colaboração Projetista SOLIDWORKS na 3DEXPERIENCE', 'Projetistas' + (d.users.proj ? ` (${d.users.proj})` : ''), '16h', '🔴']);
      if (d.hab.col) rows.push(['🤝 Colaboração na 3DEXPERIENCE', 'Usuários que consultam e colaboram' + (d.users.col ? ` (${d.users.col})` : ''), '[Carga colaboração]', '🔴']);
      if (d.hab.adm) rows.push(['⚙️ Administração da Plataforma 3DEXPERIENCE', 'Administradores' + (d.users.adm ? ` (${d.users.adm})` : ''), '4h', '🔴']);
      if (d.hab.pp) rows.push(['📅 Planejamento de Projeto na 3DEXPERIENCE', 'Gestores de projeto' + (d.users.ges ? ` (${d.users.ges})` : ''), '8h', '🔴']);
      return `<h4>🎯 Objetivo desta etapa</h4>
      <p>As Habilitações preparam os usuários da [Cliente] para <b>trabalhar na plataforma 3DEXPERIENCE conforme o processo aprovado no TO-BE</b>.</p>
      <p>Cada sessão é <b>gravada e registrada nesta Wiki</b>, com o material de apoio e um <b>resumo do conteúdo</b>.</p>
      <h4>📚 Habilitações contratadas</h4>${rows.length ? tbl(['Habilitação', 'Público', 'Carga horária', 'Status'], rows) : '<p><i>Nenhuma habilitação selecionada.</i></p>'}
      <h4>🗓️ Sessões realizadas</h4>${tbl(['Sessão', 'Habilitação', 'Data', 'Status'], [['01 – [Tema da sessão]', '[Habilitação]', '[dd/mm/aaaa]', '🔴']])}
      <blockquote>💡 <i><b>Dica:</b> antes de abrir um chamado, consulte a gravação e o resumo da sessão relacionada ao tema.</i></blockquote>`; }),
    ues: T('🛠️ Colaboração Projetista SOLIDWORKS na 3DEXPERIENCE 🔴', 'e03', function (d) { return habPage(
      'Capacitar os <b>projetistas</b> da [Cliente] a trabalhar com o <b>SOLIDWORKS conectado à plataforma 3DEXPERIENCE</b>, conforme o processo aprovado no TO-BE.',
      'Projetistas', '16h', d.users.proj ? d.users.proj + ' usuários' : '',
      ['01 – Acesso e Ambiente', '02 – Ambiente Colaborativo', '03 – Relações', '04 – Estrutura de Produto', '05 – Collaboration for Microsoft', '06 – Ciclo de Vida', '07 – Revisão', '08 – Produtividade', '09 – Migração de Projeto']); }, function (d) { return d.hab.ues; }),
    col: T('🤝 Colaboração na 3DEXPERIENCE 🔴', 'e03', function (d) { return habPage(
      'Capacitar os <b>usuários que consultam e colaboram</b> na [Cliente] a <b>navegar, pesquisar, visualizar e comentar</b> modelos e desenhos na plataforma, sempre na <b>versão vigente</b>.',
      'Usuários que consultam e colaboram', '[Carga colaboração]', d.users.col ? d.users.col + ' usuários' : '',
      ['01 – Navegação, pesquisa e visualização de modelos e desenhos']); }, function (d) { return d.hab.col; }),
    adm: T('⚙️ Administração da Plataforma 3DEXPERIENCE 🔴', 'e03', function (d) { return habPage(
      'Capacitar os <b>administradores</b> da [Cliente] a <b>gerenciar usuários, licenças, credenciais e espaços colaborativos</b>.',
      'Administradores da plataforma', '4h', d.users.adm ? d.users.adm + (d.users.adm === 1 ? ' usuário' : ' usuários') : '',
      ['01 – Gestão de membros, licenças e espaços colaborativos']); }, function (d) { return d.hab.adm; }),
    pp: T('📅 Planejamento de Projeto na 3DEXPERIENCE 🔴', 'e03', function (d) { return habPage(
      'Capacitar os <b>gestores de projeto</b> da [Cliente] a <b>planejar e acompanhar projetos</b> na plataforma, com cronograma, tarefas e entregáveis.',
      'Gestores de projeto', '8h', d.users.ges ? d.users.ges + ' usuários' : '',
      ['01 – Criação do projeto, cronograma e tarefas', '02 – Acompanhamento e entregáveis']); }, function (d) { return d.hab.pp; }),
    e04: T('🧪 04 – Projeto Piloto 🔴', 'capa', function () { return `
      <h4>🎯 Objetivo desta etapa</h4>
      <p>O Projeto Piloto coloca <b>em prática, junto com a [Cliente], tudo o que foi desenhado no TO-BE</b>, utilizando um <b>projeto real</b> da [Cliente].</p>
      <ul><li>📋 <b>Use Case:</b> apresentação de como a 3DEXPERIENCE vai funcionar no processo da [Cliente], com a <b>aprovação do TO-BE</b>;</li><li>▶️ <b>Execução do Piloto:</b> realização do piloto na prática, até o <b>Go-Live funcional</b>.</li></ul>
      <h4>📌 Informações da etapa</h4><ul><li>⏱️ <b>Esforço previsto:</b> 40h</li><li>🗓️ <b>Período:</b> [Período 04]</li></ul>
      <blockquote>💡 <i><b>Importante:</b> o piloto só é executado <b>após a aprovação do Use Case e do TO-BE</b>.</i></blockquote>`; }),
    uc: T('📋 Use Case 🔴', 'e04', function () { return `
      <h4>🎯 Objetivo desta Wiki</h4><p>Esta Wiki reúne o <b>Use Case aprovado pela [Cliente]</b>, que mostra <b>como a plataforma vai funcionar no dia a dia</b>. Nesta apresentação, a [Cliente] também <b>aprova o documento TO-BE</b>.</p>
      <h4>📎 Documento</h4><p><b>Use Case – [Cliente]:</b> [Anexar PDF da apresentação]</p>${versao()}
      <h4>✅ Aprovação do TO-BE</h4><ul><li>🗓️ <b>Data da apresentação:</b> [dd/mm/aaaa]</li><li>👤 <b>Aprovado por:</b> [Nome – Cargo]</li><li>📄 <b>Documento aprovado:</b> TO-BE – [Cliente] (versão [01])</li></ul>`; }),
    exe: T('▶️ Execução do Piloto 🔴', 'e04', function () { return `
      <h4>🎯 Objetivo desta Wiki</h4><p>Esta Wiki registra a <b>execução do Projeto Piloto</b>, realizada <b>junto com a [Cliente]</b> e seguindo o Use Case aprovado.</p>
      <h4>📌 Informações do piloto</h4><ul><li>📂 <b>Projeto utilizado:</b> [Nome / código do projeto]</li><li>🗓️ <b>Período:</b> [Período 04]</li><li>👥 <b>Participantes:</b> [Key users]</li><li>🧑‍🏫 <b>Acompanhamento SKA:</b> [Especialista SKA]</li></ul>
      <h4>🎥 Gravações</h4>${tbl(['Sessão', 'Data', 'Gravação'], [['01 – [Fase executada]', '[dd/mm/aaaa]', '[Link do OneDrive]']])}
      <h4>🏁 Go-Live funcional</h4><ul><li>🗓️ <b>Data do Go-Live funcional:</b> [dd/mm/aaaa]</li><li>✅ <b>Validado por:</b> [Nome – Cargo]</li></ul>`; }),
    e05: T('🛟 05 – Hyper Care 🔴', 'capa', function () { return `
      <h4>🎯 Objetivo desta etapa</h4><p>O Hyper Care é o <b>acompanhamento da [Cliente] após o Go-Live funcional</b>, para <b>tirar dúvidas e apoiar os usuários</b> no início do uso da plataforma.</p>
      <h4>📌 Informações da etapa</h4><ul><li>⏱️ <b>Esforço previsto:</b> 24h</li><li>🗓️ <b>Período:</b> [Período 05]</li><li>🧑‍🏫 <b>Acompanhamento SKA:</b> [Especialista SKA]</li></ul>
      <h4>💬 Como pedir apoio?</h4><ol><li>Consulte a <b>gravação e o resumo</b> da sessão em <b>03 – Capacitação</b>;</li><li>Verifique se a dúvida já está em <b>Dúvidas Frequentes (FAQ)</b>;</li><li>Se não encontrar, fale com [Especialista SKA] ([E-mail especialista]).</li></ol>
      <blockquote>💡 <i><b>Após o Hyper Care</b>, o atendimento passa a ser feito pelos <b>canais de suporte do site ska.com.br</b>.</i></blockquote>`; }),
    faq: T('❓ Dúvidas Frequentes (FAQ) 🔴', 'e05', function () { return `
      <h4>🎯 Objetivo desta Wiki</h4><p>Esta Wiki reúne as <b>dúvidas mais comuns</b> dos usuários da [Cliente] durante o Hyper Care, com a <b>resposta e a sessão de capacitação relacionada</b>.</p>
      <h4>❓ Perguntas e respostas</h4>${tbl(['Pergunta', 'Resposta', 'Sessão relacionada'], [['[Pergunta]', '[Resposta]', '[Sessão]']])}`; })
  };
  var ORDER = ['capa', 'e01', 'e02', 'asis', 'tobe', 'e03', 'ues', 'col', 'adm', 'pp', 'e04', 'uc', 'exe', 'e05', 'faq'];

  var RX = /\[([^\[\]]{1,60})\]/g;
  function fill(str, map, html) { return str.replace(RX, function (m, k) { var v = map[k]; if (v) return html ? `<mark class="val">${esc(v)}</mark>` : esc(v); return html ? `<mark class="ph">${esc(m)}</mark>` : m; }); }
  function fillTitle(str, map) { return str.replace(RX, function (m, k) { return map[k] || m; }); }
  function countOpen(str, map) { var n = 0; str.replace(RX, function (m, k) { if (!map[k]) n++; return m; }); return n; }
  var plain = function (s) { return s.replace(/<[^>]+>/g, ''); };
  function build() {
    var d = data(), map = placeholders(d);
    var pages = ORDER.filter(function (k) { return PAGES[k].cond(d); }).map(function (k) {
      var p = PAGES[k], raw = p.body(d);
      return { k: k, parent: p.parent, title: fillTitle(p.title, map), titleHtml: fill(p.title, map, true), body: fill(raw, map, true), bodyPlain: fill(raw, map, false), open: countOpen(plain(raw) + p.title, map) };
    });
    return { d: d, pages: pages };
  }
  function depth(p, pages) { var n = 0, c = p; while (c && c.parent) { n++; c = pages.filter(function (x) { return x.k === c.parent; })[0]; } return n; }
  function render() {
    var b = build(), d = b.d, pages = b.pages;
    if (!pages.some(function (p) { return p.k === current; })) current = 'capa';
    $('c-new').hidden = d.cmode !== 'new'; $('c-ex').hidden = d.cmode !== 'ex';
    $('cname').placeholder = 'Implantação 3DEXPERIENCE – ' + (d.cliente || '[Cliente]');
    $('roles-n').textContent = d.roles.length ? d.roles.length + ' selecionadas' : 'nenhuma selecionada';
    $('areas-n').textContent = d.areas.length ? d.areas.length + ' selecionadas' : 'nenhuma selecionada';
    $('users-total').innerHTML = 'Total: <b>' + d.usersTotal + '</b> usuários';
    $('sugg-pp').hidden = !(($('role-XPP').checked || $('role-DPM').checked) && !ppTouched && d.hab.pp);
    var call = $('col-call');
    if (d.hab.col && d.users.col > 5) { call.hidden = false; call.textContent = 'São ' + d.users.col + ' colaboradores: acima de 5 usuários, a carga da Colaboração aumenta. Confira o escopo antes de preencher.'; }
    else call.hidden = true;
    var open = pages.reduce(function (a, p) { return a + p.open; }, 0), habs = HABS.filter(function (h) { return d.hab[h.k]; }).length;
    $('summary').innerHTML = `<span class="chip">${pages.length} páginas</span><span class="chip">${habs} habilitações</span><span class="chip warn" title="Campos preenchidos durante o projeto">${open} campos a preencher depois</span>`;
    var t = $('tree'); t.innerHTML = '';
    var c = document.createElement('div'); c.className = 'community';
    c.innerHTML = d.cmode === 'new' ? `Comunidade nova · ${esc(d.cvis)}<b>${esc(d.cname)}</b>` : `Comunidade existente<b>${esc(d.cexist ? 'id ' + (GW.idDoLink(d.cexist) || 'link inválido') : 'cole o link no bloco 01')}</b>`;
    t.appendChild(c);
    pages.forEach(function (p) {
      var bt = document.createElement('button'); bt.type = 'button';
      bt.style.paddingLeft = (8 + depth(p, pages) * 16) + 'px';
      bt.setAttribute('aria-current', p.k === current ? 'true' : 'false');
      bt.innerHTML = `<span class="t">${esc(p.title)}</span>` + (p.open ? `<span class="open" title="Campos a preencher">${p.open}</span>` : '');
      bt.addEventListener('click', function () { current = p.k; render(); });
      t.appendChild(bt);
    });
    var p = pages.filter(function (x) { return x.k === current; })[0];
    var chain = [], cur = p; while (cur && cur.parent) { cur = pages.filter(function (x) { return x.k === cur.parent; })[0]; if (cur) chain.unshift(cur.title); }
    $('page').innerHTML = `<div class="crumb">${chain.length ? esc(chain.join(' › ')) : 'Página principal da Wiki'}</div><h3 class="ttl">${p.titleHtml}</h3><div class="doc">${p.body}</div>
      <div class="legend"><span><mark class="val">verde</mark> preenchido pelo formulário</span><span><mark class="ph">[amarelo]</mark> preenchido durante o projeto</span></div>`;
  }
  function copiar() {
    var b = build(), d = b.d, pages = b.pages, btn = $('copy');
    var com = d.cmode === 'new' ? { acao: 'criar_comunidade', titulo: d.cname, visibilidade: d.cvis } : { acao: 'usar_comunidade', id: GW.idDoLink(d.cexist) };
    var plano = { gerado_em: new Date().toISOString(), versao: GW_VERSAO, cliente: d.cliente,
      escopo: { roles: d.roles.map(function (r) { return r.k; }), areas: d.areas, usuarios: d.users, fora_do_escopo: d.fora },
      comunidade: com,
      paginas: pages.map(function (p) { var par = p.parent ? pages.filter(function (x) { return x.k === p.parent; })[0] : null; return { chave: p.k, titulo: p.title, pai: par ? par.title : null, conteudo_html: GW.limparHtml(p.bodyPlain) }; }) };
    var txt = JSON.stringify(plano, null, 2);
    var ok = function () { btn.textContent = 'Plano copiado'; setTimeout(function () { btn.textContent = 'Copiar plano (JSON)'; }, 2200); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, function () { mostrar(txt); });
    else mostrar(txt);
    function mostrar(t) { var log = $('log'); log.hidden = false; log.textContent = t; btn.textContent = 'Plano no quadro abaixo'; }
  }
  return { init: init, render: render, build: build };
})();

(function () {
  var st = document.createElement('style'); st.textContent = GW_CSS; document.head.appendChild(st);
  if (!document.getElementById('gw-fonts')) {
    var lk = document.createElement('link'); lk.id = 'gw-fonts'; lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=Plus+Jakarta+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(lk);
  }
  if (window.widget && widget.body) { GW.iniciar(); }
  else if (window.widget && widget.addEvent) { widget.addEvent('onLoad', GW.iniciar); }
  else if (document.readyState !== 'loading') { GW.iniciar(); }
  else { document.addEventListener('DOMContentLoaded', GW.iniciar); }
})();
