// pages/RTKApiPage.tsx
const boxStyle = {
  backgroundColor: 'skyblue',
  padding: '10px',
  textAlign:  'justify' as React.CSSProperties['textAlign'],
};

const RTKApiInstructionsPage = () => (<section style={boxStyle}>
    <div>
      <h1>RTK API Challenge</h1>
  <div >
  <h3>Instructions for the Candidate</h3>
  <h4>src\pages\RTKApiPage.tsx</h4>
  <ol>
    <li>
      <strong>Fetch the Data:</strong>
      <p>Use the <code>useGetCommentsQuery</code> hook to fetch the list of comments.</p>
    </li>
    <li>
      <strong>Handle Loading and Error States:</strong>
      <p>Show a loading message while fetching. Show an error message if the fetch fails.</p>
    </li>
    <li>
      <strong>Display the Comments:</strong>
      <p>Render each comment with its <code>text</code> and <code>isApproved</code> status. Use a <code>&lt;button&gt;</code> to toggle the approval status.</p>
    </li>
    <li>
      <strong>Implement the <code>toggleApproval</code> Function:</strong>
      <p>Add a function to update the <code>isApproved</code> status when the button is clicked.</p>
    </li>
    <li>
      <strong>Handle Loading and Error States:</strong>
      <p>Show pending and error states.</p>
    </li>
    <li>
      <strong>Implement a <code>addComment</code> Function:</strong>
      <p>Add a functionality to add a comment when a button is pushed.</p>
    </li>
    <li>
      <strong>Handle Loading and Error States:</strong>
      <p>Show pending and loading states.</p>
    </li>
  </ol>
</div>

<div  >
  <h3>Optional Challenge Additions</h3>
  <ul>
    <li>
      <strong>Edge Cases:</strong>
      <p>Handle cases where there are no comments.</p>
    </li>
  </ul>
</div>
    </div>
    </section>);

export default RTKApiInstructionsPage;
