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
    title: "CS2 Automated Web Scraper",
    image: "/images/image.png",
    description: "A custom web scraper built in Go that continuously searches CS2 marketplaces for underpriced items. Once a profitable asset is found, it sends an instant alert to purchase and flip it. To date, this tool has successfully generated over £10,000 in profit. (Repository is private due to active deployment).",
    technologies: ["Go", "Goroutines", "SQLite", "Telegram API"],
    githubUrl: "https://github.com/TylerDickenson/queue-bot", 
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
