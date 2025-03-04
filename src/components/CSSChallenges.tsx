import { useState } from 'react';
import './cssChallenges.css';

const challenges = [
  {
    title: '1.) Width/Height Issue',
    description: 'Fix the element so that it can have a specified width and height.',
    code: (
      <div className="width-height-issue">This box should be 200px wide and 50px high.</div>
    ),
  },
  {
    title: '2.) Element Spacing',
    description: 'There should not be light gray between comments.',
    code: (
      <>
        <div className="comment">First Comment</div>
        <div className="comment">Second Comment</div>
      </>
    ),
  },
  {
    title: '3.) Semantic HTML',
    description: 'Fix the semantic issue below',
    code: <section className="width-height-issue">
      <h1>Hello World!</h1>
      <div className="comment">
        <h1>Good Bye World!</h1>
      </div>
    </section>,
  },
  {
    title: '4.) Rookie Mistake',
    description: 'Assume the below is isolated code.  Has no side effects or references. Find and fix the rookie mistake below',
    code: <div id="comment-box"><span>This is a comment</span></div>,
  },
  {
    title: '5.) Selector Specificity Issue',
    description: 'Fix the CSS so the background color of important comments is correct (red).',
    code: <div className="comment"><span className="important-comment">This is an important comment</span></div>,
  },
  {
    title: '6.)Floated Elements',
    description: 'The red box should be on the left edge of a blue box.',
    code: (
      <div className="float-container">
        <div className="float-left">Floated Left</div>
      </div>
    ),
  },
  {
    title: '7.) Text Overflow Issue',
    description: 'Handle long text by truncating it with an ellipsis.',
    code: <div className="text-box">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</div>,
  },
  {
    title: '8.) Vertical Alignment Issue',
    description: 'Vertically center the child element within the container.',
    code: (
      <div className="vertical-container">
        <span className="vertical-child">Centered Text</span>
      </div>
    ),
  },
  {
    title: '9.) Absolute Positioning Issue',
    description: '"Positioned Element" should aligned at the bottom left corner of the of green box.',
    code: (
      <div className="parent">
        <div className="child">Positioned Element</div>
      </div>
    ),
  },
  {
    title: '10.) Code to HTML semantic standards ',
    description: 'What is wrong? Please fix.',
    code: <input type="button" value="CLICK ME!!" onClick={()=>{ window.location.href = '/'}} />,
  },
];

const CSSChallenges = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="challenge-container">
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

export default CSSChallenges;
