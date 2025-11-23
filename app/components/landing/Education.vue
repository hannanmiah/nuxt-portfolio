<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div class="space-y-12">
    <UPageSection
      :title="page.education.title"
      :ui="{
        container: '!p-0',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      }"
    >
      <div class="flex flex-col gap-y-4 mt-4">
        <div v-for="(item, index) in page.education.items" :key="index" class="flex flex-col gap-y-1">
          <div class="flex items-center justify-between">
            <h3 class="font-medium text-gray-900 dark:text-white">{{ item.degree }}</h3>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.date }}</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.institution.name }}</p>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      :title="page.certificates.title"
      :ui="{
        container: '!p-0',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      }"
    >
      <div class="flex flex-col gap-y-4 mt-4">
        <div v-for="(item, index) in page.certificates.items" :key="index" class="flex flex-col gap-y-1">
          <h3 class="font-medium text-gray-900 dark:text-white">{{ item.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.issuer }}</p>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      :title="page.awards.title"
      :ui="{
        container: '!p-0',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      }"
    >
      <div class="flex flex-col gap-y-4 mt-4">
        <div v-for="(item, index) in page.awards.items" :key="index" class="flex flex-col gap-y-1">
          <div class="flex items-center justify-between">
            <h3 class="font-medium text-gray-900 dark:text-white">{{ item.title }}</h3>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.date }}</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.issuer }}</p>
          <p v-if="item.description" class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
