<template>
  <div class="product-container">
    <h2>Student Listing</h2>
    <br>
    <DataTable :tableData="studentStore.student"/>
  </div>
</template>

<script lang="ts" setup>
import { useStudentStore } from '@/stores/studentStore';
import { defineAsyncComponent } from 'vue';

const DataTable = defineAsyncComponent(()=>import('@/components/DataTable.vue'))

const studentStore = useStudentStore();

studentStore.getStudents();
</script>
