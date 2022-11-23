<template>
    <div class="m-auto w-6/12 p-5 border-black border mb-10" v-for="question in tests">
        <h1 class="text-2xl">{{question.title}}</h1>
        {{question.description}}
        <p>{{question.questions.length}}</p>
        <router-link :to="{name: 'spec-test', params: {id: question.id}}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Solve</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tests: [
                {
                    id: 1,
                    title: "Simple Javascript Tests",
                    description: "These are very simple Javascript tests for beginners",
                    questions: [
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    title: "Simple Javascript Tests",
                    description: "These are very simple Javascript tests for beginners",
                    questions: [
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    title: "Simple Javascript Tests",
                    description: "These are very simple Javascript tests for beginners",
                    questions: [
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                        {
                            question: "O'zbekiston birinchi prezidenti kim?",
                            correctAnswer: "Islom Abduganievich Karimov",
                            incorrectAnswer: [
                                "asdf asdf",
                                "asdf asdfasdf",
                                "qwer qwerqwer",
                            ],
                        },
                    ],
                }
            ]
        }
    },
}
</script>