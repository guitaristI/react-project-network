// import member_1 from "../img/member-1.png";
// import member_2 from "../img/member-2.png";
// import member_3 from "../img/member-3.png";
// import member_4 from "../img/member-4.png";
// import feed_image_1 from "../img/feed-image-1.png";
// import feed_image_2 from "../img/feed-image-2.png";
// import feed_image_3 from "../img/feed-image-3.png";
// import feed_image_4 from "../img/feed-image-4.png";
// import feed_image_5 from "../img/feed-image-5.png";
// import dialogsReducer from "./dialogs-reducer";
// import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profiles-reducer";
//
//
// let store = {
//     _state: {
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, avatar: member_1, name: 'Alison Mina', message: "I'll do it later"},
//                 {id: 2, avatar: member_2, name: 'Jackson Aston', message: "I bought a new car"},
//                 {id: 3, avatar: member_3, name: 'Samona Rose', message: "It's so beautiful"},
//                 {id: 4, avatar: member_4, name: 'John Doe', message: "Today is sunny"},
//             ],
//             messageData: [
//                 {id: 1, message: 'Today is sunny'},
//                 {id: 1, message: "It's good weather for this day"},
//             ],
//             selfMessageData: [
//                 {id: 1, message: 'When are you coming here?'}
//             ],
//             newMessageText: ''
//
//         },
//         profilePage: {
//             postsData: [
//                 {id: 1, text: "Subscribe YouTube channel's to watch more videos on website development and UI design.", image: feed_image_1, likeCount: 120, commentsCount: 45, shareCount: 20},
//                 {id: 2, text: "Subscribe YouTube channel's to watch more videos on website development and UI design.", image: feed_image_2, likeCount: 12, commentsCount: 52, shareCount: 22},
//                 {id: 3, text: "Subscribe YouTube channel's to watch more videos on website development and UI design.", image: feed_image_3, likeCount: 55, commentsCount: 10, shareCount: 75},
//                 {id: 4, text: "Subscribe YouTube channel's to watch more videos on website development and UI design.", image: feed_image_4, likeCount: 98, commentsCount: 5, shareCount: 0},
//                 {id: 5, text: "Subscribe YouTube channel's to watch more videos on website development and UI design.", image: feed_image_5, likeCount: 70, commentsCount: 25, shareCount: 1},
//             ],
//             newPostText: ''
//         }
//     },
//     _callSubscriber () {
//         console.log('State changed')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state
//     },
//     dispatch (action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber(this._state)
//     }
// }
//
//
//
//
//
// export default store;
// window.store = store;