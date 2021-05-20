import React from 'react';

export default function JournalPost(props) {
  const { date, title } = props;

  return (
    <>
      <a name={date}><h2>{date}</h2></a>
      <h3>{title}</h3>
      {props.children}
      <br />
    </>
  );
}