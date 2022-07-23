import React, { useEffect, useState } from 'react';

const lessons = [
    {
        id: 1,
        name: "Reactjs là gì, tại sao nên học Reacjs?"
    },
    {
        id: 2,
        name: "SPA,MPA là gì?"
    },
    {
        id: 3,
        name: "Arrow function"
    }
]

const EmitComment = () => {

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`leason-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`leason-${lessonId}`, handleComment)
        };
    }, [lessonId]);

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{ color: lessonId === lesson.id ? "red" : "#333", cursor: "pointer" }}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmitComment;
