import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  const history = useHistory();

  const openCampaigns = () => {
    history.push(`/campaigns`);
  }

  const openBuy = () => {
    history.push(`/buy`);
  }

  return (
    <div>
      <Typography variant="h2">
        Welcome to PayForTime.io!
      </Typography>
      <div>
        <Button variant="contained" color="primary" onClick={openCampaigns}>
          Open Campaigns
        </Button>
        <Button variant="contained" color="primary" onClick={openBuy}>
          Buy Credits
        </Button>
      </div>
    </div>
  );
}

export default Home;