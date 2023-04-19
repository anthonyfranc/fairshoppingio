<template>
  <Disclosure as="header" class="bg-gray-800" v-slot="{ open }">
    <div
      class="
        mx-auto
        max-w-7xl
        px-2
        sm:px-2
        lg:divide-y lg:divide-gray-700 lg:px-8
      "
    >
      <div class="relative flex h-16 justify-between">
        <div class="relative z-10 flex px-2 lg:px-0">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/" class="flex items-center">
              <!--Logo-->
              <div class="logoSlide">
                <span
                  style="
                    color: rgb(255, 255, 255);
                    font-size: 26px;
                    font-weight: bold;
                    font-family: 'Urbanist', sans-serif;
                  "
                >
                  FairShopping</span
                >
                <span
                  style="
                    color: rgb(75, 152, 108);
                    font-size: 26px;
                    font-weight: bold;
                    font-family: 'Urbanist', sans-serif;
                  "
                  >.io</span
                >
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              text-gray-400
              hover:bg-gray-700 hover:text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
      <nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
      </nav>
    </div>

    <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md py-2 px-3 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
      <div class="border-t border-gray-700 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">{{ user.name }}</div>
            <div class="text-sm font-medium text-gray-400">
              {{ user.email }}
            </div>
          </div>
          <button
            type="button"
            class="
              ml-auto
              flex-shrink-0
              rounded-full
              bg-gray-800
              p-1
              text-gray-400
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-gray-800
            "
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton
            v-for="item in userNavigation"
            :key="item.name"
            as="a"
            :href="item.href"
            class="
              block
              rounded-md
              px-3
              py-2
              text-base
              font-medium
              text-gray-400
              hover:bg-gray-700 hover:text-white
            "
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
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
