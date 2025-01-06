import { useState } from 'react';
import './hookErrorChallenges.css';

const 
descriptionTxt='Imagine you are doing a code review. Please help junior developer to make better use of React.',
placeCommentsHereTxt='Place comments in file (src/component/HookErrorChallenges.tsx).',
challenges = [
  {
    title: '1.) Hook Code Review',
    description: descriptionTxt,
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
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '2.) Hook Code Review',
    description: descriptionTxt,
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
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '3.) Hook Code Review',
    description: descriptionTxt,
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
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '4.) Hook Code Review',
    description: descriptionTxt,
    code: (
      <div className="code-block">
        <pre>
{`const Component = () => {
  return useState(''); // 
};`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '5.) Hook Code Review',
    description: descriptionTxt,
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
    comment: (
      <p className="challenge-comment">
        The <code>useEffect</code> dependency array is empty, so it won’t log new values if <code>value</code> changes. It should include <code>[value]</code> if you want to track changes.
      </p>
    ),
  },
  {
    title: '6.) Hook Code Review',
    description: 'Add comment to code block below so junior developer knows what mistake he/she made..',
    code: (
      <div className="code-block">
        <pre>
{`import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetchData();
    }, [fetchData]);

  const fetchData = async () => {
    const result = await fetch('https://api.example.com/data');
    setData(result.data);
  };
  
  return <div>{data}</div>;
};
export default ExampleComponent;`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '6.) Hook Code Review',
    description: descriptionTxt,
    code: (
      <div className="code-block">
        <pre>
{`import { useEffect } from 'react'

const Component = () => {
  useEffect(() => {
    // Some code that needs to run once when component first renders.
  })

  return <div>Example</div>
}`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '7) Hook Code Review',
    description: descriptionTxt,
    code: (
      <div className="code-block">
        <pre>
{`import { useCallback } from 'react'
import externalFunction from '/services/externalFunction'

const Component = () => {
  // Do not do this.
  const handleClick = useCallback(() => {
    externalFunction()
  }, [])

  return <button onClick={handleClick}>Click me</button>
}`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '8.) Hook Code Review',
    description: descriptionTxt,
    code: (
      <div className="code-block">
        <pre>
{`const Component = () => {

  // Don't do this.
  const ChildComponent = () => {
    return <div>I'm a child component</div>
  }

  return <div><ChildComponent /></div>
}`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '9.) Hook Code Review',
    description: descriptionTxt,
    code: (
      <div className="code-block">
        <pre>
{`import { useState } from 'react'

const Component = () => {
  const [text, setText] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState(false)

  const handleChange = (event) => {
    const value = event.target.value
    setText(value)

    if (value.length < 6) {
      setError('Too short')
    } else {
      setError('')
    }
  }

  return <>
    {!touched && <div>Write something...</div> }
    <input type="text" value={text} onChange={handleChange} />
    <div>Error: {error}</div>
  </>
}`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
    ),
  },
  {
    title: '10.) Hook Code Review',
    description: descriptionTxt,
    code: (
      <div className="code-block">
        <pre>
{`import React from 'react';

function MyComponent() {
  const handleClick = () => {
    const heading = document.getElementById('my-heading');
    if (heading) {
      heading.style.color = 'red';
      heading.textContent = 'Hello World! You are the best.';
    }
  };

  return (
    <div>
      <h1 id="my-heading">Hello, React!</h1>
      <button onClick={handleClick}>Change Heading</button>
    </div>
  );
}

export default MyComponent;`}
        </pre>
      </div>
    ),
    comment: (
      <p className="challenge-comment">
        {placeCommentsHereTxt}
      </p>
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

        {/* The code snippet */}
        <div className="challenge-code">
          {challenges[activeTab].code}
        </div>

        {/* New element for comments */}
        {challenges[activeTab].comment}
      </div>
    </div>
  );
};

export {
  HookErrorChallenges
};
