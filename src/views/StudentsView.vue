<template>
  <div class="students-app mx-10">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-extralight mb-5">Create Student</h1>
      <form @submit.prevent="createStudent">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Phone
          </label>
          <input v-model="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="text" placeholder="+998">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="John">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="passport">
            O'quv kursi
          </label>
          <input v-model="course"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passport" type="text" placeholder="Javascript">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th @click="sortList('id')" class="cursor-pointer">
              ID
            </th>
            <th @click="sortList('name')" scope="col" class="py-3 px-6  cursor-pointer">
              <div class="flex items-center">
                F.I.O
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true"
                    fill="currentColor" viewBox="0 0 320 512">
                    <path
                      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Telefon
              </div>
            </th>
            <th @click="sortList('course')" scope="col" class="py-3 px-6 cursor-pointer">
              <div class="flex items-center">
                Q'quv kursi
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true"
                    fill="currentColor" viewBox="0 0 320 512">
                    <path
                      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="(student, index) in sortedData" :key="index">
            <th>{{ student.id }}</th>
            <th @click="sortBy('name')" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
              {{ student.name }}
            </th>
            <td class="py-4 px-6">
              {{ student.phone }}
            </td>
            <td class="py-4 px-6">
              {{ student.course }}
            </td>

            <td class="py-4 px-6 flex gap-10">
              <a @click="updateStudent(student.id)" href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
              <a @click="deleteStudent(student.id)" href="#" class="font-medium text-red-600 hover:underline">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "FormView",
  data() {
    return {
      phone: '',
      name: '',
      course: '',
      studentID: null,
      sortedData: [],
      sortedbyASC: true,
      students: [
        {
          id: 1,
          name: 'Jo\'rayev Nurali',
          phone: '+999999999999',
          course: 'Frontend Dasturlash'
        },
        {
          id: 2,
          name: 'Esonboyeva Malika',
          phone: '+999999999999',
          course: 'Backend Dasturlash'
        },
        {
          id: 3,
          name: 'Qurbonova Shaxnoza',
          phone: '+999999999999',
          course: 'Android Dasturlash'
        }
      ]
    }
  },
  mounted() {
    this.sortedData = this.students;
  },
  methods: {
    createStudent() {
      if (this.studentID != null) {
        let findStudent = this.students.find(user => user.id == this.studentID)
        console.log(findStudent)
        findStudent.name = this.name
        findStudent.phone = this.phone
        findStudent.course = this.course
        this.name = ''
        this.phone = ''
        this.course = ''
        this.studentID = null
      } else if (this.phone && this.name && this.course) {
        let newStudent = {
          id: this.students.length + 1,
          name: this.name,
          phone: this.phone,
          course: this.course
        }
        this.students.push(newStudent)
        this.name = ''
        this.phone = ''
        this.course = ''
      } else {
        alert('iltimos barcha kataklarni toldiring')
      }
    },
    deleteStudent(id) {
      this.students.splice(this.students.indexOf(id), 1)
    },
    updateStudent(id) {
      let findStudent = this.students.find(user => user.id == id)
      this.name = findStudent.name
      this.phone = findStudent.phone
      this.course = findStudent.course
      this.studentID = id
    },
    sortList(sortBy) {
      if (this.sortedbyASC) {
        this.students.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        this.sortedbyASC = false;
      } else {
        this.students.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
        this.sortedbyASC = true;
      }
    },
  },
}
</script>
  