import React from "react";

const feedbacks = [
  {
    id: Math.random(),
    name: "hsin",
    comment: "this dribble ",
  },
  {
    id: Math.random(),
    name: "oussama",
    comment: "the goat ",
  },
  {
    id: Math.random(),
    name: "ahmed",
    comment: "dribbling messi ",
  },
  {
    id: Math.random(),
    name: "mabrouk",
    comment: "G.O.A.T ",
  },
  {
    id: Math.random(),
    name: "mohamed ali",
    comment: "messi is the best player in the world ",
  },
  {
    id: Math.random(),
    name: "mohamed",
    comment: "G.O.A.T ",
  },
];
console.log(feedbacks[0].id);
console.log(feedbacks[1].id);
const Comment = () => {
  return (
    <div>
      <textarea
        style={{
          width: "853px",
          height: "50px",
          marginTop: "15px",
          marginBottom: "15px",
        }}
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
      ></textarea>
      <input type="text" name="" id="" placeholder="enter your comment" />
      {feedbacks.map((el) => (
        <div key={el.id}>
          <div style={{ display: "flex" }}>
            <img
              style={{ borderRadius: "100%" }}
              width="30px"
              height="30px"
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt=""
            />
            <h4>{el.name} </h4>
          </div>
          <p>{el.comment} </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Comment;
