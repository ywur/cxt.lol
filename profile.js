const CX_FONTS = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Unbounded:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:wght@500;600;700&family=Rubik:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');";

const CX_STYLE = CX_FONTS + `
  *{margin:0;padding:0;box-sizing:border-box;}
  .cx-stage{position:relative;min-height:100%;width:100%;display:flex;align-items:center;justify-content:center;padding:2.2rem 1.2rem;overflow:hidden;}
  .cx-canvas{position:absolute;inset:0;pointer-events:none;z-index:0;width:100%;height:100%;}
  .cx-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:520px;height:520px;border-radius:50%;pointer-events:none;z-index:0;opacity:0;transition:opacity .8s ease;background:radial-gradient(circle,var(--cx-accent,#fff) 0%,transparent 70%);}
  .cx-glow.show{opacity:.09;}
  .cx-grain{position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0;transition:opacity .8s ease;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-repeat:repeat;background-size:256px 256px;}
  .cx-grain.show{opacity:.05;}
  .cx-cursor{position:absolute;width:220px;height:220px;border-radius:50%;pointer-events:none;z-index:0;mix-blend-mode:screen;background:radial-gradient(circle,var(--cx-accent,#fff) 0%,transparent 70%);opacity:.12;transform:translate(-50%,-50%);left:0;top:0;display:none;}
  .cx-cursor.show{display:block;}
  .cx-trail-dot{position:absolute;width:6px;height:6px;border-radius:50%;background:var(--cx-accent,#fff);pointer-events:none;z-index:0;animation:cxFade .6s ease-out forwards;}
  @keyframes cxFade{to{opacity:0;transform:scale(.3);}}

  .cx-card{position:relative;z-index:1;width:100%;max-width:470px;border-radius:var(--cx-radius,26px);overflow:hidden;background:rgba(16,16,19,calc(.78*var(--cx-card-opacity,1)));border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 24px 70px rgba(0,0,0,.55);font-family:var(--cx-font,Inter),system-ui,sans-serif;}
  .cx-card.solid{background:rgba(15,15,17,var(--cx-card-opacity,1));backdrop-filter:none;}
  .cx-card.minimal{background:transparent;backdrop-filter:none;box-shadow:none;border-color:rgba(255,255,255,.07);}
  .cx-card.gradient{border:none;background:linear-gradient(165deg,rgba(255,255,255,calc(.07*var(--cx-card-opacity,1))) 0%,rgba(255,255,255,calc(.02*var(--cx-card-opacity,1))) 45%,rgba(255,255,255,0) 100%);}
  .cx-card.cx-t0{border-color:transparent;box-shadow:none;backdrop-filter:none;-webkit-backdrop-filter:none;background:transparent;}
  .cx-card.cx-t0.border-glow{animation:none;box-shadow:none;}
  .cx-card.cx-t0 .cx-banner{background:transparent;}
  .cx-card.cx-t0 .cx-banner::after{background:linear-gradient(180deg,transparent 40%,transparent 100%);}
  .cx-card.cx-p0 .cx-panel,.cx-card.cx-p0 .cx-panel:hover{border-color:transparent;background:transparent;}
  .cx-card.cx-p0 .cx-panel{backdrop-filter:none;-webkit-backdrop-filter:none;}
  .cx-card.cx-p0 .cx-yt{background:transparent;}
  .cx-card.border-glow{box-shadow:0 0 30px rgba(255,255,255,.05),0 0 70px rgba(255,255,255,.04);animation:cxBorderPulse 3s ease-in-out infinite;}
  @keyframes cxBorderPulse{0%,100%{box-shadow:0 0 20px rgba(255,255,255,.04),0 0 45px rgba(255,255,255,.02)}50%{box-shadow:0 0 45px rgba(255,255,255,.09),0 0 90px rgba(255,255,255,.05)}}
  .cx-card.animate-in{animation:cxCardIn .7s cubic-bezier(.23,1,.32,1) both;}
  @keyframes cxCardIn{from{opacity:0;transform:translateY(26px) scale(.97);}to{opacity:1;transform:translateY(0) scale(1);}}

  .cx-banner{width:100%;height:100px;background:rgba(255,255,255,.05);overflow:hidden;position:relative;}
  .cx-banner.has-banner{height:118px;}
  .cx-banner img{width:100%;height:100%;object-fit:cover;display:block;opacity:.9;}
  .cx-banner::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(10,10,12,.55) 100%);pointer-events:none;}

  .cx-head{display:flex;flex-direction:column;align-items:center;padding:0 1.4rem 1.2rem;margin-top:-46px;position:relative;z-index:2;}
  .cx-avatar-wrap{position:relative;margin-bottom:.7rem;}
  .cx-avatar{width:104px;height:104px;border-radius:50%;object-fit:cover;border:3px solid #0e0e10;outline:1.5px solid rgba(255,255,255,.18);display:block;background:rgba(255,255,255,.08);box-shadow:0 8px 30px rgba(0,0,0,.5);}
  .cx-avatar.fallback{display:flex;align-items:center;justify-content:center;font-size:2.4rem;font-weight:800;color:rgba(255,255,255,.85);}
  .cx-deco{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.22);width:104px;height:104px;pointer-events:none;z-index:3;object-fit:contain;}

  .cx-name-row{display:flex;align-items:center;justify-content:center;gap:.5rem;flex-wrap:wrap;text-align:center;}
  .cx-name{font-size:1.55rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;color:var(--cx-name-color,#fff);}
  .cx-name.pos{position:relative;}
  .cx-badge{display:inline-flex;align-items:center;gap:.25rem;font-size:.6rem;font-weight:700;letter-spacing:.05em;padding:.22rem .5rem;border-radius:99px;vertical-align:middle;}
  .cx-badge.staff{background:#fff;color:#000;}
  .cx-title{font-size:.95rem;font-weight:600;margin-top:.35rem;color:var(--cx-accent,#fff);letter-spacing:.01em;}
  .cx-meta{display:flex;align-items:center;justify-content:center;gap:.7rem;margin-top:.5rem;flex-wrap:wrap;}
  .cx-meta-item{display:flex;align-items:center;gap:.3rem;font-size:.72rem;color:rgba(255,255,255,.4);}
  .cx-bio{font-size:.83rem;color:rgba(255,255,255,.62);margin-top:.8rem;text-align:center;max-width:330px;line-height:1.6;white-space:pre-wrap;word-break:break-word;}

  .cx-widgets{display:flex;flex-direction:column;gap:.7rem;padding:0 1.1rem 1.2rem;}
  .cx-widget{animation:cxWidgetIn .5s cubic-bezier(.23,1,.32,1) both;animation-delay:calc(.1s * var(--i,0));}
  @keyframes cxWidgetIn{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}

  .cx-buttons{display:flex;flex-direction:column;gap:.6rem;}
  .cx-btn{display:flex;align-items:center;gap:.65rem;padding:.9rem 1.1rem;border-radius:15px;background:var(--cx-accent,#fff);font-weight:700;font-size:.9rem;text-decoration:none;transition:transform .15s,opacity .2s,box-shadow .2s;border:none;cursor:pointer;font-family:inherit;}
  .cx-btn:hover{transform:translateY(-1px);opacity:.92;box-shadow:0 10px 30px rgba(0,0,0,.35);}
  .cx-btn:active{transform:translateY(0) scale(.99);}
  .cx-btn .cx-emoji{font-size:1.15rem;line-height:1;}
  .cx-btn .cx-arr{margin-left:auto;opacity:.45;flex-shrink:0;}
  .cx-btn.outline{background:transparent;color:var(--cx-accent,#fff);border:1.5px solid var(--cx-accent,#fff);}
  .cx-btn.outline:hover{background:var(--cx-accent,#fff);color:var(--cx-accent-contrast,#000);}
  .cx-btn.soft{background:rgba(255,255,255,.07);color:#fff;border:1px solid rgba(255,255,255,.12);}
  .cx-btn.soft:hover{background:rgba(255,255,255,.12);}

  .cx-socials{display:flex;justify-content:center;flex-wrap:wrap;gap:.55rem;}
  .cx-socials-wrap{background:transparent;border:none;box-shadow:none;backdrop-filter:none;-webkit-backdrop-filter:none;}
  .cx-soc{width:44px;height:44px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:rgba(255,255,255,.78);text-decoration:none;transition:color .2s,transform .2s,opacity .2s;}
  .cx-soc:hover{background:transparent;color:var(--cx-accent,#fff);transform:translateY(-2px);opacity:1;}
  .cx-soc svg{transition:transform .2s;}
  .cx-soc:hover svg{transform:scale(1.12);}

  .cx-discord{display:flex;align-items:center;gap:.85rem;padding:.85rem 1rem;}
  .cx-dpfp{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.07);flex-shrink:0;position:relative;overflow:hidden;}
  .cx-dpfp img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
  .cx-dpfp .cx-fallback{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-weight:700;color:rgba(255,255,255,.6);font-size:1rem;}
  .cx-dot{position:absolute;bottom:-1px;right:-1px;width:13px;height:13px;border-radius:50%;border:2.5px solid #0e0e10;background:#747f8d;z-index:2;}
  .cx-dot.offline{background:#747f8d;}.cx-dot.online{background:#3ba55c;}.cx-dot.dnd{background:#ed4245;}.cx-dot.idle{background:#faa81a;}
  .cx-dhandle{font-size:.88rem;font-weight:700;color:rgba(255,255,255,.92);}
  .cx-dhandle span{color:rgba(255,255,255,.35);font-weight:500;}
  .cx-dicon{opacity:.25;margin-left:auto;flex-shrink:0;}

  .cx-music{padding:1rem 1.1rem .95rem;}
  .cx-now{display:flex;align-items:center;gap:.8rem;margin-bottom:.8rem;}
  .cx-eq{display:flex;align-items:flex-end;gap:3px;height:22px;flex-shrink:0;}
  .cx-eq i{width:3.5px;border-radius:2px;background:var(--cx-accent,#fff);animation:cxEq 1s ease-in-out infinite;opacity:.85;}
  .cx-eq i:nth-child(1){height:45%;animation-delay:0s;}
  .cx-eq i:nth-child(2){height:100%;animation-delay:.15s;}
  .cx-eq i:nth-child(3){height:65%;animation-delay:.3s;}
  .cx-eq i:nth-child(4){height:85%;animation-delay:.45s;}
  .cx-eq i:nth-child(5){height:50%;animation-delay:.6s;}
  @keyframes cxEq{0%,100%{transform:scaleY(.4);}50%{transform:scaleY(1);}}
  .cx-minfo{flex:1;min-width:0;}
  .cx-tname{font-size:.88rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .cx-tartist{font-size:.72rem;color:rgba(255,255,255,.45);}
  .cx-play{width:44px;height:44px;border-radius:50%;background:var(--cx-accent,#fff);color:#000;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;flex-shrink:0;transition:transform .15s,opacity .2s;}
  .cx-play:hover{transform:scale(1.05);opacity:.92;}
  .cx-prog{height:4px;background:rgba(255,255,255,.1);border-radius:99px;cursor:pointer;position:relative;}
  .cx-prog-fill{height:100%;background:var(--cx-accent,#fff);border-radius:99px;width:0%;pointer-events:none;}
  .cx-times{display:flex;justify-content:space-between;font-size:.62rem;color:rgba(255,255,255,.3);margin-top:5px;}
  .cx-vol{display:flex;align-items:center;gap:.6rem;margin-top:.7rem;padding-top:.6rem;border-top:1px solid rgba(255,255,255,.06);}
  .cx-vol svg{opacity:.25;flex-shrink:0;}
  .cx-vol input{flex:1;-webkit-appearance:none;appearance:none;height:3px;background:rgba(255,255,255,.12);border-radius:99px;outline:none;cursor:pointer;}
  .cx-vol input::-webkit-slider-thumb{-webkit-appearance:none;width:11px;height:11px;border-radius:50%;background:var(--cx-accent,#fff);cursor:pointer;}
  .cx-vol input::-moz-range-thumb{width:11px;height:11px;border:none;border-radius:50%;background:var(--cx-accent,#fff);cursor:pointer;}

  .cx-count{display:flex;align-items:center;gap:.9rem;padding:.95rem 1.1rem;}
  .cx-count-c{display:flex;align-items:center;gap:.5rem;}
  .cx-count-c div{display:flex;flex-direction:column;align-items:center;min-width:38px;}
  .cx-count-c b{font-size:1.1rem;font-weight:800;font-variant-numeric:tabular-nums;color:#fff;line-height:1.05;}
  .cx-count-c span{font-size:.58rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.4);margin-top:.15rem;}
  .cx-count-c i{font-style:normal;color:rgba(255,255,255,.25);font-size:1rem;padding-top:0;}
  .cx-count-label{flex:1;text-align:right;font-size:.72rem;font-weight:600;color:var(--cx-accent,#fff);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .cx-count.done .cx-count-c{opacity:.4;}
  .cx-count.done .cx-count-label::after{content:' ✓';}

  .cx-text{padding:1.05rem 1.1rem;}
  .cx-text-t{font-size:.84rem;font-weight:700;color:#fff;margin-bottom:.3rem;}
  .cx-text-b{font-size:.78rem;color:rgba(255,255,255,.6);line-height:1.6;white-space:pre-wrap;word-break:break-word;}

  .cx-yt{padding:.65rem;background:rgba(0,0,0,calc(.35*var(--cx-panel-opacity,1)));}
  .cx-yt-16{position:relative;width:100%;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;}
  .cx-yt-16 iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}

  .cx-footer{text-align:center;padding:1.1rem 1.4rem 1.4rem;font-size:.66rem;color:rgba(255,255,255,.22);}
  .cx-footer a{color:inherit;text-decoration:none;}
  .cx-footer a:hover{color:rgba(255,255,255,.5);}
  .cx-stats{display:flex;justify-content:center;gap:1.4rem;margin-bottom:.5rem;}
  .cx-stat{text-align:center;}
  .cx-stat b{display:block;font-size:.85rem;font-weight:700;color:rgba(255,255,255,.6);}
  .cx-stat span{font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.25);}

  .cx-panel{background:rgba(255,255,255,calc(.05*var(--cx-panel-opacity,1)));border:1px solid rgba(255,255,255,.08);border-radius:18px;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);transition:background .22s,border-color .22s,transform .22s;}
  .cx-panel:hover{background:rgba(255,255,255,calc(.08*var(--cx-panel-opacity,1)));border-color:rgba(255,255,255,.14);}

  .glitch{color:#fff;text-shadow:0 0 10px rgba(255,255,255,.4);position:relative;}
  .glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;}
  .glitch::before{animation:glitch-r .5s infinite linear alternate-reverse;clip-path:polygon(0 0,100% 0,100% 45%,0 45%);opacity:.8;color:var(--cx-accent,#fff);}
  .glitch::after{animation:glitch-r .75s infinite linear alternate-reverse;clip-path:polygon(0 55%,100% 55%,100% 100%,0 100%);opacity:.7;color:#fff;}
  @keyframes glitch-r{0%{transform:translateX(-8px)}20%{transform:translateX(14px)}35%{transform:translateX(-6px)}50%{transform:translateX(10px)}65%{transform:translateX(-4px)}80%{transform:translateX(8px)}100%{transform:translateX(-3px)}}
  .glitch{animation:glitch-main 2s infinite;}
  @keyframes glitch-main{0%,92%,100%{transform:translateX(0) skew(0deg);opacity:1}5%{transform:translateX(-4px) skew(3deg)}12%{transform:translateX(6px) skew(-4deg)}18%{transform:translateX(-3px)}25%{transform:translateX(8px) skew(2deg)}40%{transform:translateX(0)}65%{transform:translateX(-7px)}78%{transform:translateX(4px)}88%{opacity:.7}}
  .glitch.burst{animation:glitch-main 2s infinite,glitch-burst 4s infinite;}
  @keyframes glitch-burst{0%,85%,100%{filter:brightness(1)}86%{filter:brightness(2.5);transform:translateX(18px)}87%{transform:translateX(-22px)}88%{transform:translateX(8px)}89%{filter:brightness(1)}}
  .chroma-text{background:linear-gradient(90deg,#fff 0%,#ff00ff 10%,#00ffff 20%,#ffff00 30%,#00ff00 40%,#ff8800 50%,#ff00ff 60%,#00ffff 70%,#ffff00 80%,#fff 100%);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:chromaSweep 4s linear infinite;text-shadow:0 0 20px rgba(255,255,255,.5),0 0 40px rgba(255,255,255,.3);position:relative;}
  @keyframes chromaSweep{0%{background-position:0% 50%}100%{background-position:300% 50%}}
  .neon{color:#fff;text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;}
  .fire{background:linear-gradient(180deg,#ff4500 0%,#ff8c00 30%,#ffd700 60%,#ff4500 100%);background-size:100% 200%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:fireRise 1.5s ease-in-out infinite alternate;text-shadow:0 0 20px rgba(255,69,0,.8),0 0 40px rgba(255,140,0,.5);}
  @keyframes fireRise{0%{background-position:0% 100%}100%{background-position:0% 0%}}
  .frost{color:rgba(255,255,255,.85);text-shadow:0 0 10px rgba(255,255,255,.3);background:linear-gradient(135deg,rgba(255,255,255,.4) 0%,rgba(200,230,255,.1) 50%,rgba(255,255,255,.3) 100%);-webkit-background-clip:text;background-clip:text;}
  .retro{background:linear-gradient(135deg,#ff6ec7 0%,#ff6ec7 25%,#7b68ee 50%,#00d4ff 75%,#ff6ec7 100%);background-size:300% 300%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:retroShift 4s ease-in-out infinite;text-shadow:0 0 10px rgba(255,110,199,.5),4px 4px 0 rgba(123,104,238,.3);}
  @keyframes retroShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
  .matrix{color:#00ff41;text-shadow:0 0 5px #00ff41,0 0 10px #00ff41,0 0 20px #00ff41,0 0 40px #00ff41;}
  .matrix::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,65,.05) 2px,rgba(0,255,65,.05) 4px);pointer-events:none;}
  .hologram{background:linear-gradient(135deg,#ff00ff 0%,#00ffff 25%,#ffff00 50%,#ff00ff 75%,#00ffff 100%);background-size:400% 400%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:hologramShift 3s ease infinite;text-shadow:0 0 20px rgba(255,0,255,.3),0 0 40px rgba(0,255,255,.2);}
  @keyframes hologramShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
  .outline{color:transparent;-webkit-text-stroke:2px #fff;text-shadow:none;}
  .three-d{color:#fff;text-shadow:1px 1px 0 rgba(0,0,0,.3),2px 2px 0 rgba(0,0,0,.3),3px 3px 0 rgba(0,0,0,.3),4px 4px 0 rgba(0,0,0,.3),5px 5px 0 rgba(0,0,0,.3),6px 6px 0 rgba(0,0,0,.2);}
  .neon-flicker{color:#fff;text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #f09,0 0 82px #f09,0 0 92px #f09;animation:flicker 3s infinite;}
  @keyframes flicker{0%,100%{opacity:1}5%{opacity:.8}10%{opacity:1}15%{opacity:.3}20%{opacity:1}50%{opacity:.95}53%{opacity:.2}56%{opacity:1}80%{opacity:.9}83%{opacity:.4}86%{opacity:1}}
  .aurora{background:linear-gradient(135deg,#00ff87 0%,#60efff 30%,#0066ff 60%,#00ff87 100%);background-size:300% 300%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:auroraShift 6s ease-in-out infinite;text-shadow:0 0 30px rgba(0,255,135,.4);}
  @keyframes auroraShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
  .shadow-pulse{color:#fff;animation:shadowPulse 2s ease-in-out infinite;}
  @keyframes shadowPulse{0%,100%{text-shadow:0 0 10px #fff,0 0 20px #fff}50%{text-shadow:0 0 30px var(--cx-accent,#fff),0 0 60px var(--cx-accent,#fff),0 0 80px var(--cx-accent,#fff)}}
  .gradient-slide{background:linear-gradient(90deg,#fff,var(--cx-accent,#fff),#fff);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gradSlide 3s linear infinite;}
  @keyframes gradSlide{0%{background-position:0% 50%}100%{background-position:300% 50%}}
  .wave{color:#fff;display:inline-block;animation:cxWave 2.4s ease-in-out infinite;}
  @keyframes cxWave{0%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}60%{transform:translateY(2px)}}
  .sparkle{color:#fff;display:inline-block;position:relative;}
  .sparkle::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.9),transparent 18%),radial-gradient(circle at 72% 72%,rgba(255,255,255,.8),transparent 16%);animation:cxSpark 1.8s ease-in-out infinite;mix-blend-mode:screen;pointer-events:none;}
  @keyframes cxSpark{0%,100%{opacity:.12}50%{opacity:.85}}
  .blink{animation:cxBlink 1.2s step-end infinite;}
  @keyframes cxBlink{0%,100%{opacity:1}50%{opacity:.25}}
  .rainbow{background:linear-gradient(90deg,#ff2d95,#ffb300,#2dffa3,#2d9bff,#b12dff,#ff2d95);background-size:400% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:chromaSweep 5s linear infinite;}
  .glow-name{color:#fff;text-shadow:0 0 12px var(--cx-accent,#fff),0 0 30px var(--cx-accent,#fff),0 0 60px var(--cx-accent,#fff);}
`;

