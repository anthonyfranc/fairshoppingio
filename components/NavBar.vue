<template>
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="
      inline-flex
      items-center
      p-2
      mt-2
      ml-3
      text-sm text-gray-500
      rounded-lg
      md:hidden
      hover:bg-gray-100
      focus:outline-none focus:ring-2 focus:ring-gray-200
      dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
    "
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="
      fixed
      top-0
      left-0
      z-50
      w-64
      h-screen
      transition-transform
      -translate-x-full
      sm:translate-x-0
      xs:hidden
    "
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-800">
      <NuxtLink to="/" class="flex items-center pl-2.5 mb-5">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-7"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white"
          >Flowbite</span
        >
      </NuxtLink>
      <ul class="-space-y-0.5 font-medium tracking-tight">
        <li>
          <div class="text-white pb-2"></div>
        </li>
        <li>
          <NuxtLink
            to="?c=electronics"
            class="
              flex
              items-center
              p-2
              text-gray-900
              rounded-lg
              text-white
              hover:bg-gray-100 hover:bg-gray-700
            "
          >
            <div
              class="rounded-full border-2 flex p-1 relative bg-amber-500"
            ></div>
            <span class="flex-1 ml-3 whitespace-nowrap">Electronics</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="?c=videogames"
            class="
              flex
              items-center
              p-2
              text-gray-900
              rounded-lg
              text-white
              hover:bg-gray-100 hover:bg-gray-700
            "
          >
            <div
              class="rounded-full border-2 flex p-1 relative bg-violet-600"
            ></div>
            <span class="flex-1 ml-3 whitespace-nowrap">Video Games</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="?c=entertainment"
            class="
              flex
              items-center
              p-2
              text-gray-900
              rounded-lg
              text-white
              hover:bg-gray-100 hover:bg-gray-700
            "
          >
            <div
              class="rounded-full border-2 flex p-1 relative bg-cyan-600"
            ></div>
            <span class="flex-1 ml-3 whitespace-nowrap">Entertainment</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="?c=smarthome"
            class="
              flex
              items-center
              p-2
              text-gray-900
              rounded-lg
              text-white
              hover:bg-gray-100 hover:bg-gray-700
            "
          >
            <div
              class="rounded-full border-2 flex p-1 relative bg-rose-300"
            ></div>
            <span class="flex-1 ml-3 whitespace-nowrap">Smart Home</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
