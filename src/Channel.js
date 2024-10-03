import { useEffect, useState } from "react";

const channels = [
    {
        id: 1,
        title: "General Room"
    },
    {
        id: 2,
        title: "Marketing Room"
    },
    {
        id: 3,
        title: "Sale Room"
    },
]

function Channel() {
    const [mount, setMount] = useState(false);

    return (
        <>
            <button onClick={() => setMount(!mount)}>Toggle</button>
            {mount && <ChannelTest />}
        </>
    )

}

function ChannelTest() {
    const [channelId, setChannelId] = useState(1);

    const handleComment = ({detail}) => {
        console.log(detail);
    }

    useEffect(() => {
        window.addEventListener(`channel-${channelId}`, handleComment);

        return () => {
            window.removeEventListener(`channel-${channelId}`, handleComment);
        }
    }, [channelId])

    return (
        <>
            <ul>
                {channels.map(channel =>
                    <li
                        style={channelId === channel.id ? {color: "red"} : {}}
                        key={channel.id}
                        onClick={() => setChannelId(channel.id)}
                    >
                        {channel.title}
                    </li>)
                }
            </ul>
        </>
    )
}

export default Channel;