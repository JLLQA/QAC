import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from "react-collapsible-component";

const Showtimes = (props) =>{

    return (
        <div>
            <h4>Show Times</h4>
            <CollapsibleComponent>
                <CollapsibleHead className="additionalClassForHead">
                    {props.data.Title}
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        {props.data.Actors}
                    </p>
                </CollapsibleContent>
                <CollapsibleHead className="additionalClassForHead">
                    Day 1 + 1   
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        Lorem
                    </p>
                </CollapsibleContent>
                <CollapsibleHead className="additionalClassForHead">
                    Day 1 + 2    
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        Lorem 
                    </p>
                </CollapsibleContent>
                <CollapsibleHead className="additionalClassForHead">
                    Day 1 + 3    
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        Lorem 
                    </p>
                </CollapsibleContent>
                <CollapsibleHead className="additionalClassForHead">
                    Day 1 + 4    
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        Lorem 
                    </p>
                </CollapsibleContent>
                <CollapsibleHead className="additionalClassForHead">
                    Day 1 + 5    
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        Lorem 
                    </p>
                </CollapsibleContent>
                <CollapsibleHead className="additionalClassForHead">
                    Day 1 + 6    
                    </CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>
                        Lorem 
                    </p>
                </CollapsibleContent>
            </CollapsibleComponent>
            <br></br>
        </div>
    )
}

export default Showtimes;