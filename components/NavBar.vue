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
      sm:hidden
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
      w-[17em]
      h-screen
      transition-transform
      -translate-x-full
      sm:translate-x-0
    "
    aria-label="Sidebar"
  >
    <div class="h-full px-3.5 py-2 overflow-y-auto bg-gray-50 bg-gray-800">
      <NuxtLink to="/" class="flex items-center pl-2.5 mb-5">
        <!--Logo-->
        <div class="logoSlide">
          <span
            style="
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-weight: bold;
              font-family: 'Urbanist', sans-serif;
            "
          >
            FairShopping</span
          >
          <span
            style="
              color: rgb(75, 152, 108);
              font-size: 24px;
              font-weight: bold;
              font-family: 'Urbanist', sans-serif;
            "
            >.io</span
          >
        </div>
      </NuxtLink>
      <ul
        class="
          -space-y-1
          font-medium
          tracking-tight
          rounded-lg
          text-white
          bg-gray-700
          static
        "
      >
        <li
          class="
            flex
            items-center
            p-1.5
            text-gray-900
            rounded-t-lg
            text-white
            bg-gray-500
          "
        >
          <div class="flex ml-0 text-[10.5pt] text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>

            Category
          </div>
        </li>
        <li>
          <NuxtLink
            to="?c=electronics"
            class="
              flex
              items-center
              p-2
              text-gray-900 text-white
              hover:bg-gray-500
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
              text-gray-900 text-white
              hover:bg-gray-500
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
              text-gray-900 text-white
              hover:bg-gray-500
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
              text-gray-900 text-white
              hover:bg-gray-500
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
<style type="css">
.logoSlide {
  animation: slideInLogo 1s ease 0s 1 normal none;
}

@keyframes slideInLogo {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@700&display=swap');
</style>
