import React, { useState } from 'react';
import './HookErrorChallenges.css';

const challenges = [
  {
    title: '1.) Hook Code Review',
    description: 'Add comment to code block below so junior developer knows what mistake he/she made.',
    code: (
      <div className="code-block">
        <pre>
          {`const Component = () => {
  if (true) {
    const [state, setState] = useState(''); 
  }

  return <div>{state}</div>;
};`}
        </pre>
      </div>
    ),
  },
  {
    title: '2.) Hook Code Review',
    description: 'Add comment to code block below so junior developer knows what mistake he/she made.',
    code: (
      <div className="code-block">
        <pre>
          {`const Component = () => {
  for (let i = 0; i < 3; i++) {
    const [count, setCount] = useState(0);
  }

  return <div>Count</div>;
};`}
        </pre>
      </div>
    ),
  },
  {
    title: '3.) Hook Code Review',
    description: 'Add comment to code block below so junior developer knows what mistake he/she made.',
    code: (
      <div className="code-block">
        <pre>
          {`const Component = () => {
  const fetchData = () => {
    useEffect(() => {
      console.log('Fetching data');
    }, []);
  };

  return <button onClick={fetchData}>Fetch</button>;
};`}
        </pre>
      </div>
    ),
  },
  {
    title: '4.) Hook Code Review',
    description: 'Add comment to code block below so junior developer knows what mistake he/she made.',
    code: (
      <div className="code-block">
        <pre>
          {`const Component = () => {
  return useState(''); // 
};`}
        </pre>
      </div>
    ),
  },
  {
    title: '5.) Hook Code Review',
    description: 'Add comment to code block below so junior developer knows what mistake he/she made..',
    code: (
      <div className="code-block">
        <pre>
          {`const Component = ({ value }) => {
  useEffect(() => {
    console.log(value); 
  }, []);

  return <div>{value}</div>;
};`}
        </pre>
      </div>
    ),
  },
];

const HookErrorChallenges = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="hook-challenge-container">
      <div className="tabs">
        {challenges.map((challenge, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {challenge.title}
          </button>
        ))}
      </div>
      <div className="challenge-content">
        <h2>{challenges[activeTab].title}</h2>
        <p>{challenges[activeTab].description}</p>
        <div className="challenge-code">{challenges[activeTab].code}</div>
      </div>
    </div>
  );
};

export {
   HookErrorChallenges
}
