import { USERS } from "./users";

export const POSTS = [

    {
        imageUrl : 'https://robohash.org/quiaeumharum.png?size=50x50&set=set1',
        user : USERS[0].name,
        likes:7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[0].image,
        comments:[
            {
                user:'theqman',
                comment:'wow this build'
            },
            {
                user:'amanath.dev',
                comment: 'Once i wake up'
            },
        ],

    },
    {
        imageUrl : 'https://robohash.org/nihilquiasperiores.png?size=50x50&set=set1',
        user : USERS[1].name,
        likes:7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[1].image,
        comments:[
            {
                user:'theqman',
                comment:'wow this build'
            },
            {
                user:'amanath.dev',
                comment: 'Once i wake up'
            },
        ],

    },

]

