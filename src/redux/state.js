
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
        dialogsArr: [
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
            {id:1, name:'Alex'},
            {id:1, name:'Masha'},
            {id:1, name:'Pasha'}
        ]
    }
 }
 let addPost = (insertedText) =>{
     let newPost = {
         id: 7,
         message:insertedText,
         likesCount: '23'
     }
     state.myPostArr.myPostArr.push()

 }
export default state;