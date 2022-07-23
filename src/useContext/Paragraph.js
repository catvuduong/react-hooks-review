import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Paragraph = () => {

    const context = useContext(ThemeContext);
    return (
        <div className={context.theme}>
            Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.
        </div>
    );
}

export default Paragraph;
