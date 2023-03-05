import { useState } from 'react';

import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

const OPTIONS = ['good', 'neutral', 'bad']

export default function App (){
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onClickBtn = e => {
        const value = e.target.value;

        switch(value){
            case OPTIONS[0]:
            return setGood(prev => prev + 1);
            case OPTIONS[1]:
            return setNeutral(prev => prev + 1);
            case OPTIONS[2]:
            return setBad(prev => prev + 1);
            default:
            return;
        }
        
    };

    const countTotalFeedback = () => {
        return [good, neutral, bad].reduce((c, v) => c + v, 0);
    };

    const countPositiveFeedbackPercentage = () => {
        const percent = Math.round((good / countTotalFeedback()) * 100);

        return percent ? percent : 0;
    };


    return(
        <Container>
        <Section
            title="Please leave feedback"
            children={
                <FeedbackOptions
                    options={OPTIONS}
                    onLeaveFeedback={onClickBtn}
                />
            }
        />

        <Section
            title="Statistic"
            children={
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            }
        />
    </Container>
    )
}