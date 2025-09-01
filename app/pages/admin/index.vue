<script setup lang="ts">
import { type PersonRow } from '~/types/person';
import type { TableColumn, FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

const { loggedIn, user } = useUserSession();

const { data, refresh } = useFetch<PersonRow[]>("/api/admin/person");

const columns: TableColumn<PersonRow>[] = [
  { accessorKey: 'id', header: '#', cell: ({ row }) => `#${row.getValue('id')}` },
  { accessorKey: 'name', header: 'name', cell: ({ row }) => `${row.getValue('name')}` },
  { accessorKey: 'age', header: 'age', cell: ({ row }) => `${row.getValue('age')}` }
]

const state = reactive({
  name: '',
  age: 18
})

async function submit(event: FormSubmitEvent<any>) {
  console.log('event', event)
  const result = await $fetch("/api/admin/person", { method: "POST", body: state })
  console.log('result', result)
  await refresh()
}
</script>

<template>
  <div>Home Page</div>
  <div v-if="loggedIn">
    <div>signed username: {{ user?.name }}</div>
  </div>
  <UTable :data="data ?? undefined" :columns="columns" :loading="!data"></UTable>
  <div>
    <UForm :state="state" @submit="submit">
      <UFormField label="name" name="name">
        <UInput v-model="state.name" />
      </UFormField>
      <UFormField label="age" name="age">
        <UInput v-model="state.age" type="number" />
      </UFormField>
      <UButton type="submit">
        Submit
      </Ubutton>
    </UForm>
  </div>
</template>
