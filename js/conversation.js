
const chat = {
    1: {
        text: 'Hi! Welcome to bot.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'bot is a <em>really simple</em>, choice-driven chatbot framework made in <del>less than</del> just over 100 lines of vanilla JavaScript',
        next: 3
    },
    3: {
        text: 'But you probably knew that anyway.',
        options: [
            {
                text: "<strong>Yes</strong>, I did!",
                next: 4
            },
            {
                text: "<strong>Nope</strong>, this is news.",
                next: 5
            },
            {
                text: "<strong>okay.....</strong>, heheha",
                next: 7
            }
        ]
    },
    4: {
        text: 'Awesome. This chat is still in development. Happy coding!',
    },
    5: {
        text: 'Aah, you\'re missing out!',
        next: 6
    },
    6: {
        text: 'You should check it out on GitHub',
        options: [
            {
                text: "Go to GitHub",
                url: "https://github.com/bot/bot"
            }
        ]
    },

    7: {
        text: 'check this',
        options: [
            {
                text: "feet",
                url: "www.google.com"
            }
        ]
    }
};
