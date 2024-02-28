function QuotesOfPerson(props) {
  console.log(props.person);

  props.setQuotes(
    <ul>
      {props.person?.quotes.map((quote, index) => (
        <li key={index}>{quote}</li>
      ))}
    </ul>,
  );
}

export default QuotesOfPerson;
