const $=(s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
$('#year').textContent=new Date().getFullYear();
$('#themeToggle').addEventListener('click',()=>{document.body.classList.toggle('light');$('#themeToggle').textContent=document.body.classList.contains('light')?'☼':'◐'});
$('#menuToggle').addEventListener('click',()=>$('#nav').classList.toggle('open'));
$$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
const skillData={
 programming:{eyebrow:'PROGRAMMING LANGUAGES',title:'Writing logic.\nBuilding solutions.',tags:['Java','C','Python'],foot:'Languages used across academic and personal development projects.'},
 web:{eyebrow:'WEB DEVELOPMENT / FRAMEWORKS',title:'From interface\nto application.',tags:['HTML','CSS','JavaScript','Flask'],foot:'Web technologies used to develop responsive interfaces and Python-backed applications.'},
 data:{eyebrow:'AI, MACHINE LEARNING & DATA',title:'Finding patterns.\nLearning from data.',tags:['Machine Learning','Pandas','NumPy','Matplotlib','Scikit-learn','TensorFlow','PyTorch'],foot:'Data analysis and machine learning libraries from coursework and project work.'},
 database:{eyebrow:'DATABASE MANAGEMENT',title:'Organising data.\nPowering applications.',tags:['MySQL','SQLite','PostgreSQL'],foot:'Relational database technologies used across application development.'},
 tools:{eyebrow:'SOFTWARE TOOLS & PLATFORMS',title:'A practical\ndevelopment setup.',tags:['Git','GitHub','Linux / Unix','VS Code','IntelliJ IDEA','Ollama'],foot:'Tools and platforms used for development, version control, and local AI experimentation.'},
 game:{eyebrow:'GAME DEVELOPMENT',title:'Building worlds.\nDesigning play.',tags:['Unity','Blender'],foot:'Game development and 3D creation tools.'},
 core:{eyebrow:'CORE COMPUTER SCIENCE',title:'Strong foundations.\nBetter problem solving.',tags:['Data Structures & Algorithms','Object-Oriented Programming','DBMS','Operating Systems','Computer Networks'],foot:'Core CS areas to highlight as learning and interview-preparation foundations.'},
 genai:{eyebrow:'GENERATIVE AI & LLMs',title:'Exploring the\nnext interface.',tags:['Generative AI','Large Language Models','Prompt Engineering','AI Agents','RAG','Vector Databases','MCP'],foot:'A mix of active exploration and concepts encountered through LLM research and experimentation.'}
};
$$('.skill-tab').forEach(btn=>btn.addEventListener('click',()=>{ $$('.skill-tab').forEach(b=>b.classList.toggle('active',b===btn));const d=skillData[btn.dataset.skill];$('#skillEyebrow').textContent=d.eyebrow;$('#skillTitle').innerHTML=d.title.replace('\n','<br>');$('#skillTags').innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');$('#skillFoot').textContent=d.foot;}));
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filter').forEach(b=>b.classList.toggle('active',b===btn));const f=btn.dataset.filter;$$('.project-card,.game-card').forEach(card=>{card.hidden=!(f==='all'||card.dataset.category===f)}); }));
$('#phoneReveal').addEventListener('click',()=>{const n=$('#phoneNumber');n.hidden=!n.hidden;$('#phoneReveal').textContent=n.hidden?'Reveal phone number +':'Hide phone number −'});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
