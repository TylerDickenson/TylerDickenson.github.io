<template>
  <section id="skills" class="min-h-[60vh] py-20 bg-cream dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10">
        <h2 class="font-centurion text-4xl font-bold mb-4 text-slate-800 dark:text-gray-100">Skills</h2>
        <p class="text-lg text-gray-700 dark:text-gray-200">Technologies I've worked with on Personal Projects and University Assignments</p>
      </div>

      <!-- Frontend Section -->
      <SkillsCarousel 
        title="Frontend"
        :skills="frontendSkills"
        :speed="3000"
      />

      <!-- Backend Section -->
      <SkillsCarousel 
        title="Backend"
        :skills="backendSkills"
        :speed="3500"
        :reverse-direction="true"
      />

      <!-- Tools Section -->
      <SkillsCarousel 
        title="Tools & Services"
        :skills="toolsIcons"
        :speed="4000"
        icon-size="3rem"
        class="!mb-0"
      />
    </div>
  </section>
</template>

<script setup>

// Frontend skills
const frontendSkills = [
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'React', icon: 'logos:react' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS3', icon: 'logos:css-3' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'Vite', icon: 'logos:vitejs' },
]

// Backend skills 
const backendSkills = [
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'PHP', icon: 'logos:php' },
  { name: 'MySQL', icon: 'logos:mysql-icon' },
  { name: 'Firebase', icon: 'logos:firebase-icon' },
]

// Tools
const toolsIcons = [
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'VS Code', icon: 'logos:visual-studio-code' },
  { name: 'npm', icon: 'logos:npm-icon' },
  { name: 'Postman', icon: 'logos:postman-icon' },
  { name: 'Digital Ocean', icon: 'devicon:digitalocean' },
  { name: 'AWS', icon: 'logos:aws' }, 
]
</script>