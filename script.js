@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

:root {
  --clr-bg: #f5f5f5;
  --clr-text: #333;
  --clr-dark: #1e1e2f;
  --clr-accent: #1e90ff;
  --radius: 10px;
  --shadow: 0 4px 8px rgba(0,0,0,.1);
}

*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;}
body{background:var(--clr-bg);color:var(--clr-text);line-height:1.6;}

.container{width:90%;max-width:1100px;margin:0 auto;}

/* Header */
.site-header{background:var(--clr-dark);color:#fff;position:sticky;top:0;z-index:1000;}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:15px 0;}
.logo{font-size:1.5rem;font-weight:600;}
#nav-toggle{display:none;background:none;border:none;color:#fff;font-size:1.8rem;cursor:pointer;line-height:1;}
#site-nav ul{list-style:none;display:flex;gap:25px;}
#site-nav a{color:#fff;text-decoration:none;font-size:1rem;transition:color .3s;}
#site-nav a:hover,#site-nav a.active{color:var(--clr-accent);}

/* Hero */
#hero{background:linear-gradient(rgba(30,30,47,.85),rgba(30,30,47,.85)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;color:#fff;text-align:center;padding:120px 20px;}
.hero-inner h2{font-size:2rem;margin-bottom:10px;}
.hero-inner p{max-width:600px;margin:0 auto 25px;}
.btn-primary{display:inline-block;padding:10px 25px;background:var(--clr-accent);color:#fff;text-decoration:none;border-radius:var(--radius);transition:transform .3s,box-shadow .3s;}
.btn-primary:hover{transform:translateY(-3px);box-shadow:var(--shadow);}

/* Sections */
.section{padding:70px 0;}
.section.alt-bg{background:#fff;}
.section h2{margin-bottom:35px;font-size:2rem;text-align:center;color:var(--clr-dark);}
.section p{text-align:center;max-width:750px;margin:0 auto 25px;}

/* Grid lists */
.grid-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;}
.card{background:#fff;padding:25px;border-radius:var(--radius);box-shadow:var(--shadow);text-align:center;transition:transform .3s,box-shadow .3s;}
.card:hover{transform:translateY(-5px);box-shadow:0 6px 16px rgba(0,0,0,.15);}

/* Projects */
.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:25px;}
.project-card{background:#fff;padding:25px;border-radius:var(--radius);box-shadow:var(--shadow);text-align:center;}
.project-card h3{margin-bottom:10px;}
.btn-secondary{display:inline-block;margin-top:10px;padding:8px 20px;border:1px solid var(--clr-accent);color:var(--clr-accent);text-decoration:none;border-radius:var(--radius);font-size:.9rem;transition:all .3s;}
.btn-secondary:hover{background:var(--clr-accent);color:#fff;}

/* Contact */
.contact-wrapper{text-align:center;}
#contact-form{max-width:500px;margin:25px auto;text-align:left;}
.form-group{margin-bottom:15px;}
.form-group label{display:block;margin-bottom:5px;font-weight:600;}
.form-group input,.form-group textarea{width:100%;padding:10px;border:1px solid #ccc;border-radius:var(--radius);font-size:1rem;}
#contact-form button{margin-top:5px;}
.contact-alt p{margin:8px 0;}
.contact-alt a{color:var(--clr-accent);text-decoration:none;}
.contact-alt a:hover{text-decoration:underline;}

/* Footer */
footer{background:var(--clr-dark);color:#fff;text-align:center;padding:20px;margin-top:40px;font-size:.9rem;}

/* Responsive Navigation */
@media(max-width:768px){
  #nav-toggle{display:block;}
  #site-nav{position:absolute;top:60px;right:0;background:var(--clr-dark);width:200px;padding:15px;border-radius:0 0 0 10px;max-height:0;overflow:hidden;transition:max-height .3s ease;}
  #site-nav.nav-open{max-height:400px;}
  #site-nav ul{flex-direction:column;gap:15px;}
}
