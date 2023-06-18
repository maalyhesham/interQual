import React, { useState } from "react";
import HomePage from "./Pages/Home";
import TableProvider from "./ContextApp";

function App() {

    return (
        <TableProvider>
            <div>
                <HomePage />
            </div>
        </TableProvider>
    );
}

export default App;