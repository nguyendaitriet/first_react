import { useState, useEffect } from "react";
import { SampleTitle } from "./Components";

function Main() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    const tabs = ['todos', 'users'];
    const [tabType, setTabType] = useState('todos')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tabType}`)
            .then(response => response.json())
            .then(list => setList(list))
    }, [tabType]);

    return (
        <div className="Main">
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show &&
                <>
                    <SampleTitle />
                    {
                        tabs.map(tab =>
                            <button
                                onClick={() => setTabType(tab)}
                                style={tab === tabType ? {color: "white", backgroundColor: "black"} : {}} 
                                key={tab}
                            >
                                {tab}
                            </button>
                        )
                    }
                    <input onChange={(e) => setTitle(e.target.value)} />
                    <ul>
                        {list.map(item => <li key={item.id}>{item.title || item.name}</li>)}
                    </ul>
                </>
            }
        </div>
    );
}

export default Main;