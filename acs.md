<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>How It Works · ACS</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--primary:#2563EB;--primary-dark:#1D4ED8;--navy:#14284B;--muted:#5F6F89;--tint:#F0F4FC;--frame:#E4ECF9;--border:#E2E8F0;--line:#DCE5F5;--font:'Inter','Inter Tight',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--pad:clamp(20px,4vw,48px);--sec:clamp(56px,8vw,96px)}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;font-family:var(--font);color:var(--navy);background:#fff;line-height:1.6;font-size:16px}
h1,h2,h3,h4,p{margin:0}a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--primary);outline-offset:2px}
.wrap{max-width:1152px;margin:0 auto;padding:0 var(--pad)}
.section{padding:var(--sec) 0}.tint{background:var(--tint)}
.eyebrow{font-size:11px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:var(--primary);margin-bottom:20px}
h1{font-size:clamp(2.25rem,1.4rem + 3.2vw,3.5rem);font-weight:600;line-height:1.08;letter-spacing:-.03em}
h2{font-size:clamp(1.75rem,1.2rem + 2vw,2.5rem);font-weight:600;line-height:1.15;letter-spacing:-.025em}
h3{font-size:20px;font-weight:600;line-height:1.3;letter-spacing:-.01em}
.lead{color:var(--muted);font-size:17px;line-height:1.65;max-width:520px}
.small{font-size:13px;color:var(--muted)}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 24px;border-radius:8px;font:600 14.5px var(--font);cursor:pointer;border:1px solid transparent;transition:background .18s,border-color .18s}
.btn-primary{background:var(--primary);color:#fff}.btn-primary:hover{background:var(--primary-dark)}
.btn-ghost{background:#fff;color:var(--navy);border-color:var(--border)}.btn-ghost:hover{border-color:#C7D3EA}
header{position:sticky;top:0;z-index:20;background:#fff;border-bottom:1px solid var(--border)}
.nav{display:flex;align-items:center;justify-content:space-between;height:80px}
.logo{display:flex;align-items:center;gap:12px;font-weight:700;font-size:26px;letter-spacing:-.02em}
.logo-mark{width:32px;height:32px;border-radius:8px;background:var(--primary);display:grid;align-content:center;gap:4px;padding:0 8px}
.logo-mark i{display:block;height:3px;border-radius:2px;background:#fff}.logo-mark i:last-child{width:60%}
.links{display:flex;align-items:center;gap:28px}
.links a:not(.btn){font-size:14.5px;font-weight:500;color:var(--muted);padding:8px 0}
.links a:not(.btn):hover,.links a.active{color:var(--primary)}
.burger{display:none;width:44px;height:44px;border:1px solid var(--border);border-radius:8px;background:#fff;cursor:pointer;align-items:center;justify-content:center}
.burger span,.burger span::before,.burger span::after{display:block;width:18px;height:2px;background:var(--navy);border-radius:2px;position:relative}
.burger span::before,.burger span::after{content:"";position:absolute;left:0}.burger span::before{top:-6px}.burger span::after{top:6px}
@media(max-width:900px){.burger{display:inline-flex}.links{position:absolute;top:80px;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#fff;border-bottom:1px solid var(--border);padding:8px var(--pad) 20px;display:none}.links.open{display:flex}.links a:not(.btn){padding:14px 0;border-bottom:1px solid var(--border)}.links .btn{margin-top:16px}}
.page-hero{background:var(--tint);padding:clamp(48px,7vw,80px) 0}
.page-hero h1{max-width:760px;margin-bottom:24px}
.cols3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.col{border-top:2px solid var(--primary);padding-top:18px}
.col .eyebrow{font-size:10.5px;margin-bottom:14px}.col h3{margin-bottom:12px}.col p{color:var(--muted);font-size:15.5px}
@media(max-width:768px){.cols3{grid-template-columns:1fr;gap:36px}}
.split{display:flex;justify-content:space-between;align-items:flex-start;gap:40px;margin-bottom:48px}
.split h2{max-width:520px}.split p{max-width:420px;color:var(--muted)}
@media(max-width:768px){.split{flex-direction:column;gap:16px}}
.closer{background:var(--tint);border-radius:16px;padding:clamp(24px,4vw,30px);display:grid;grid-template-columns:5fr 7fr;gap:clamp(24px,4vw,40px);align-items:center;margin-bottom:24px}
.closer.flip{grid-template-columns:7fr 5fr}.closer.flip .result{order:-1}
.closer h2{margin-bottom:20px}.closer .lead{font-size:16px}
.result{background:#fff;border:1px solid var(--border);border-radius:8px;padding:clamp(18px,3vw,24px)}
.result h4{font-size:20px;font-weight:600;letter-spacing:-.01em}
.result .meta{font-size:13px;color:var(--muted);margin:10px 0 22px}
.scroll{overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:13.5px;min-width:300px}
th{background:var(--tint);color:var(--muted);font-weight:400;text-align:right;padding:14px 12px}
td{text-align:right;padding:16px 12px;border-bottom:1px solid var(--border);color:var(--muted);font-variant-numeric:tabular-nums}
th:first-child,td:first-child{text-align:left}tr:last-child td{border-bottom:0}
td.on{color:var(--primary);font-weight:600}
@media(max-width:900px){.closer,.closer.flip{grid-template-columns:1fr}.closer.flip .result{order:0}}
.steps{display:grid;grid-template-columns:repeat(2,1fr);gap:40px 48px}
.step{border-top:2px solid var(--primary);padding-top:18px}
.step small{display:block;font-size:10.5px;font-weight:600;letter-spacing:.13em;color:var(--primary);margin-bottom:14px}
.step h3{margin-bottom:10px}.step p{color:var(--muted);font-size:15.5px;max-width:460px}
@media(max-width:700px){.steps{grid-template-columns:1fr}}
.list{margin:24px 0 0;padding:0;list-style:none;display:grid;gap:14px;color:var(--muted)}
.list li{padding-left:22px;position:relative}.list li::before{content:"";position:absolute;left:0;top:.65em;width:8px;height:2px;background:var(--primary)}
.price-card{border:2px solid var(--line);border-radius:12px;padding:clamp(20px,4vw,40px);display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,40px);align-items:center;margin-bottom:var(--sec)}
.price-card h2{margin-bottom:20px}.price-card p{color:var(--muted);max-width:420px}
.plan{background:var(--tint);border-radius:10px;padding:clamp(20px,3vw,26px)}
.plan .eyebrow{font-size:10px;margin-bottom:14px}
.plan strong{display:block;font-size:32px;font-weight:600;letter-spacing:-.02em;margin-bottom:10px}
.plan .small{font-size:12px;margin-bottom:20px}
@media(max-width:768px){.price-card{grid-template-columns:1fr}}
.cta{background:var(--tint);border-radius:16px;padding:clamp(28px,5vw,48px);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px}
.cta h2{max-width:560px}
form{background:var(--tint);border-radius:10px;padding:clamp(18px,3vw,22px);display:grid;grid-template-columns:1fr 1fr;gap:16px 24px;margin:32px 0}
.f{display:grid;gap:6px}.f.full{grid-column:1/-1}
label{font-size:12px;color:var(--muted)}
input,select,textarea{font:400 13.5px var(--font);color:var(--navy);background:#fff;border:1px solid var(--border);border-radius:6px;min-height:44px;padding:0 12px;width:100%}
textarea{min-height:104px;padding:12px;resize:vertical}
input:focus,select:focus,textarea:focus{outline:2px solid var(--primary);outline-offset:0;border-color:var(--primary)}
.actions{grid-column:1/-1;display:flex;flex-wrap:wrap;align-items:center;gap:16px}
.actions .small{font-size:12px}.contact p.small{margin-top:12px}
@media(max-width:640px){form{grid-template-columns:1fr}}
footer{border-top:1px solid var(--border);padding:22px 0}
.foot-row{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px 28px;font-size:12px;color:var(--muted)}
.foot-row nav{display:flex;flex-wrap:wrap;gap:12px 28px}
@media(max-width:640px){.foot-row,.foot-row nav{flex-direction:column;align-items:center;text-align:center}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
</style></head><body>
<header><div class="wrap nav">
<a href="index.html" class="logo" aria-label="ACS home"><span class="logo-mark"><i></i><i></i></span>acs</a>
<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="links"><span></span></button>
<nav class="links" id="links" aria-label="Main">
<a href="index.html">Home</a><a href="features.html">Features</a><a href="how-it-works.html" class="active">How It Works</a><a href="pricing.html">Pricing</a><a href="about.html">About</a><a href="contact.html">Contact</a>
<a href="contact.html" class="btn btn-primary">Get Started</a></nav></div></header>
<main>
<section class="page-hero"><div class="wrap"><p class="eyebrow">How it works</p><h1>A thoughtful start for your school.</h1><p class="lead">Getting started is a conversation first. Nothing is set up until we have agreed what your school needs.</p></div></section>
<section class="section"><div class="wrap"><div class="steps">
<div class="step"><small>01</small><h3>Let’s talk.</h3><p>Share how your school works and what you want to organize. A walkthrough is the easiest way to see whether ACS fits.</p></div>
<div class="step"><small>02</small><h3>Explore the fit.</h3><p>Discuss available features, pricing and onboarding needs, so you know the total cost before deciding.</p></div>
<div class="step"><small>03</small><h3>Get prepared.</h3><p>Agree on the school information and users needed for setup.</p></div>
<div class="step"><small>04</small><h3>Bring work together.</h3><p>Begin using the agreed modules for your school’s daily work.</p></div></div></div></section>
<section class="section tint"><div class="wrap"><div class="split"><div><p class="eyebrow">Before we talk</p><h2>What is helpful to have in mind.</h2></div><p>You do not need anything formal. A rough picture of your school is enough to start.</p></div>
<ul class="list"><li>How many classes and pupils your school has</li><li>Who would use the system: headteacher, administrators, teachers</li><li>Which of records, attendance and results matter most first</li></ul>
<p class="small" style="margin-top:24px">Please do not include sensitive pupil information in an initial enquiry.</p></div></section>
<section class="section"><div class="wrap"><div class="cta"><h2>A more organized school starts with a conversation.</h2><a href="contact.html" class="btn btn-primary">Get Started</a></div></div></section>
</main>
<footer><div class="wrap foot-row"><span>ACS · Academic Cloud System</span>
<nav aria-label="Footer"><a href="features.html">Features</a><a href="pricing.html">Pricing</a><a href="contact.html">Contact</a><span>© 2026 ACS. All rights reserved.</span></nav></div></footer>
<script>
const burger=document.getElementById('burger'),links=document.getElementById('links');
function setMenu(o){links.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)}
burger.addEventListener('click',()=>setMenu(!links.classList.contains('open')));
links.addEventListener('click',e=>{if(e.target.tagName==='A')setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);burger.focus()}});
const form=document.getElementById('enquiry');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const v=id=>document.getElementById(id).value.trim();
const body=`Name: ${v('name')}\nSchool: ${v('school')}\nEmail: ${v('email')}\nInterested in: ${v('topic')}\n\n${v('msg')}`;
location.href='mailto:stackkens@gmail.com?subject='+encodeURIComponent('ACS enquiry: '+v('topic'))+'&body='+encodeURIComponent(body)});
</script></body></html>