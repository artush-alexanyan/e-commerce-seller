<template>
  <div>
    <div class="flex items-center justify-center h-screen w-full bg-gradient-to-b from-purple-200">
      <div class="flex flex-col items-center w-1/2 space-y-5">
        <h1 class="text-slate-900 text-5xl font-semibold text-center">
          歡迎來到
          <strong class="text-purple-700 narko text-6xl"> NovoMercato </strong> 賣家
        </h1>

        <p class="text-center text-gray-500">
          We're thrilled to have you here! This is your go-to space for managing your online store
          and growing your business. From this page, you can explore the various features designed
          to streamline your selling experience:
        </p>
        <div class="flex items-center justify-center w-full gap-5">
          <RouterLink
            title="Go to register"
            id="register"
            class="rounded-lg bg-purple-600 text-white px-5 py-2.5"
            to="/auth/register/registration"
            >Register</RouterLink
          >
          <RouterLink
            title="Go to login"
            id="login"
            class="rounded-lg bg-purple-600 text-white px-5 py-2.5"
            to="/auth/login"
            >Login</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
