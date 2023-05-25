<template>
  <div class="product-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="50" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="age" label="Age" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="dob" label="Date of Birth" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { Student } from '@/stores/studentStore';

defineProps<{
  tableData?: Student[]
}>()
</script>
