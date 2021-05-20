import React from 'react';

export default function JournalPost(props) {
  const { date, title } = props;

  return (
    <>
      <a name={date}><h2>{date}</h2></a>
      <h2>{title}</h2>
      {props.children}
      <br />
    </>
  );
}