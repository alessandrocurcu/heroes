<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue';
import useAuth from '@/composables/useAuth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const {
  userMail,
  userPassword,
  showDialogTwoFactor,
  pin,
  isUserLoading,
  authError,
  tryTologIn,
  logIn
} = useAuth();
const router = useRouter();
const inputType = ref('password');
const pinTextInput = ref(null);
const onTryToLogIn = () => {
  // if the email doesn't not contain "kleecks" return
  if (!userMail.value.includes('kleecks')) {
    return;
  }
  tryTologIn();
};
const onLogIn = async () => {
  await logIn();
  // TODO: controlla l'utente: se ha il permission profile allora vai alla dashboard, altrimenti vai alla pagina di scelta del profilo
  router.push({
    name: 'Projects'
  });
};
</script>
<template>
  <div class="grid h-screen place-items-center">
    <div>
      <div class="mb-2 text-center">
        <TheLogo />
      </div>
      <div class="p-8 bg-gray-100 shadow-md w-80 shadow-gray-300/60">
        <div class="space-y-6">
          <BaseTextInput
            v-model="userMail"
            label="Email"
            name="email"
            class="uella"
            placeholder="you@example.com"
            type="text" />
          <BaseTextInput
            v-model="userPassword"
            label="Password"
            name="password"
            :type="inputType"
            @keyup.enter="onTryToLogIn">
            <BaseIcon
              class="w-4 cursor-pointer"
              @click="inputType = 'text'"
              v-show="inputType === 'password'"
              name="EyeSlashIcon" />
            <BaseIcon
              class="w-4 cursor-pointer"
              @click="inputType = 'password'"
              v-show="inputType === 'text'"
              name="EyeIcon" />
          </BaseTextInput>
        </div>
        <BaseButton kind="primary" @click="onTryToLogIn" class="w-full mt-12"
          >Send Auth Code
        </BaseButton>
        <BaseDialog
          :open="showDialogTwoFactor"
          title="Authenticate Your Account"
          :is-loading="isUserLoading"
          @cancel="showDialogTwoFactor = false"
          @confirm="onLogIn">
          <template #default>
            <!-- <div class="mb-4 text-center">
              <p class="text-sm text-gray-500">
                Please insert the authorization code we sent to your email
              </p>
            </div> -->
            <BaseTextInput
              v-model="pin"
              ref="pinTextInput"
              label="Please insert the authorization code we sent to your email "
              type="text"
              name="pin"
              placeholder="es. 13489"
              @keyup.enter="onLogIn" />
          </template>
        </BaseDialog>
        <div v-if="authError">
          <p class="mt-2 text-sm text-red-600">{{ authError }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
