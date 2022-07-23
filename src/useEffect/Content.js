import React, { useEffect, useState } from 'react';

let tabs = ['posts', 'comments', 'albums']

const Content = () => {

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then(json => setPosts(json))
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {tabs.map(tab => <button
                key={tab}
                style={type === tab ? { color: "white", backgroundColor: "red" } : {}}
                onClick={() => setType(tab)}
            >
                {tab}
            </button>)}
            <ul>
                {posts.map(post => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
            {
                showGoToTop && (
                    <button
                        style={{ position: 'fixed', right: 20, bottom: 20 }}
                    >
                        Go To Top
                    </button>
                )
            }
        </div>
    );
}

export default Content;
