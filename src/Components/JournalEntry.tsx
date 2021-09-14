import { isPropertyDeclaration } from "typescript";
import Entry from "./Entry"

interface JournalEntryProps {
    image: string;
    title: string;
    location: string;
    mapLink: string;
    description: string;
  }
  
  function JournalEntry(props: JournalEntryProps): JSX.Element {
    return (
      <section>
        <img src={props.image} alt = "hello" width="500" height="500" /> 
        <h2>{props.title}</h2>
        <h3>
            {props.location} 
            <a href = {props.mapLink}> (maps link)</a>
         </h3>
        <p>{props.description}</p>
      </section>
    );
  }

  // function JournalEntry(props: JournalEntryProps): JSX.Element {
  //   return (
  //     {props.map((extractData) => {
  //     <Entry />

  //   )
  // }
  
export default JournalEntry;
  