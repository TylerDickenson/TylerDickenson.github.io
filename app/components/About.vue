<template>
  <section id="about" class="min-h-[60vh] py-20 bg-cream dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      
      <div class="text-center mb-16">
        <h2 class="font-centurion text-4xl font-bold mb-4 text-slate-800 dark:text-gray-100">About Me</h2>
        <div class="w-12 h-0.5 bg-slate-400 dark:bg-slate-500 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
        
        <div class="flex justify-center">
          <div class="relative w-80 h-80 sm:w-96 sm:h-96">
            
            <div class="absolute -inset-3 bg-gradient-to-tr from-slate-400 via-indigo-400 to-slate-300 dark:from-slate-600 dark:via-indigo-500 dark:to-gray-700 rounded-2xl blur-xl opacity-25 dark:opacity-40 animate-glow"></div>
            
            <div class="relative w-full h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-slate-200/60 dark:border-slate-700/60 shadow-md">
              <img 
                src="/images/tyler-profile.png" 
                alt="Tyler Dickenson" 
                class="w-full h-full object-cover object-center scale-125 mt-12" 
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <h4 class="font-centurion text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Hi, I'm Tyler</h4>
          
          <p class="text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
            I hold a BSc in Computer Science from Swansea University and am completing an MSc in Cybersecurity with a 76% distinction average. I specialize in secure, full-stack backend development.
          </p>

          <p class="text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-6">
            As an independent product builder, I designed and scaled a live software application generating over £10,000 in profit. I focus on building resilient, optimized code that delivers real commercial value.
          </p>
          
          <div>
            <a href="/Tyler_Dickenson_CV.pdf" target="_blank"
               class="inline-block px-7 py-3 bg-slate-700 text-white dark:bg-slate-600 rounded-full hover:bg-slate-800 dark:hover:bg-slate-500 transition-all font-medium shadow-sm active:scale-98">
              View my CV
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
/* Smooth ambient breathing glow animation */
@keyframes dynamicGlow {
  0%, 100% {
    transform: scale(1);
    filter: blur(16px);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.04);
    filter: blur(22px);
    opacity: 0.35;
  }
}

.animate-glow {
  animation: dynamicGlow 6s infinite ease-in-out;
}

/* Dark mode override for the glow intensity */
.dark .animate-glow {
  @keyframes dynamicGlowDark {
    0%, 100% {
      transform: scale(1);
      filter: blur(20px);
      opacity: 0.35;
    }
    50% {
      transform: scale(1.05);
      filter: blur(26px);
      opacity: 0.5;
    }
  }
  animation: dynamicGlowDark 6s infinite ease-in-out;
}
</style>