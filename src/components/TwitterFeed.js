import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

function TwitterFeed() {
    return (
        <div id="twitter">
            <p>Tweets</p>
            <TwitterTimelineEmbed
                sourceType='widget'
                screenName='kmarks2013'
                options={{height:400, width: 200}}
                noScrollbar
                noHeader
                theme='dark'
            />
        </div>
    )
}

export default TwitterFeed