const CX_DECOS_BASE = 'https://raw.githubusercontent.com/ccursedd/cxt.lol/main/decorations/';

const CX_FONTS_LIST = {
  inter: { label: 'Inter', family: "'Inter',sans-serif" },
  grotesk: { label: 'Space Grotesk', family: "'Space Grotesk',sans-serif" },
  poppins: { label: 'Poppins', family: "'Poppins',sans-serif" },
  unbounded: { label: 'Unbounded', family: "'Unbounded',sans-serif" },
  mono: { label: 'JetBrains Mono', family: "'JetBrains Mono',monospace" },
  playfair: { label: 'Playfair Display', family: "'Playfair Display',serif" },
  rubik: { label: 'Rubik', family: "'Rubik',sans-serif" },
  montserrat: { label: 'Montserrat', family: "'Montserrat',sans-serif" }
};

const CX_CORE_SOCIALS = [
  { key: 'twitter', label: 'Twitter / X', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', url: v => `https://twitter.com/${v.replace('@', '')}` },
  { key: 'instagram', label: 'Instagram', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>', url: v => `https://instagram.com/${v.replace('@', '')}` },
  { key: 'youtube', label: 'YouTube', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.8 9.2.8 11.5v2.1c0 2.3.2 4.5.2 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.4 22.2 12 22.2 12 22.2s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.5v-2.1C23.2 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>', url: v => v.startsWith('http') ? v : `https://youtube.com/@${v}` },
  { key: 'github', label: 'GitHub', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.22.66-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>', url: v => `https://github.com/${v}` },
  { key: 'twitch', label: 'Twitch', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>', url: v => `https://twitch.tv/${v}` },
  { key: 'tiktok', label: 'TikTok', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>', url: v => `https://tiktok.com/@${v.replace('@', '')}` }
];

const CX_EXTRA_SOCIALS = [
  { key: 'snapchat', label: 'Snapchat', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-3.9 0-7 3.1-7 7 0 .8.1 1.5.3 2.2-.4.2-.8.3-1.3.3-1.1 0-2-.9-2-2 0-.3.1-.6.2-.9C2.1 8.3 2 8 2 7.6 2 6.2 3.2 5 4.6 5H5c.2-1.7 1.7-3 3.5-3h7c1.8 0 3.3 1.3 3.5 3h.4c1.4 0 2.6 1.2 2.6 2.6 0 .4-.1.7-.2 1.1.1.3.2.6.2.9 0 1.1-.9 2-2 2-.5 0-.9-.1-1.3-.3.2-.7.3-1.4.3-2.2 0-3.9-3.1-7-7-7zm7 8.5c.1 0 .2-.1.1-.2-.1-.2-.5-.3-.8-.3-.6 0-1.1.2-1.5.5.1.3.2.5.2.8v.1c.9-.3 1.6-.7 2-.9zM12 20c-4.4 0-8-3.6-8-8 0-.1 0-.2 0-.3C2.3 12.3 1 13.7 1 15.2c0 1 .5 1.8 1.4 2.3.3.2.6.3.9.4.2.1.3.3.3.5 0 .6 1.2 1.6 3.4 1.6.6 0 1.2.1 1.8.2.5.2.8.8 1.2 1.2.5.6 1.2 1 2 1s1.5-.4 2-1c.4-.4.7-1 1.2-1.2.6-.1 1.2-.2 1.8-.2 2.2 0 3.4-1 3.4-1.6 0-.2.1-.4.3-.5.3-.1.6-.2.9-.4.9-.5 1.4-1.3 1.4-2.3 0-1.5-1.3-2.9-3-3.5v.3c0 .3.1.5.1.8v.1c0 .1.1.2.2.2z"/></svg>', url: v => `https://snapchat.com/add/${v}` },
  { key: 'roblox', label: 'Roblox', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M15.1 4H8.9L4 20h6.1l.5-6.2L15.1 4z"/><path d="M17.4 4l-.9 3.3L20 20h-4.3l.5-5.7z" opacity=".6"/></svg>', url: v => `https://www.roblox.com/users/profile?username=${v}` },
  { key: 'spotify', label: 'Spotify', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 14.4c-.2.3-.6.4-.9.2-2.4-1.5-5.5-1.8-9.1-1-.4.1-.7-.2-.7-.5 0-.3.2-.6.5-.7 3.9-.9 7.3-.5 9.9 1.1.3.2.4.6.3.9zm1.2-2.7c-.2.4-.7.5-1.1.3-2.7-1.7-6.9-2.2-10.1-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.7-1.1 8.3-.5 11.4 1.4.4.2.5.7.3 1zm.1-2.8C15 9.2 9.5 9 6.6 9.9c-.5.1-1-.2-1.1-.7-.1-.5.2-1 .7-1.1 3.4-1.1 9.4-.8 13 1.2.4.2.6.8.4 1.2-.2.4-.8.6-1.2.3z"/></svg>', url: v => `https://open.spotify.com/user/${v}` },
  { key: 'steam', label: 'Steam', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3.1 8.4 7.4 9.6.2-.4.4-1 .4-1.6l1.8-6.2c0-.1 0-.2-.1-.2-.9-.6-1.5-1.5-1.5-2.6 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.1-.6 2-1.5 2.6l-.1.2 1.8 6.2c0 .6.2 1.2.4 1.6 4.3-1.2 7.4-5.1 7.4-9.6 0-5.5-4.5-10-10-10zM8.9 19.1l.4-1.4c-.9-.5-1.5-1.4-1.5-2.4 0-1.6 1.3-2.8 2.9-2.8.8 0 1.5.3 2 .9l1.7-5.4c.1-.3.4-.6.7-.6h1.9c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3h-1l-3.9 6.6c-.2.3-.5.5-.9.5-.6 0-1.1-.4-1.2-1zm5-6.5c.3.3.7.4 1.1.4.9 0 1.7-.8 1.7-1.7s-.8-1.7-1.7-1.7c-.4 0-.8.1-1.1.4z"/></svg>', url: v => `https://steamcommunity.com/id/${v}` },
  { key: 'reddit', label: 'Reddit', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.1c0-1.4-1.2-2.6-2.6-2.6-.7 0-1.3.3-1.8.7-1.7-1.2-4-1.9-6.5-2l1.1-3.6 3.6.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8S18.2 3.7 17.2 3.7c-.7 0-1.3.4-1.6.9l-3.9-1c-.3-.1-.6 0-.7.2L9.7 7.7c-2.6.1-5 1-6.7 2.4-.5-.5-1.1-.7-1.8-.7C-.2 9.5-1.4 10.8 0 12.1c0 .6.3 1.2.8 1.6-.1.5-.2 1-.2 1.6 0 3.9 4.9 6.8 11.4 6.8s11.4-2.9 11.4-6.8c0-.5-.1-1-.2-1.6.5-.5.8-1.1.8-1.6zM8.2 13.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8zm9.7 4.3c-1.8 1.8-5.1 2-5.9 2-.8 0-4.1-.2-5.9-2-.2-.2-.2-.5 0-.7s.5-.2.7 0c1.4 1.4 4 1.6 5.2 1.6 1.2 0 3.8-.2 5.2-1.6.2-.2.5-.2.7 0 .2.3.2.6 0 .7zm-.2-2.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"/></svg>', url: v => `https://reddit.com/user/${v}` },
  { key: 'pinterest', label: 'Pinterest', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.1.2-.3.1-1.2-.6-2-2.4-2-3.9 0-3.1 2.3-6 6.5-6 3.4 0 6.1 2.4 6.1 5.7 0 3.4-2.1 6.1-5.1 6.1-1 0-1.9-.5-2.2-1.1l-.6 2.3c-.2.8-.8 1.9-1.2 2.5.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>', url: v => `https://pinterest.com/${v}` },
  { key: 'telegram', label: 'Telegram', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.6c-.2-.8-1.1-1.1-1.8-.8L2.7 10.9c-.9.3-.8 1.6.1 1.9l4.3 1.3 1.7 5.3c.2.7 1.1 1 1.8.6l2.4-1.4 4.4 3.3c.7.5 1.7.1 1.9-.7l2.6-16zM8.9 14l10.4-7.7c.2-.1.4.2.2.3l-8.3 8.2c-.3.3-.5.7-.5 1.1l-.3 2.5c0 .3-.4.3-.5 0L9 15.1c-.1-.4 0-.8.3-1.1z"/></svg>', url: v => `https://t.me/${v}` },
  { key: 'whatsapp', label: 'WhatsApp', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.4 5.3L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.8 14.1c-.2.6-1.4 1.2-1.9 1.2-.5.1-1.1.1-1.8-.1-1.8-.5-3.8-2.1-5.1-3.6-.7-.7-1.7-1.9-1.8-3-.1-1.1.5-1.9.9-2.2.2-.2.6-.3.9-.3h.4c.2 0 .4-.1.6.4l.6 1.5c.1.2.1.4 0 .5l-.3.5c-.1.1-.2.3-.1.5.1.4.6 1 1.2 1.6.7.6 1.3 1 1.9 1.2.2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.4.8c.2.1.4.3.5.5 0 .1 0 .4-.1.5z"/></svg>', url: v => `https://wa.me/${v.replace(/\D/g, '')}` },
  { key: 'cashapp', label: 'Cash App', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 12.8c-.3.9-1.1 1.5-2.1 1.7v1.3h-1.5v-1.3c-1.1-.2-2-.7-2.6-1.4l1.4-1.2c.5.7 1.3 1.1 2.3 1.1.9 0 1.5-.4 1.5-1.1 0-.4-.2-.7-.6-.9-.4-.2-1.2-.4-2.2-.7-1.2-.3-2.2-.9-2.6-1.9-.4-1 .2-2.2 1.3-2.7V7.7h1.5v1.3c.9.2 1.6.6 2.1 1.2l-1.3 1.3c-.5-.6-1.1-.9-1.8-.9-.7 0-1.1.3-1.1.9 0 .5.4.8 1.1 1 .9.3 2 .6 2.5 1 .6.5.8 1.1.6 1.9z"/></svg>', url: v => `https://cash.app/${v.replace('$', '')}` },
  { key: 'venmo', label: 'Venmo', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4 2H4.6C3.2 2 2 3.2 2 4.6v14.8C2 20.8 3.2 22 4.6 22h14.8c1.4 0 2.6-1.2 2.6-2.6V4.6C22 3.2 20.8 2 19.4 2zm-2.4 6.1c0 .7-.5 1.2-1.1 1.2-.4 0-.7-.2-.9-.6-.2-.4-.2-.9-.2-1.3 0-.7.4-1.2 1-1.2.7 0 1.2.7 1.2 1.9zm-2.6 2.7h-2v5.8c0 .3-.1.5-.3.7-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.2-.2-.3-.4-.3-.7V10.8H8.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4.5c.5 0 .9.4.9.9s-.4.9-.9.9h1.1c.5 0 .9.4.9.9s-.4.9-.9.9z"/></svg>', url: v => `https://venmo.com/${v}` },
  { key: 'soundcloud', label: 'SoundCloud', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M1.2 14.6c0 .3.4.3.4 0v-2.3c0-.3-.4-.3-.4 0v2.3zm1.9.7c0 .2.3.2.3 0v-4.4c0-.2-.3-.2-.3 0v4.4zm1.8.4c0 .2.3.2.3 0v-5.2c0-.2-.3-.2-.3 0v5.2zm1.9.3c0 .2.2.2.2 0v-6c0-.2-.2-.2-.2 0v6zm1.8.6c0 .2.2.2.2 0v-7.1c0-.2-.2-.2-.2 0v7.1zm1.8-.2c0 .2.2.2.2 0v-7.4c0-.2-.2-.2-.2 0v7.4zm1.9.7c0 .2.1.2.1 0v-8.1c0-.2-.1-.2-.1 0v8.1zm1.8-.5c0 .2.2.2.2 0v-7.9c0-.2-.2-.2-.2 0v7.9zM7.4 14.6v.1s0 2.1 2.2 2.1h7.5c1.7 0 2.9-1.2 2.9-2.7 0-1.3-1-2.4-2.4-2.7-.4-3-3-5.4-6.2-5.4-1.1 0-2.1.3-3 .8-.2.1-.3.4-.2.6 0 .1.1.2.2.2 1.1.3 2 1.2 2.3 2.3.2.6.2 1.3 0 2-.3 1.1-1.3 1.8-2.3 2-1.5.3-1.9 1.4-1.9 2.7z"/></svg>', url: v => `https://soundcloud.com/${v}` }
];

function cxLum(hex) {
  hex = (hex || '#ffffff').replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const n = parseInt(hex, 16);
  if (isNaN(n)) return 1;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function cxOpacity(v) {
  const n = parseInt(v, 10);
  return n >= 0 && n <= 100 ? n : 100;
}

function cxEsc(s) {
  const d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}

function cxAttr(s) {
  return cxEsc(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function parseCfg(widgetOrder) {
  try {
    const j = JSON.parse(widgetOrder);
    if (j && typeof j === 'object' && !Array.isArray(j)) return j;
    if (Array.isArray(j)) return { v: 2, order: j };
  } catch (e) {}
  return { v: 3, order: ['discord', 'socials', 'links', 'music'] };
}

function mergeCfg(widgetOrder) {
  const c = parseCfg(widgetOrder);
  const order = Array.isArray(c.order) && c.order.length ? c.order : ['discord', 'socials', 'links', 'music'];
  const known = ['discord', 'socials', 'links', 'music', 'countdown', 'text', 'youtube'];
  const cleanOrder = order.filter(w => known.includes(w));
  order.forEach(w => { if (!cleanOrder.includes(w) && known.includes(w)) cleanOrder.push(w); });
  if (!cleanOrder.length) cleanOrder.push('socials');
  const radius = parseInt(c.card_radius, 10);
  const countdown = (c.countdown && (c.countdown.label || c.countdown.target))
    ? { label: c.countdown.label || '', target: c.countdown.target || '' }
    : { label: '', target: '' };
  const textWidget = (c.text_widget && (c.text_widget.title || c.text_widget.body))
    ? { title: c.text_widget.title || '', body: c.text_widget.body || '' }
    : { title: '', body: '' };
  return {
    v: 3,
    order: cleanOrder,
    title: c.title || '',
    location: c.location || '',
    age: c.age || '',
    pronouns: c.pronouns || '',
    links: Array.isArray(c.links) ? c.links.filter(l => l && (l.label || l.url)).map(l => ({ label: l.label || '', url: l.url || '', emoji: l.emoji || '' })) : [],
    badges: Array.isArray(c.badges) ? c.badges.filter(b => b && b.text).map(b => ({ text: b.text, color: b.color || '#ffffff' })) : [],
    font: c.font || 'inter',
    custom_css: c.custom_css || '',
    cursor: c.cursor || 'none',
    bg_color: c.bg_color || '',
    card_style: c.card_style || 'glass',
    name_color: c.name_color || '',
    btn_style: c.btn_style || 'solid',
    card_radius: radius > 0 ? radius : 26,
    bg_effect: c.bg_effect || '',
    show_stats: c.show_stats !== false,
    panel_opacity: cxOpacity(c.panel_opacity),
    card_opacity: cxOpacity(c.card_opacity),
    enter_gate: !!c.enter_gate,
    enter_label: c.enter_label || '',
    countdown,
    text_widget: textWidget,
    youtube: c.youtube || '',
    socials: c.socials || {}
  };
}

function cfgToDB(cfg) {
  return JSON.stringify({
    v: 3,
    order: cfg.order,
    title: cfg.title || '',
    location: cfg.location || '',
    age: cfg.age || '',
    pronouns: cfg.pronouns || '',
    links: cfg.links || [],
    badges: cfg.badges || [],
    font: cfg.font || 'inter',
    custom_css: cfg.custom_css || '',
    cursor: cfg.cursor || 'none',
    bg_color: cfg.bg_color || '',
    card_style: cfg.card_style || 'glass',
    name_color: cfg.name_color || '',
    btn_style: cfg.btn_style || 'solid',
    card_radius: cfg.card_radius || 26,
    bg_effect: cfg.bg_effect || '',
    show_stats: cfg.show_stats !== false,
    panel_opacity: cfg.panel_opacity == null ? 100 : cfg.panel_opacity,
    card_opacity: cfg.card_opacity == null ? 100 : cfg.card_opacity,
    enter_gate: !!cfg.enter_gate,
    enter_label: cfg.enter_label || '',
    countdown: cfg.countdown || { label: '', target: '' },
    text_widget: cfg.text_widget || { title: '', body: '' },
    youtube: cfg.youtube || '',
    socials: cfg.socials || {}
  });
}

const CX_DISCORD_ICON = '<svg class="cx-dicon" width="22" height="17" viewBox="0 0 71 55" fill="white"><path d="M60.1 4.9A58.5 58.5 0 0 0 45.7.7a.2.2 0 0 0-.2.1 40.7 40.7 0 0 0-1.8 3.7 53.9 53.9 0 0 0-16.2 0A37.9 37.9 0 0 0 25.6.8a.2.2 0 0 0-.2-.1A58.4 58.4 0 0 0 11 4.9a.2.2 0 0 0-.1.1C1.6 18.7-1 32.1.3 45.4a.2.2 0 0 0 .1.2 58.8 58.8 0 0 0 17.7 9 .2.2 0 0 0 .2-.1 42 42 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.7 38.7 0 0 1-5.5-2.6.2.2 0 0 1 0-.4 31 31 0 0 0 1.4-1 .2.2 0 0 1 .2 0c11.6 5.3 24.2 5.3 35.7 0a.2.2 0 0 1 .2 0 20.9 20.9 0 0 0 1.4 1 .2.2 0 0 1 0 .4 35.9 35.9 0 0 1-5.6 2.6.2.2 0 0 0-.1.3 47.1 47.1 0 0 0 3.6 5.9.2.2 0 0 0 .2.1 58.6 58.6 0 0 0 17.7-9 .2.2 0 0 0 .1-.2C72.5 29.9 69 16.6 60.2 5a.2.2 0 0 0-.1-.1ZM23.7 37.3c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.5 3.3 6.4 7.2 0 4-2.8 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.5 3.3 6.4 7.2 0 4-2.8 7.2-6.4 7.2Z"/></svg>';

function buildDiscordWidget(data) {
  const st = data.discord_status || 'offline';
  const hasPfp = data.avatar_url;
  return `<div class="cx-panel cx-discord">
    <div class="cx-dpfp">${hasPfp ? '<img src="' + cxEsc(data.avatar_url) + '" alt="">' : '<div class="cx-fallback">' + cxEsc((data.discord || '?').charAt(0).toUpperCase()) + '</div>'}<div class="cx-dot ' + st + '"></div></div>
    <div style="flex:1;min-width:0;"><div class="cx-dhandle"><span>@</span>${cxEsc(data.discord)}</div></div>
    ${CX_DISCORD_ICON}
  </div>`;
}

function buildSocialsWidget(data, cfg) {
  const all = [];
  CX_CORE_SOCIALS.forEach(s => { if (data[s.key]) all.push({ ...s, value: data[s.key] }); });
  CX_EXTRA_SOCIALS.forEach(s => { if (cfg.socials && cfg.socials[s.key]) all.push({ ...s, value: cfg.socials[s.key] }); });
  if (!all.length) return '';
  return `<div class="cx-panel cx-socials-wrap"><div class="cx-socials">${all.map(s => '<a class="cx-soc" href="' + cxEsc(s.url(s.value)) + '" target="_blank" rel="noopener" title="' + cxEsc(s.label) + '">' + s.icon + '</a>').join('')}</div></div>`;
}

function buildLinksWidget(cfg) {
  if (!cfg.links.length) return '';
  const style = cfg.btn_style && cfg.btn_style !== 'solid' ? ' ' + cfg.btn_style : '';
  return `<div class="cx-panel"><div class="cx-buttons">${cfg.links.map(l => '<a class="cx-btn' + style + '" href="' + cxEsc(l.url) + '" target="_blank" rel="noopener">' + (l.emoji ? '<span class="cx-emoji">' + cxEsc(l.emoji) + '</span>' : '') + '<span>' + cxEsc(l.label || l.url) + '</span><svg class="cx-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>').join('')}</div></div>`;
}

function buildCountdownWidget(cfg) {
  const c = cfg.countdown;
  if (!c || !c.target) return '';
  return `<div class="cx-panel cx-count" data-cx-count data-cx-target="${cxAttr(c.target)}">
    <div class="cx-count-c">
      <div><b class="cd">00</b><span>days</span></div><i>:</i>
      <div><b class="ch">00</b><span>hrs</span></div><i>:</i>
      <div><b class="cm">00</b><span>min</span></div><i>:</i>
      <div><b class="cs">00</b><span>sec</span></div>
    </div>
    ${c.label ? '<div class="cx-count-label">' + cxEsc(c.label) + '</div>' : ''}
  </div>`;
}

function buildTextWidget(cfg) {
  const t = cfg.text_widget;
  if (!t || (!t.title && !t.body)) return '';
  return `<div class="cx-panel cx-text">${t.title ? '<div class="cx-text-t">' + cxEsc(t.title) + '</div>' : ''}${t.body ? '<div class="cx-text-b">' + cxEsc(t.body) + '</div>' : ''}</div>`;
}

function youtubeId(v) {
  v = (v || '').trim();
  const m = v.match(/(?:youtube\.com\/(?:watch\?.*v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? m[1] : (/^[\w-]{6,}$/.test(v) ? v : '');
}

function buildYouTubeWidget(cfg) {
  const id = youtubeId(cfg.youtube);
  if (!id) return '';
  return `<div class="cx-panel cx-yt"><div class="cx-yt-16"><iframe src="https://www.youtube.com/embed/${id}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="YouTube video"></iframe></div></div>`;
}

function buildMusicWidget(data, preview) {
  return `<div class="cx-panel cx-music">
    <div class="cx-now">
      <div class="cx-eq"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="cx-minfo">
        <div class="cx-tname" id="cx-track-name">${cxEsc(data.audio_name || 'track')}</div>
        <div class="cx-tartist">${cxEsc(data.audio_artist || 'unknown artist')}</div>
      </div>
      <button class="cx-play" id="cx-play" title="Play">${preview ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'}</button>
    </div>
    <div class="cx-prog" id="cx-prog"><div class="cx-prog-fill" id="cx-prog-fill"></div></div>
    <div class="cx-times"><span id="cx-t-cur">0:00</span><span id="cx-t-tot">0:00</span></div>
    <div class="cx-vol">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      <input type="range" id="cx-vol" min="0" max="100" value="30">
    </div>
  </div>`;
}

function buildBadges(data, cfg) {
  const badges = [];
  if (data.rank) badges.push({ text: data.rank, color: '#ffffff', staff: true });
  cfg.badges.forEach(b => badges.push(b));
  if (!badges.length) return '';
  return `<div class="cx-name-row" style="gap:.35rem;">${badges.map(b => b.staff ? '<span class="cx-badge staff">★ ' + cxEsc(b.text) + '</span>' : '<span class="cx-badge" style="background:' + cxEsc(b.color) + ';color:' + (cxLum(b.color) > .5 ? '#000' : '#fff') + ';">' + cxEsc(b.text) + '</span>').join('')}</div>`;
}

function renderCard(host, data, cfg) {
  cfg = cfg || mergeCfg(data.widget_order);
  const accent = data.accent || '#ffffff';
  const fontFamily = (CX_FONTS_LIST[cfg.font] || CX_FONTS_LIST.inter).family;
  const cardTextColor = cxLum(accent) > .5 ? '#000' : '#fff';
  const panelOpacity = cxOpacity(cfg.panel_opacity) / 100;
  const cardOpacity = cxOpacity(cfg.card_opacity) / 100;
  const cardT0 = cardOpacity <= 0;
  const panelT0 = panelOpacity <= 0;

  const metaParts = [];
  if (cfg.location) metaParts.push('<div class="cx-meta-item"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + cxEsc(cfg.location) + '</div>');
  if (cfg.age) metaParts.push('<div class="cx-meta-item"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' + cxEsc(cfg.age) + '</div>');
  if (cfg.pronouns) metaParts.push('<div class="cx-meta-item"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' + cxEsc(cfg.pronouns) + '</div>');

  const banner = data.banner_url ? `<div class="cx-banner has-banner"><img src="${cxEsc(data.banner_url)}" alt=""></div>` : '<div class="cx-banner"></div>';

  const avatar = data.avatar_url
    ? `<img class="cx-avatar" src="${cxEsc(data.avatar_url)}" alt="">`
    : `<div class="cx-avatar fallback">${cxEsc((data.display_name || data.username || '?').charAt(0).toUpperCase())}</div>`;

  const nameText = data.display_name || data.username || '—';
  let effect = data.text_effect || '';
  if (effect === 'chroma') effect = 'chroma-text';
  const effectClass = effect ? ' ' + effect : '';
  const nameClass = 'cx-name' + (effectClass ? ' pos' : '') + effectClass;
  const nameHTML = `<span class="${nameClass}" data-text="${cxEsc(nameText)}">${cxEsc(nameText)}</span>`;

  let wi = 0;
  const ordered = [];
  const hasSocials = CX_CORE_SOCIALS.some(s => data[s.key]) || Object.values(cfg.socials || {}).some(v => v);
  cfg.order.forEach(k => { if (k !== 'socials' && !ordered.includes(k)) ordered.push(k); });
  ['discord', 'links', 'music', 'countdown', 'text', 'youtube'].forEach(k => {
    const has = (k === 'discord' && data.discord) || (k === 'links' && cfg.links.length) || (k === 'music' && data.audio_url) || (k === 'countdown' && cfg.countdown && cfg.countdown.target) || (k === 'text' && cfg.text_widget && (cfg.text_widget.title || cfg.text_widget.body)) || (k === 'youtube' && !!youtubeId(cfg.youtube));
    if (has && !ordered.includes(k)) ordered.push(k);
  });
  if (cfg.order.includes('socials') && hasSocials) ordered.push('socials');
  const widgetsHTML = ordered.map(k => {
    let w = '';
    if (k === 'discord' && data.discord) w = buildDiscordWidget(data);
    else if (k === 'socials') w = buildSocialsWidget(data, cfg);
    else if (k === 'links') w = buildLinksWidget(cfg);
    else if (k === 'music' && data.audio_url) w = buildMusicWidget(data, !!host._cxPreview);
    else if (k === 'countdown') w = buildCountdownWidget(cfg);
    else if (k === 'text') w = buildTextWidget(cfg);
    else if (k === 'youtube') w = buildYouTubeWidget(cfg);
    if (!w) return '';
    const wId = wi++;
    return `<div class="cx-widget" style="--i:${wId}">${w}</div>`;
  }).join('');

  const footerStats = cfg.show_stats ? `<div class="cx-stats">
    <div class="cx-stat"><b>${data.views || 0}</b><span>views</span></div>
    ${data.created_at ? `<div class="cx-stat"><b>${cxEsc(new Date(data.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }))}</b><span>joined</span></div>` : ''}
  </div>` : '';

  let css = '';
  if (data.background_url) css += `background-image:url("${data.background_url}");background-size:cover;background-position:center;background-attachment:fixed;`;
  else if (cfg.bg_color) css += `background:${cfg.bg_color};`;

  host.innerHTML = `<style>${CX_STYLE}</style><div class="cx-stage" style="${css}">
    <div class="cx-card ${cfg.card_style || 'glass'} ${data.border_glow ? 'border-glow' : ''}${cardT0 ? ' cx-t0' : ''}${panelT0 ? ' cx-p0' : ''} cx-prev-card" style="--cx-accent:${cxEsc(accent)};--cx-font:${fontFamily};--cx-radius:${cfg.card_radius}px;--cx-name-color:${cxEsc(cfg.name_color || '#fff')};--cx-panel-opacity:${panelOpacity};--cx-card-opacity:${cardOpacity};">
      ${banner}
      <div class="cx-head">
        <div class="cx-avatar-wrap">${avatar}${data.decoration ? '<img class="cx-deco" src="' + CX_DECOS_BASE + cxEsc(data.decoration) + '" alt="">' : ''}</div>
        <div class="cx-name-row">${nameHTML}${buildBadges(data, cfg)}</div>
        ${cfg.title ? '<div class="cx-title">' + cxEsc(cfg.title) + '</div>' : ''}
        ${metaParts.length ? '<div class="cx-meta">' + metaParts.join('') + '</div>' : ''}
        ${data.bio ? '<div class="cx-bio">' + cxEsc(data.bio) + '</div>' : ''}
      </div>
      ${widgetsHTML ? '<div class="cx-widgets">' + widgetsHTML + '</div>' : ''}
      <div class="cx-footer">${footerStats}made with <a href="/">cxt</a></div>
    </div>
  </div>`;

  if (cfg.custom_css) {
    const s = document.createElement('style');
    s.id = 'cx-user-css';
    s.textContent = cfg.custom_css;
    host.appendChild(s);
  }

  host._cxPreview = !!host._cxPreview;
  host._cxCard = host.querySelector('.cx-prev-card');
  host._cxStage = host.querySelector('.cx-stage');
  host._cxFont = fontFamily;
  host._cxAccent = accent;
  host._cxCardTextColor = cardTextColor;
  const btns = host.querySelectorAll('.cx-btn');
  if ((cfg.btn_style || 'solid') === 'solid') btns.forEach(b => b.style.color = cardTextColor);
  const plays = host.querySelectorAll('.cx-play');
  plays.forEach(p => p.style.color = cardTextColor);
}

function setupEffects(stageEl, data, cfg) {
  if (stageEl._cxCleanup) stageEl._cxCleanup();
  const doc = stageEl.ownerDocument;
  const cleanups = [];
  const rafIds = [];
  const loop = (fn) => {
    const tick = () => { fn(); rafIds.push(requestAnimationFrame(tick)); };
    rafIds.push(requestAnimationFrame(tick));
  };
  stageEl.querySelectorAll('.cx-canvas, .cx-glow, .cx-grain, .cx-cursor').forEach(el => el.remove());

  const fx = (cfg && cfg.bg_effect) ? cfg.bg_effect : (data.rain ? 'rain' : (data.particles ? 'bubbles' : ''));
  if (fx && fx !== 'none') {
    const c = doc.createElement('canvas');
    c.className = 'cx-canvas';
    stageEl.appendChild(c);
    const ctx = c.getContext('2d');
    const CONF_COLORS = ['#ff2d95', '#00e5ff', '#ffd700', '#7c5cff', '#ff6b6b', '#6bff8a'];
    let items = [];
    const mk = (w, h) => {
      items = [];
      const n = fx === 'confetti' ? 80 : fx === 'stars' ? 70 : fx === 'rain' ? Math.floor(w / 9) : 45;
      for (let i = 0; i < n; i++) {
        if (fx === 'snow') items.push({ x: Math.random() * w, y: Math.random() * h, r: 1 + Math.random() * 2.2, sy: 0.6 + Math.random() * 1.1, sx: (Math.random() - 0.5) * 0.35, o: 0.4 + Math.random() * 0.5 });
        else if (fx === 'bubbles') items.push({ x: Math.random() * w, y: Math.random() * h, r: 2 + Math.random() * 6, sy: 0.3 + Math.random() * 0.7, sx: (Math.random() - 0.5) * 0.2, o: 0.1 + Math.random() * 0.25 });
        else if (fx === 'confetti') items.push({ x: Math.random() * w, y: Math.random() * h, sy: 1 + Math.random() * 1.8, r: 3 + Math.random() * 3, a: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.2, col: CONF_COLORS[Math.floor(Math.random() * CONF_COLORS.length)], o: 0.5 + Math.random() * 0.5 });
        else if (fx === 'stars') items.push({ x: Math.random() * w, y: Math.random() * h, r: 0.5 + Math.random() * 1.5, ph: Math.random() * Math.PI * 2, sp: 0.02 + Math.random() * 0.05, o: 0.2 + Math.random() * 0.6 });
        else if (fx === 'hearts') items.push({ x: Math.random() * w, y: Math.random() * h, s: 0.6 + Math.random() * 1.1, sy: 0.3 + Math.random() * 0.7, sx: (Math.random() - 0.5) * 0.2, o: 0.25 + Math.random() * 0.4 });
        else items.push({ x: Math.random() * w, y: Math.random() * h, len: 10 + Math.random() * 18, spd: 10 + Math.random() * 12, op: 0.05 + Math.random() * 0.1, w: 0.5 + Math.random() * 0.6 });
      }
    };
    const resize = () => { c.width = stageEl.clientWidth || window.innerWidth; c.height = stageEl.clientHeight || window.innerHeight; mk(c.width, c.height); };
    resize();
    loop(() => {
      ctx.clearRect(0, 0, c.width, c.height);
      const t = Date.now() / 1000;
      for (const d of items) {
        if (fx === 'rain') {
          ctx.save(); ctx.globalAlpha = d.op; ctx.strokeStyle = '#fff'; ctx.lineWidth = d.w;
          ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + Math.sin(0.22) * d.len, d.y + Math.cos(0.22) * d.len); ctx.stroke(); ctx.restore();
          d.y += d.spd * 0.33; d.x += Math.sin(0.22) * d.spd * 0.33 * 0.4;
          if (d.y > c.height + d.len) { d.y = -d.len; d.x = Math.random() * c.width; }
        } else if (fx === 'snow' || fx === 'bubbles' || fx === 'hearts') {
          ctx.save(); ctx.globalAlpha = d.o;
          if (fx === 'bubbles') { ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.beginPath(); ctx.arc(d.x - d.r * 0.35, d.y - d.r * 0.35, d.r * 0.18, 0, Math.PI * 2); ctx.fill(); }
          else if (fx === 'hearts') { ctx.fillStyle = '#ff4d88'; ctx.font = (d.s * 16) + 'px serif'; ctx.fillText('❤', d.x, d.y); }
          else { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill(); }
          ctx.restore();
          d.y += d.sy; d.x += d.sx + (fx === 'bubbles' ? Math.sin(t * 2 + d.r) * 0.2 : 0);
          if (fx === 'snow' && d.y > c.height + 5) { d.y = -5; d.x = Math.random() * c.width; }
          if (fx === 'bubbles' && d.y < -d.r * 2) { d.y = c.height + d.r * 2; d.x = Math.random() * c.width; }
          if (fx === 'hearts' && d.y > c.height + 20) { d.y = -20; d.x = Math.random() * c.width; }
        } else if (fx === 'confetti') {
          ctx.save(); ctx.translate(d.x, d.y); ctx.rotate(d.a); ctx.globalAlpha = d.o; ctx.fillStyle = d.col;
          ctx.fillRect(-d.r / 2, -d.r, d.r, d.r * 2); ctx.restore();
          d.y += d.sy; d.x += Math.sin(d.a * 4 + t * 2) * 0.6; d.a += d.vr;
          if (d.y > c.height + 10) { d.y = -10; d.x = Math.random() * c.width; d.a = Math.random() * Math.PI; }
        } else if (fx === 'stars') {
          ctx.save(); ctx.globalAlpha = d.o * (0.5 + 0.5 * Math.sin(t * d.sp * 20 + d.ph)); ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        }
      }
    });
  }

  if (data.glow) {
    const g = doc.createElement('div');
    g.className = 'cx-glow show';
    stageEl.appendChild(g);
  }
  if (data.grain) {
    const g = doc.createElement('div');
    g.className = 'cx-grain show';
    stageEl.appendChild(g);
  }

  const cur = cfg ? (cfg.cursor || 'none') : 'none';
  if (cur === 'glow') {
    const c = doc.createElement('div');
    c.className = 'cx-cursor show';
    stageEl.appendChild(c);
    const h = (e) => {
      const r = stageEl.getBoundingClientRect();
      c.style.left = (e.clientX - r.left) + 'px';
      c.style.top = (e.clientY - r.top) + 'px';
    };
    stageEl.addEventListener('mousemove', h);
    cleanups.push(() => stageEl.removeEventListener('mousemove', h));
  } else if (cur === 'trail') {
    const h = (e) => {
      const r = stageEl.getBoundingClientRect();
      const d = doc.createElement('div');
      d.className = 'cx-trail-dot';
      d.style.left = (e.clientX - r.left) + 'px';
      d.style.top = (e.clientY - r.top) + 'px';
      stageEl.appendChild(d);
      setTimeout(() => d.remove(), 600);
    };
    stageEl.addEventListener('mousemove', h);
    cleanups.push(() => stageEl.removeEventListener('mousemove', h));
  }

  const cntEl = stageEl.querySelector('[data-cx-count]');
  if (cntEl) {
    const target = Date.parse(cntEl.dataset.cxTarget);
    const set = (cls, v) => { const el = cntEl.querySelector(cls); if (el) el.textContent = String(v).padStart(2, '0'); };
    const upd = () => {
      if (isNaN(target)) { set('.cd', '--'); set('.ch', '--'); set('.cm', '--'); set('.cs', '--'); return; }
      const diff = Math.max(0, target - Date.now());
      cntEl.classList.toggle('done', diff === 0);
      set('.cd', Math.floor(diff / 86400000));
      set('.ch', Math.floor(diff / 3600000) % 24);
      set('.cm', Math.floor(diff / 60000) % 60);
      set('.cs', Math.floor(diff / 1000) % 60);
    };
    upd();
    const iv = setInterval(upd, 1000);
    cleanups.push(() => clearInterval(iv));
  }

  stageEl._cxCleanup = () => {
    rafIds.forEach(id => { try { cancelAnimationFrame(id); } catch (e) {} });
    cleanups.forEach(f => f());
  };
}

function initAudio(data) {
  const ael = document.getElementById('cx-audio');
  const playBtn = document.getElementById('cx-play');
  const pfill = document.getElementById('cx-prog-fill');
  const pbg = document.getElementById('cx-prog');
  const tcur = document.getElementById('cx-t-cur');
  const ttot = document.getElementById('cx-t-tot');
  const vol = document.getElementById('cx-vol');
  if (!ael || !playBtn) return;
  ael.src = data.audio_url;
  ael.volume = 0.3;
  let audioCtx = null, analyser = null, dataArr = null;
  function fmt(s) { if (!s || isNaN(s)) return '0:00'; return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0'); }
  function unlock() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const src = audioCtx.createMediaElementSource(ael);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      dataArr = new Uint8Array(analyser.frequencyBinCount);
      src.connect(analyser);
      analyser.connect(audioCtx.destination);
    } catch (e) {}
  }
  function setIcon(playing) {
    playBtn.innerHTML = playing
      ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  }
  playBtn.addEventListener('click', () => {
    unlock();
    if (ael.paused) { ael.play().catch(() => {}); setIcon(true); }
    else { ael.pause(); setIcon(false); }
  });
  ael.addEventListener('play', () => setIcon(true));
  ael.addEventListener('pause', () => setIcon(false));
  ael.addEventListener('timeupdate', () => { if (!ael.duration) return; pfill.style.width = (ael.currentTime / ael.duration * 100) + '%'; tcur.textContent = fmt(ael.currentTime); });
  ael.addEventListener('loadedmetadata', () => { ttot.textContent = fmt(ael.duration); });
  ael.addEventListener('ended', () => setIcon(false));
  ael.addEventListener('error', () => { const tn = document.getElementById('cx-track-name'); if (tn) tn.textContent += ' (failed to load)'; });
  pbg.addEventListener('click', e => { if (!ael.duration) return; const r = pbg.getBoundingClientRect(); ael.currentTime = ((e.clientX - r.left) / r.width) * ael.duration; });
  vol.addEventListener('input', () => { ael.volume = vol.value / 100; });
  const eqs = document.querySelectorAll('.cx-eq i');
  setInterval(() => {
    if (analyser && dataArr && !ael.paused) {
      analyser.getByteFrequencyData(dataArr);
      eqs.forEach((b, i) => {
        const v = dataArr[Math.floor(i * dataArr.length / eqs.length)] / 255;
        b.style.transform = 'scaleY(' + (0.3 + v * 0.9) + ')';
      });
    }
  }, 120);
  window.__cxUnlock = unlock;
}

function cxStartMusic() {
  const ael = document.getElementById('cx-audio');
  if (!ael || !ael.src) return;
  if (typeof window.__cxUnlock === 'function') window.__cxUnlock();
  ael.play().catch(() => {});
}
