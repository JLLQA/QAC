import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from "react-collapsible-component";

const Showtimes = ({ data }) => {
    if (data.showtimes[0].times.length > 0) {

        return (
            <>
                <div>
                    <br />
                    <h3>Show Times - {data.title}</h3>
                    <CollapsibleComponent>
                        {data.showtimes.map((day) => (
                            <>
                                <CollapsibleHead className="additionalClassForHead">
                                    <p>
                                        {day.day}
                                    </p>
                                </CollapsibleHead>
                                <CollapsibleContent className="additionalClassForContent">
                                    {day.times.map((time) => (
                                        <>
                                            <p>{time.time}</p>
                                            <p>{time.screen}</p>
                                        </>
                                    )
                                    )}
                                </CollapsibleContent>
                            </>
                        ))}
                    </CollapsibleComponent>
                </div>
            </>
        )
    } else{
        return (
            <>
                <div>
                    <br />
                    <h3>Show Times - {data.title}</h3>
                    
                    <h4>NO SHOW TIMES</h4>
                </div>
            </>
        )
    }
}

export default Showtimes;