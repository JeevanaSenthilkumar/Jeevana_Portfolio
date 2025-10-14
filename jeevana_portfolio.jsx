import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Coffee, Briefcase, Code2, BookOpen, Award } from "lucide-react";

export default function Portfolio() {
  const resumeLink = "/Resume_Jeevana.pdf";
  const linkedIn = "https://www.linkedin.com/in/jeevanasenthilkumar/";
  const github = "https://github.com/JeevanaSenthilkumar/";
  const profilePic = "/jeevana_profile.jpg";

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });

    return () => document.body.removeChild(cursor);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-100 antialiased cursor-none overflow-x-hidden scroll-smooth">
      <style>{`
        html { scroll-behavior: smooth; }
        .custom-cursor { width: 20px; height: 20px; position: absolute; border: 2px solid #ec4899; border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); animation: pulse 1.5s infinite; transition: transform 0.1s ease; z-index: 9999; }
        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; } 50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.4; } 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; } }
        .hover-animate:hover { transform: translateY(-5px) scale(1.02); transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4); }
      `}</style>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <div className="rounded-lg bg-gray-800/60 backdrop-blur p-2 shadow-sm flex items-center gap-4">
          <img src={profilePic} alt="Jeevana Senthilkumar" className="w-24 h-24 rounded-full object-cover border-2 border-pink-400 shadow-lg" />
          <div>
            <span className="font-bold text-xl tracking-tight text-pink-400">Jeevana Senthilkumar</span>
            <div className="text-xs text-gray-400">ML Data Associate · Data Analyst · Power BI</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#projects" className="text-sm hover:text-pink-400 transition-all">Projects</a>
          <a href="#experience" className="text-sm hover:text-pink-400 transition-all">Experience</a>
          <a href="#skills" className="text-sm hover:text-pink-400 transition-all">Skills</a>
          <a href="#certifications" className="text-sm hover:text-pink-400 transition-all">Certifications</a>
          <a href="#contact" className="text-sm hover:text-pink-400 transition-all">Contact</a>
          <a href={resumeLink} className="ml-3 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md text-sm hover:opacity-90" download>
            <Download size={16} /> Resume
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="text-center py-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              I turn raw data into <span className="text-pink-500">impactful insights</span> through
              <span className="text-purple-400"> Power BI & SQL</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Analytical professional with 2 years at Amazon as an ML Data Associate. I build KPI-driven dashboards,
              automate reports with Power Query and DAX, and craft visuals that help teams make smarter, data-driven decisions.
            </p>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-12">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Code2 className="text-pink-400" />
            <h2 className="text-2xl font-bold text-pink-400">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((num) => (
              <div key={num} className="bg-gray-800/60 p-6 rounded-lg shadow hover-animate">
                <img src={`/project${num}.jpg`} alt={`Project ${num}`} className="rounded-lg mb-4 object-cover w-full h-56 border border-pink-500/20" />
                <h4 className="font-semibold text-gray-100">{num === 1 ? 'Social Media Ad Campaign Analysis' : 'Inventory Management Dashboard'}</h4>
                <p className="text-sm text-gray-400 mb-2">{num === 1 ? 'Power BI · Power Query · DAX · Marketing Analytics' : 'Power BI · Forecasting · ETL · Supply Chain Analytics'}</p>
                <p className="text-gray-300 text-sm">{num === 1 ? 'Interactive dashboard evaluating ad performance and identifying profitable audiences (+33% conversion insights).' : 'Developed dashboard for warehouse monitoring with 35% improved stock visibility.'}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-12">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Briefcase className="text-pink-400" />
            <h2 className="text-2xl font-bold text-pink-400">Experience</h2>
          </div>
          <div className="bg-gray-800/60 p-6 rounded-lg shadow hover-animate">
            <h3 className="text-lg font-semibold text-gray-100">Amazon Development Centre Pvt. Ltd. – ML Data Associate</h3>
            <p className="text-sm text-gray-400 mb-2">Nov 2023 – Sep 2025 | Chennai, India</p>
            <ul className="list-disc ml-6 text-gray-300 text-sm space-y-1">
              <li>Built real-time Power BI dashboards tracking ML workflow accuracy and team productivity (+35% visibility).</li>
              <li>Automated reporting with Power Query & DAX, reducing manual effort by 40% and improving accuracy by 28%.</li>
              <li>Designed KPI-driven visual reports that highlighted process gaps and enabled a 15% boost in operational efficiency.</li>
              <li>Collaborated with analytics and quality teams for metric integration and real-time performance tracking.</li>
            </ul>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-12">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <BookOpen className="text-pink-400" />
            <h2 className="text-2xl font-bold text-pink-400">Skills & Tools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {['Business Intelligence', 'Data & Analytics', 'Programming'].map((title, i) => (
              <div key={i} className="bg-gray-800/60 p-4 rounded-lg shadow hover-animate">
                <h5 className="font-medium text-gray-100 text-center">{title}</h5>
                <ul className="mt-2 text-sm text-gray-300 list-disc ml-5">
                  {title === 'Business Intelligence' && <><li>Power BI Desktop · Power BI Service</li><li>KPI Dashboards · Drill-through Reports</li><li>Data Storytelling & Automation</li></>}
                  {title === 'Data & Analytics' && <><li>Data Modeling · ETL · Data Cleaning</li><li>SQL (Joins, Aggregations, Subqueries)</li><li>Excel (Pivot Tables, Power Pivot)</li></>}
                  {title === 'Programming' && <><li>Python (Pandas, NumPy - Basics)</li><li>DAX, Power Query</li><li>Version Control (GitHub)</li></>}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-12">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Award className="text-pink-400" />
            <h2 className="text-2xl font-bold text-pink-400">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/60 p-6 rounded-lg shadow hover-animate">
              <img src="/certificate1.jpg" alt="Power BI Data Analyst Certificate" className="rounded-lg mb-4 object-cover w-full h-56 border border-pink-500/20" />
              <h4 className="font-semibold text-gray-100">Power BI Data Analyst Certificate</h4>
              <p className="text-sm text-gray-400 mb-2">Microsoft · 2024</p>
              <p className="text-gray-300 text-sm">Demonstrated expertise in building Power BI dashboards, data modeling, and transforming business insights into actionable visuals.</p>
            </div>
            <div className="bg-gray-800/60 p-6 rounded-lg shadow hover-animate">
              <img src="/certificate2.jpg" alt="SQL for Data Analysis" className="rounded-lg mb-4 object-cover w-full h-56 border border-pink-500/20" />
              <h4 className="font-semibold text-gray-100">SQL for Data Analysis</h4>
              <p className="text-sm text-gray-400 mb-2">Coursera · 2023</p>
              <p className="text-gray-300 text-sm">Covered advanced SQL concepts including joins, window functions, and performance optimization for analytical queries.</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-pink-400">Contact & Support</h2>
          <div className="bg-gray-800/60 p-8 rounded-lg shadow-lg grid md:grid-cols-2 gap-8 hover-animate">
            <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks for reaching out, your message has been sent!')}}>
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input className="w-full mt-1 px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:border-pink-500" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" className="w-full mt-1 px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:border-pink-500" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea className="w-full mt-1 px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700 focus:border-pink-500 h-28" placeholder="Say something nice..." required />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90">Send Message</button>
            </form>

            <div className="flex flex-col justify-center items-center text-center space-y-4">
              <p className="text-gray-300">Want to show some love? You can buy me a coffee below ☕</p>
              <a href="https://www.buymeacoffee.com/jeevana" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">
                <Coffee size={18} /> Buy Me a Coffee
              </a>
              <p className="text-gray-400 text-sm">or email me directly at <a href="mailto:jeevana8438@gmail.com" className="text-pink-400">jeevana8438@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jeevana Senthilkumar — Designed in dark mode brilliance.
      </footer>
    </div>
  );
}
