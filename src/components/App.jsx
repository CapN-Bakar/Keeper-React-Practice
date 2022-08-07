import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App(){
    return (
        <div>
            <Header />
            {notes.map((notess) => (<Note key = {notess.key} title = {notess.title} content = {notess.content} />))}
            <Footer />
        </div>
    );
}

export default App;