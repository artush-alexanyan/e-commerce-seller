<template>
  <div>
    <div class="flex items-center justify-center h-screen w-full p-5">
      <div class="flex flex-col items-center space-y-3">
        <h1 class="text-center md:text-5xl text-4xl font-bold">Page not found</h1>
        <p class="md:text-lg text-center">
          We are sorry but the page you are looking for does not exists
        </p>
        <RouterLink class="rounded bg-indigo-600 text-white px-5 py-2.5" to="/"
          >Back to home</RouterLink
        >
      </div>
    </div>
  </div>
</template>
