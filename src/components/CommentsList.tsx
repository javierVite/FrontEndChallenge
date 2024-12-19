import React from 'react';
import { useGetCommentsQuery } from './commentsApi';

const CommentsList = () => {
  // Fetch comments using the useGetCommentsQuery hook

  // Create a function to toggle the approval status of a comment

  // Handle loading and error states

  // return (
  //   <div>
  //     <h2>Comments</h2>
  //     <ul>
  //       {/* Display the list of comments here */}
  //       {/* Each comment should have a button to toggle its approval status */}
  //     </ul>
  //   </div>
  // );

return (<>
  <div >
  <h3>Instructions for the Candidate</h3>
  <ul>
    <li>
      <strong>Comment these instruction out.  Comment the above JSX in.</strong>
      <br/>
      <br/>
    </li>
    <li>
      <strong>Fetch the Data:</strong>
      <p>Use the <code>useGetCommentsQuery</code> hook to fetch the list of comments.</p>
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
      <p>Show a loading message while fetching. Show an error message if the fetch fails.</p>
    </li>
  </ul>
</div>

<div  >
  <h3>Optional Challenge Additions</h3>
  <ul>
    <li>
      <strong>Edge Cases:</strong>
      <p>Handle cases where there are no comments.</p>
    </li>
    <li>
      <strong>State Management:</strong>
      <p>Ensure that the original fetched data is not mutated directly.</p>
    </li>
  </ul>
</div>
</>
)
};

export default CommentsList;
