import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type UrlParams = {
  slug: string,
}

type MeetingItem = {
  name: string,
  description: string,
}

const Meeting = () => {
  const { slug } = useParams<UrlParams>();

  const [meeting, setMeeting] = useState<MeetingItem>();

  useEffect(() => {
    if (slug){
      setMeeting({
        name: "colin/liam",
        description: "business meeting"
      });
    }
  }, [slug])

  return (
    <div>
      <h2>
        {meeting ? (
          <div>
            <h2>
              {meeting.name}
            </h2>
            <p>
              {meeting.description}
            </p>
          </div>
        ) : (
          <div>
            <h2>
              Meeting not found
            </h2>
          </div>
        )}
      </h2>
    </div>
  )
};

export default Meeting;