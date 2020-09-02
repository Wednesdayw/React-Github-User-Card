import React from "react";
import { Card } from "semantic-ui-react";

function CardForFollowers(props) {

    return(
    <div className="cardForFollowers">
      {props.followers.map(followers => (
        <Card
          className="cardFollowers"
          key={followers.id}
          image={followers.avatar_url}
          alt={followers.login}
          header={followers.login}
          meta={<a href={followers.html_url}>Follower Info</a>}
         
        />
      ))}
    </div>
  )
}

export default CardForFollowers;