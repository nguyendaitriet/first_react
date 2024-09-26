import { useState } from "react";
import { SampleTitle } from "./Components";

function Main() {
    const [show, setShow] = useState(false);

    return (
        <div className="Main">
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <SampleTitle />}
        </div>
    );
}

export default Main;