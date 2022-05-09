import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";



// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>,
//     document.getElementById('root')
// );
const root = createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>)



// const settingsMenu = document.querySelector('.settings-menu');
// const darkBtn = document.getElementById('dark-btn');
//
// export function settingsMenuToggle(){
//     settingsMenu.classList.toggle('settings-menu-height')
// }
//
// darkBtn.onclick = function(){
//     darkBtn.classList.toggle('dark-btn-on');
//     document.body.classList.toggle('dark-theme');
// }




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
