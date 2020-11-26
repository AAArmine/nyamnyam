import { rerenderEntireTree } from "../Render";

let state = {
    profilePage: {
        myPostArr: [
            { id: '1', message: 'Hello', likesCount: '23' },
            { id: '2', message: 'acnknknkdacv ', likesCount: '53' },
            { id: '3', message: 'Hsfv fsdf', likesCount: '3' },
            { id: '4', message: 'yoyo', likesCount: '93' },
            { id: '5', message: 'hehEEEhnsncs', likesCount: '193' },
            { id: '6', message: 'Hey im here', likesCount: '1193' }
        ]
    },
    dialogsPage: {
        messageArr: [
            { id: '1', message: 'hih' },
            { id: '2', message: 'Swui' },
            { id: '3', message: 'bla' },
            { id: '4', message: 'Jenyzryaa' },
            { id: '5', message: 'dla' },
            { id: '6', message: 'Barlus' },
        ],
        namesArr: [
            { id: '1', name: 'Dimich' },
            { id: '2', name: 'Sasha' },
            { id: '3', name: 'Pasha' },
            { id: '4', name: 'Jenya' },
            { id: '5', name: 'Sveta' },
            { id: '6', name: 'Armine' }
        ]
    },
    navPage: {
        friendsArr: [
            { id: 1, name: 'Alex', src: 'https://img.favpng.com/3/16/22/avatar-computer-icons-job-person-png-favpng-JreHekcn8kwimtFeJzYPekHmg.jpg' },
            { id: 1, name: 'Masha', src: 'https://img2.pngio.com/avatar-female-person-user-woman-young-icon-avatar-person-png-512_512.png' },
            { id: 1, name: 'Pasha', src: 'data:image/jpeg;base64,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' }
        ]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: "7", message: postMessage, likesCount: 88
    }
    state.profilePage.myPostArr.push(newPost);
    rerenderEntireTree(state);
}


export default state;