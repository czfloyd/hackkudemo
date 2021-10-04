import React, { useEffect, useState } from 'react';

type Campaign = {
  name: string,
  description: string,
}

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([{name: "colin", description: "coder"}, {name: "liam", description: "business"}]);

  return (
    <div>
      <h2>
        <hr/>
        {campaigns.map((campaign: Campaign) => (
          <div>
          <h3>
            {campaign.name}
          </h3>
          <p>
            {campaign.description}
            </p>
            <hr/>
          </div>
        ))}
      </h2>
    </div>
  )
};

export default Campaigns;