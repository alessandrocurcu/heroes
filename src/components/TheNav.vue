<template>
  <nav
    class="z-10 relative h-[--theNavHight] flex bg-white items-center px-3 xl:px-8 the-nav backdrop-blur">
    <!-- bg-gray-200/80  -->
    <TheLogo class="cursor-pointer" @click="router.push('/projects')" />
    <ul class="flex items-center ml-auto space-x-4 font-medium">
      <template v-for="navItem in theNavItems" :key="navItem.name">
        <div v-if="!navItem.children">
          <router-link
            :class="{
              'pointer-events-none opacity-60':
                !UserStore.adminUsers.includes(UserStore.currentUserMail) && navItem.private
            }"
            class="inline-flex items-center gap-2 px-2 py-1.5 text-xs text-gray-600 rounded-md hover:bg-indigo-50 hover:text-indigo-900 transition-all"
            :to="{ name: navItem.name }"
            >{{ navItem.label }}
            <BaseIcon
              v-show="!UserStore.adminUsers.includes(UserStore.currentUserMail) && navItem.private"
              name="LockClosedIcon"
              class="w-4 h-4"
          /></router-link>
        </div>
        <Menu v-else as="div" class="relative inline-block text-left">
          <MenuButton
            :class="{
              'border border-gray-200 rounded-full w-6 h-6': navItem.name === 'Account',
              'text-gray-600 hover:bg-gray-50': navItem.name !== 'Account'
            }"
            class="inline-flex items-center justify-center w-full px-2 py-1.5 text-xs rounded-full">
            {{ navItem.label }}
            <ChevronDownIcon
              v-if="navItem.name !== 'Account'"
              class="w-4 h-4 ml-2 -mr-1"
              aria-hidden="true" />
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems
              class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <template v-for="subNavItem in navItem.children" :key="subNavItem.name">
                <p
                  v-if="subNavItem.isAction"
                  @click="subNavItem.actionHandler"
                  class="px-4 py-2 text-sm text-gray-700 cursor-pointer">
                  {{ subNavItem.label }}
                </p>
                <router-link
                  v-else
                  custom
                  :to="{ name: subNavItem.name }"
                  v-slot="{ href, navigate }">
                  <MenuItem :href="href" @click="navigate" v-slot="{ active }">
                    <a
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      ]"
                      >{{ subNavItem.label }}</a
                    >
                  </MenuItem>
                </router-link>
              </template>
            </MenuItems>
          </transition>
        </Menu>
      </template>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import useAuth from '@/composables/useAuth';
import router from '@/router/index';
import { useUserStore } from '@/stores/UserStore';
import BaseIcon from './baseComponents/IconWrapper';
export interface TheNavItem {
  name: string;
  label: string;
  private?: boolean;
  children?: {
    name?: string;
    label: string;
    isAction?: boolean;
    actionHandler?: () => void;
  }[];
}
const UserStore = useUserStore();
const { logOut } = useAuth();
const logOutHandler = async () => {
  await logOut();
  router.push({
    name: 'Login'
  });
};
const theNavItems: TheNavItem[] = [
  {
    name: 'Businesses',
    label: 'Businesses'
  },
  {
    name: 'Users',
    label: 'Users'
  },
  {
    name: 'Instances',
    label: 'Instances'
  },
  {
    name: 'Projects',
    label: 'Projects'
  },
  {
    name: 'Properties',
    label: 'Properties',
    private: true
  },
  {
    name: 'Issues',
    label: 'Issues',
    private: true
  },
  {
    name: 'Account',
    label: UserStore.currentUserMail.charAt(0).toUpperCase(),
    children: [
      {
        isAction: true,
        actionHandler: logOutHandler,
        label: 'Log out'
      }
    ]
  }
];
</script>
