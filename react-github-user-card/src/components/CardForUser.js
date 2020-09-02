import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function CardForUser(props) {
    const extra = (
        <div>
            <a href={props.user.public_repos}>
                <Icon name='repos' />
            </a>
            <a href={props.user.html_url}>
                <Icon name='Github' />
            </a>
        </div>
    )

return(
    
    <Card className='CardForUser'
    image={props.user.avatar_url}
    header={props.user.login}
    key={props.user.id}
    alt={props.user.name}
    meta={props.user.location}
    description={props.user.bio}
    extra={extra}
    />
)
}

export default CardForUser;