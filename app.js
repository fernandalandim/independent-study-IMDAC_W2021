const courses = [
    // Level 1 courses
    {
        index: 0,
        name: 'Communications I',
        code: 'ENL1813M',
        level: 1,
        id: ['design', 'video', 'motion', 'pm']
    },
    {
        index: 1,
        name: 'Introduction to Photography',
        code: 'MTM6101',
        level: 1,
        id: ['video', 'motion']
    },
    {
        index: 2,
        name: 'Responsive Web Design I',
        code: 'MTM6130',
        level: 1,
        id: ['design', 'front', 'back']
    },
    {
        index: 3,
        name: 'Digital Graphics',
        code: 'MTM6160',
        level: 1,
        id: ['design', 'motion']
    },
    {
        index: 4,
        name: 'Design Foundations',
        code: 'MTM6162',
        level: 1,
        id: ['design', 'video', 'front', 'motion', 'pm']
    },
    {
        index: 5,
        name: 'Design Thinking',
        code: 'DSN2100M',
        level: 1,
        id: ['design', 'pm']
    },
    {
        index: 6,
        name: 'Entrepreneurial Mindset',
        code: 'GED0020',
        level: 1,
        id: ['design', 'pm']
    },
    // Level 2 courses
    {
        index: 7,
        name: 'Communications II',
        code: 'ENL6007',
        level: 2,
        id: ['design', 'video', 'motion', 'pm']
    },
    {
        index: 8,
        name: 'Video Foundations',
        code: 'MTM6200',
        level: 2,
        id: ['video', 'motion', 'pm']
    },
    {
        index: 9,
        name: 'Content Management Systems I',
        code: 'MTM6231',
        level: 2,
        id: ['front', 'back']
    },
    {
        index: 10,
        name: 'Responsive Web Design II',
        code: 'MTM6201',
        level: 2,
        id: ['design', 'front', 'back']
    },
    {
        index: 11,
        name: 'User Experience Design',
        code: 'MTM6260',
        level: 2,
        id: ['design', 'video', 'front', 'motion', 'pm']
    },
    // Level 3 courses
    {
        index: 12,
        name: 'Motion Graphics I',
        code: 'MTM6301',
        level: 3,
        id: ['video', 'motion']
    },
    {
        index: 13,
        name: 'Introduction to JavaScript',
        code: 'MTM6302',
        level: 3,
        id: ['front', 'back']
    },
    {
        index: 14,
        name: 'Content Management Systems II',
        code: 'MTM6303',
        level: 3,
        id: ['front', 'back']
    },
    {
        index: 15,
        name: 'Media Project Planning',
        code: 'MTM6304',
        level: 3,
        id: ['design', 'video', 'pm']
    },
    // Level 4 courses
    {
        index: 16,
        name: 'Applied Projects',
        code: 'MTM6460',
        level: 4,
        id: ['design', 'video', 'front', 'back', 'motion', 'pm']
    },
    {
        index: 17,
        name: 'Digital Portfolio',
        code: 'MTM6461',
        level: 4,
        id: ['design', 'video', 'front', 'back', 'motion', 'pm']
    },
    {
        index: 18,
        name: 'Video Production',
        code: 'MTM6402',
        level: 4,
        id: ['video']
    },
    {
        index: 19,
        name: 'Motion Graphics II',
        code: 'MTM6403',
        level: 4,
        id: ['motion']
    },
    {
        index: 20,
        name: 'Web Production',
        code: 'MTM6404',
        level: 4,
        id: ['front']
    },
    {
        index: 21,
        name: 'Server-side Web Development',
        code: 'MTM6405',
        level: 4,
        id: ['back']
    }
]

const app = Vue.createApp({
    data: function () {
        return {
            careers: [
                { name: 'UI & UX Designer', value: 'design' },
                { name: 'Video Producer', value: 'video' },
                { name: 'Front-end Developer', value: 'front' },
                { name: 'Back-end Developer', value: 'back' },
                { name: 'Motion Graphics Designer', value: 'motion' },
                { name: 'Project Manager', value: 'pm' }
            ],
            courses: courses,
            showingCourses: courses,
            sort: null
        }
    },
    methods: {
        onChange() {
            this.showingCourses = this.courses.filter(course => course.career.includes(this.sort))
        }
    }
})

const vm = app.mount("#app");