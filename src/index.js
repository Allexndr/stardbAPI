import React from "react";
import ReactDOM from 'react-dom';
import AppHeader from "../../../../Downloads/todo-54914f644c58880e7aac3888d6ddcf4bcdadd8c2/src/components/app-header";
import SearchPanel from "../../../../Downloads/todo-54914f644c58880e7aac3888d6ddcf4bcdadd8c2/src/components/search-panel";
import TodoList from "../../../../Downloads/todo-54914f644c58880e7aac3888d6ddcf4bcdadd8c2/src/components/todo-list";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);