import { useState, useEffect } from "react";
import { SampleTitle } from "./Components";
import Countdown from "./Countdown";

function Main() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    const tabs = ['posts', 'todos', 'users'];
    const [tabType, setTabType] = useState('todos')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tabType}`)
            .then(response => response.json())
            .then(list => setList(list))
    }, [tabType]);

    const [toTop, setToTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => setToTop(window.scrollY >= 200))
        return () => console.log('unmounted');
        
    }, [])

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
                    {toTop && <button style={{position: "fixed", bottom: 0}}>To Top</button>}
                    <Countdown />
                </>
            }
        </div>
    );
}

export default Main;