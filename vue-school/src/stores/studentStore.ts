import axios from 'axios'
import { defineStore } from 'pinia'


export interface Student {
  id: number
  name: string
  email: string
  dob: string
  age: number
}

export const useStudentStore = defineStore('studentStore', {

  state: () => ({
    student: [] as Student[],
    baseUrl: "http://localhost:9090/api/v1"
  }),

  actions: {
    async getStudents() {
      await axios.get(`${this.baseUrl}/student`).then(data=>{
        if(data.status === 200){
          this.student = data.data
        }
      })
    },
  }
})
