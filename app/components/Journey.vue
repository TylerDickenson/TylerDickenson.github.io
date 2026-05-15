<template>
  <section id="journey" class="min-h-screen py-16 bg-cream dark:bg-gray-800 transition-colors duration-300 overflow-x-hidden">
    <div class="container mx-auto px-4 max-w-3xl">
      
      <h2 class="font-centurion text-3xl font-bold mb-12 text-center text-slate-800 dark:text-gray-100 tracking-wide">
        My Journey
      </h2>

      <div class="relative w-full">
        
        <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-2 bg-slate-200 dark:bg-gray-700 rounded-full"></div>
        
        <div 
          v-for="(item, index) in timelineItems" 
          :key="index"
          :data-index="index"
          class="timeline-item relative w-full mb-8 md:mb-4 flex flex-col md:flex-row transition-all duration-1000 ease-out"
          :class="[
            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start',
            visibleIndices.has(index) 
              ? 'opacity-100 translate-y-0 md:translate-x-0' 
              : `opacity-0 translate-y-8 ${index % 2 === 0 ? 'md:translate-x-12' : 'md:-translate-x-12'}`
          ]"
        >
          
          <div 
            class="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center transition-all duration-700 ease-out"
            :class="[visibleIndices.has(index) ? 'scale-100' : 'scale-0']"
          >
            <div 
              class="absolute w-10 h-10 bg-blue-500/20 rounded-full scale-0"
              :class="{'animate-[pulse-soft_2.5s_ease-out_infinite]': visibleIndices.has(index)}"
            ></div>
            
            <div class="relative w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 shadow-md flex items-center justify-center">
              <div class="w-1 h-1 rounded-full bg-white opacity-80"></div>
            </div>
          </div>

          <div class="w-full md:w-[calc(50%-1.75rem)] pl-12 md:pl-0">
            
            <div class="bg-white dark:bg-gray-800 border border-gray-300 p-4 rounded-3xl shadow-sm transform transition-all duration-300 hover:scale-[1.01]">
              
              <div class="mb-3 flex">
                <span class="px-2.5 py-0.5 bg-slate-200 dark:bg-slate-100 text-slate-700 dark:text-slate-800 text-xs font-medium rounded-xl select-none">
                  {{ item.date }}
                </span>
              </div>
              
              <h3 class="font-centurion text-xl font-bold text-slate-800 dark:text-gray-100 mb-0.5">
                {{ item.title }}
              </h3>
              
              <h4 class="font-centurion text-xs font-semibold text-gray-400 dark:text-gray-300 mb-3 uppercase tracking-wider">
                {{ item.subtitle }}
              </h4>
              
              <p class="text-gray-600 dark:text-gray-200 leading-relaxed text-sm">
                {{ item.description }}
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visibleIndices = ref(new Set())
let observer = null

const timelineItems = [
  {
    date: '2026',
    title: 'Open to Opportunities',
    subtitle: 'Tech & Finance Industry',
    description: 'Seeking roles in tech and finance to apply my skills and deliver impactful software solutions.'
  },
  {
    date: '2025 - 2026',
    title: 'MSc Cybersecurity',
    subtitle: 'Swansea University',
    description: 'Specializing in systems security, cryptography, and network defense with a practical security focus.'
  },
  {
    date: '2022 - 2025',
    title: 'BSc Computer Science',
    subtitle: 'Swansea University',
    description: 'Graduated with a focus on core algorithms, software engineering principles, and full-stack frameworks.'
  },
  {
    date: '2020 - 2022',
    title: 'A Levels',
    subtitle: 'Further Education',
    description: 'Completed qualifications in Computer Science, Product Design, and Business Studies.'
  },
  {
    date: '2015',
    title: 'First Website',
    subtitle: 'The Start',
    description: 'Built my first website using raw HTML in an ICT class and discovered my passion for coding.'
  }
]

onMounted(() => {
  if (!document.getElementById('timeline-pulse-styles')) {
    const style = document.createElement('style')
    style.id = 'timeline-pulse-styles'
    style.innerHTML = `
      @keyframes pulse-soft {
        0% { transform: scale(0.5); opacity: 0; }
        50% { opacity: 0.9; }
        100% { transform: scale(1.5); opacity: 0; }
      }
    `
    document.head.appendChild(style)
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute('data-index'), 10)
        visibleIndices.value.add(index)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px' 
  })

  document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>