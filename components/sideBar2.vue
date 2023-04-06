<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="static fixed inset-0 bg-gray-800" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="
                  flex
                  grow
                  flex-col
                  gap-y-5
                  overflow-y-auto
                  bg-gray-900
                  px-6
                  pb-2
                  ring-1 ring-white/10
                "
              >
                <div class="flex h-16 shrink-0 items-center">
                  <NuxtLink to="/" class="flex items-center mb-5 mt-[2.9em]">
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
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <div
                        class="text-xs font-semibold leading-6 text-gray-400"
                      >
                        Product Category
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li>
                          <a
                            href="team.href"
                            class="
                              hover:bg-gray-800
                              text-white text-gray-400
                              hover:text-white hover:bg-gray-800
                              group
                              flex
                              gap-x-3
                              rounded-md
                              p-3
                              text-sm
                              leading-3
                              font-semibold
                            "
                          >
                            <span
                              class="
                                flex
                                h-3
                                w-3
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                ring-1 ring-white
                                bg-amber-500
                                text-[0.625rem]
                                font-medium
                                text-gray-400
                                group-hover:text-white
                              "
                            >
                            </span>
                            <span class="truncate">Electronics</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="team.href"
                            class="
                              hover:bg-gray-800
                              text-white text-gray-400
                              hover:text-white hover:bg-gray-800
                              group
                              flex
                              gap-x-3
                              rounded-md
                              p-3
                              text-sm
                              leading-3
                              font-semibold
                            "
                          >
                            <span
                              class="
                                flex
                                h-3
                                w-3
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                ring-1 ring-white
                                bg-violet-600
                                text-[0.625rem]
                                font-medium
                                text-gray-400
                                group-hover:text-white
                              "
                            >
                            </span>
                            <span class="truncate">Video Games</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="team.href"
                            class="
                              hover:bg-gray-800
                              text-white text-gray-400
                              hover:text-white hover:bg-gray-800
                              group
                              flex
                              gap-x-3
                              rounded-md
                              p-3
                              text-sm
                              leading-3
                              font-semibold
                            "
                          >
                            <span
                              class="
                                flex
                                h-3
                                w-3
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                ring-1 ring-white
                                bg-cyan-600
                                text-[0.625rem]
                                font-medium
                                text-gray-400
                                group-hover:text-white
                              "
                            >
                            </span>
                            <span class="truncate">Entertainment</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="team.href"
                            class="
                              hover:bg-gray-800
                              text-white text-gray-400
                              hover:text-white hover:bg-gray-800
                              group
                              flex
                              gap-x-3
                              rounded-md
                              p-3
                              text-sm
                              leading-3
                              font-semibold
                            "
                          >
                            <span
                              class="
                                flex
                                h-3
                                w-3
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                ring-1 ring-white
                                bg-rose-300
                                text-[0.625rem]
                                font-medium
                                text-gray-400
                                group-hover:text-white
                              "
                            >
                            </span>
                            <span class="truncate">Smart Home</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-64 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <NuxtLink to="/" class="flex items-center mb-5 mt-[2.9em]">
            <!--Logo-->
            <div class="logoSlide">
              <span
                style="
                  color: rgb(255, 255, 255);
                  font-size: 28px;
                  font-weight: bold;
                  font-family: 'Urbanist', sans-serif;
                "
              >
                FairShopping</span
              >
              <span
                style="
                  color: rgb(75, 152, 108);
                  font-size: 28px;
                  font-weight: bold;
                  font-family: 'Urbanist', sans-serif;
                "
                >.io</span
              >
            </div>
          </NuxtLink>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">
                Product Category
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li>
                  <a
                    href="team.href"
                    class="
                      hover:bg-gray-800
                      text-white text-gray-400
                      hover:text-white hover:bg-gray-800
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-amber-500
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Electronics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="team.href"
                    class="
                      hover:bg-gray-800
                      text-white text-gray-400
                      hover:text-white hover:bg-gray-800
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-violet-600
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Video Games</span>
                  </a>
                </li>
                <li>
                  <a
                    href="team.href"
                    class="
                      hover:bg-gray-800
                      text-white text-gray-400
                      hover:text-white hover:bg-gray-800
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-cyan-600
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Entertainment</span>
                  </a>
                </li>
                <li>
                  <a
                    href="team.href"
                    class="
                      hover:bg-gray-800
                      text-white text-gray-400
                      hover:text-white hover:bg-gray-800
                      group
                      flex
                      gap-x-3
                      rounded-md
                      p-3
                      text-sm
                      leading-3
                      font-semibold
                    "
                  >
                    <span
                      class="
                        flex
                        h-3
                        w-3
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ring-1 ring-white
                        bg-rose-300
                        text-[0.625rem]
                        font-medium
                        text-gray-400
                        group-hover:text-white
                      "
                    >
                    </span>
                    <span class="truncate">Smart Home</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="
        sticky
        top-0
        z-30
        flex
        items-center
        gap-x-6
        bg-gray-900
        px-4
        py-4
        shadow-sm
        sm:px-6
        lg:hidden
      "
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];

const sidebarOpen = ref(false);
</script>
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
