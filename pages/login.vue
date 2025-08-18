<script lang="ts" setup>
definePageMeta({
  layout: false,
});
import type { FormSubmitEvent } from "@nuxt/ui";

const state = reactive({
  username: "",
  password: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<any>) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event.data),
  });
  if (res.status != 200) {
    toast.add({
      title: "Fail",
      description: "用户名或密码错误",
      color: "info",
    });
  }
  var data = (await res.json()) as { code: number; error: string };
  console.log(data);
  if (data.code == 1) {
    toast.add({
      title: "Success",
      description: "登录成功",
      color: "info",
    });
    location.href = "/";
  } else {
    toast.add({
      title: "Fail",
      description: data.error,
      color: "info",
    });
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <UForm :state="state" @submit="onSubmit">
      <UFormField label="Username" name="username">
        <UInput v-model="state.username" />
      </UFormField>

      <UFormField label="Password" name="password" class="mt-4">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit" class="mt-4">Submit</UButton>
    </UForm>
  </div>
</template>
