<template>
  <section id="featured-projects" class="min-h-[50vh] py-20 bg-cream dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-centurion text-4xl font-bold mb-4 text-slate-800 dark:text-gray-100">Featured Projects</h2>
        <p class="text-lg text-gray-600 dark:text-gray-200">A showcase of my academic work and personal projects</p>
      </div>
      
      <div class="space-y-8 max-w-6xl mx-auto">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="project.id"
          :project="project"
          :animation-delay="index * 200"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Finance Social Media App",
    image: "/images/fin-social-card.png",
    description: "A full-stack social finance web app featuring user authentication, database management, real-time financial data integration, and a modern responsive UI. Built for my Dissertation Project to break the stigma surrounding Financial Discussions.",
    technologies: ["React", "Laravel", "PHP", "Tailwind CSS", "MySql", "Docker"],
    githubUrl: "https://github.com/tylerdickenson/social-finance-app",
    liveDemo: "https://fin-social.com"
  },
  {
    id: 2,
    title: "CS2 Abritrage Trading Bot",
    image: "/images/cs2-card.png",
    imageClass: "object-[center_50%]",
    description: "A automated CS2 (Counter Strike 2) item sniping bot that utilises Pupetter with stealth plugin and roating proxies to scrape 3rd party marketplaces for underpriced items. Once an item is found, the bot will send me a notification via Telegram Bot that an underpiced item has been found that I can purchase and Abritrage for a profit. (Github is private due to the nature of the project and ongoing work)",
    technologies: ["Node.js", "Puppeteer", "Sqlite", "Telegram Bot"],
    githubUrl: "https://github.com/TylerDickenson/CS2-Price-Scraper" 
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/images/portfolio-card.png",
    description: "A modern, responsive portfolio website built with Nuxt.js and Vue.js, featuring smooth animations, a clean design, and optimized performance. Showcases my projects, skills, and software engineering journey with a focus on personal projects and academic work.",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Digital Ocean Deployment"],
    githubUrl: "https://github.com/TylerDickenson/Nuxt-Portfolio",
    liveDemo: "https://tylerdickenson.com"
  }
]
</script>
