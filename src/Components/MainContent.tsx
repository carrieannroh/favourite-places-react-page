import JournalEntry from "./JournalEntry";
import tajmahal from "../images/tajmahal.jpg";
import cliff from "../images/cliff.jpg";
import hills from "../images/hills.jpg";
import bridges from "../images/bridges.jpg";
 
//places [
    //image:"tajmahal", title:{"our mother"}, }
//]
interface JournalEntryProps {
    image: string;
    title: string;
    location: string;
    mapLink: string;
    description: string;
  }


function MainContent(): JSX.Element {
    //explicitly telling it that places is type journalentryprops[array]
    const places: JournalEntryProps[] = [
        //need a comma between elements in an array
        {image:tajmahal,title: "Our Mother", location:"Taj Mahal, India", mapLink:"https://goo.gl/maps/b3btM4u3GQ3pbU6v6",description:"Here is the Taj Mahal" },
        {image:cliff, title:"Here's a cliff", location:"cliff cliff", mapLink:"https://goo.gl/maps/bxNpTZfjv1ySppi96",description:"some nice cliffs"}
    ]
    

    return (
      <main>
          {/* function placesLoop(places) {
          return places.map[0]
} */}

        <JournalEntry
          image={places[0].image}
          title={places[0].title}
          location={places[0].location}
          mapLink={places[0].mapLink}
          description={places[0].description}
        />

        <JournalEntry
          image={places[1].image}
          title={places[1].title}
          location={places[1].location}
          mapLink={places[1].mapLink}
          description={places[1].description}
        />
        
        {/* <JournalEntry
          image={hills}
          title={"Hills"}
          location={"Hills, hills"}
          mapLink={"https://goo.gl/maps/Ayr1ouGu7biJs22A7"}
          description={"Follow the link to see chocolate hills in the Phillipines"}
        />
        
        <JournalEntry
          image={bridges}
          title={"Bridges"}
          location={"bridges, Bridges"}
          mapLink={"https://goo.gl/maps/53CyPanriUpAFSCo9"}
          description={"Here is a nice bridge, I think it's in Venice"}
        /> */}
        
      </main>
    );
  }

export default MainContent;
