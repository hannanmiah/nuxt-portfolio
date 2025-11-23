<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    title="Skills"
    description="Technologies and tools I work with."
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <div class="flex flex-wrap gap-2 mt-4">
      <UBadge
        v-for="skill in page.skills"
        :key="skill"
        color="neutral"
        variant="subtle"
        size="md"
      >
        {{ skill }}
      </UBadge>
    </div>
  </UPageSection>
</template>
