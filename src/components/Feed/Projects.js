import { Card, CardActionArea } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';

import React from 'react'
import "./Projects.sass";

const Projects = () => {
  return (
  <Card className='projects' id='projects'>
    <CardContent className="project_content" style={{marginLeft: "20px", marginRight: "20px"}}>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold", marginTop:'20px'}}>
      Projects
      </Typography>
      
      <CardActionArea className='ind_project' href='https://cwyrenee.github.io/chromaticpuzzle/' target='_blank'>
      <Typography  variant="h6" component="div" style={{marginTop: "20px"}}>
      Chromatic Puzzle
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
      Feb 2022 - Mar 2022
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}}>
      A music inspired slide puzzle based on the C Chromatic scale for the Flutter Puzzle Hack 2022 
      </Typography>
      </CardActionArea>
      <Divider />
      
      <CardActionArea className='ind_project' href='https://docs.google.com/presentation/d/1ppivDnU28mpybBk6xVdqU3hwaAc0zkD6iPj7o6sRxCw/edit?usp=sharing' target='_blank'>
      <Typography variant="h6" component="div" style={{marginTop: "20px"}}>
      Creating a Sustainable Community- NextGen Consulting Ltd.
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
      2 weeks | Jan 2021
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}} >
      A HR solution to rekindle a firm’s commitment to corporate social responsibility in a case competition environment (Cut to the Case- HRMC UBC)
      </Typography>
      </CardActionArea>
      <Divider />

      <CardActionArea className='ind_project' href='https://www.agorize.com/en/challenges/ai-for-future-business-challenge/teams/54916/participations/62467/previews#' target='_blank'>
      <Typography variant="h6" component="div" style={{marginTop: "20px"}}>
      IoT and AI in Supply Chain and Logistics
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
      Jan 2021
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}}>
      A solution of a webapp + ML model upload-able on any edge device to deliver an ever improving model for fleet management in supporting responsible IoT and AI in Supply Chain and Logistics
      </Typography>
      </CardActionArea>
      <Divider />

      <CardActionArea className='ind_project' href='https://devpost.com/software/team-18' target='_blank'>
      <Typography variant="h6" component="div" style={{marginTop: "20px"}}>
      Team 18 - Ecotourism & Sustainability
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
      48 hrs | Nov 2020
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}}>
      A solution of a webapp + ML model upload-able on any edge device to deliver an ever improving model for fleet management in supporting responsible IoT and AI in Supply Chain and Logistics
      </Typography>
      </CardActionArea>
      <Divider />

      <CardActionArea className='ind_project' href='https://docs.google.com/presentation/d/1zk7TQP6iM0jGQknUUINrWiHkWBykiAwSgfv3ntgayjo/edit?usp=sharing' target='_blank'>
      <Typography variant="h6" component="div" style={{marginTop: "20px"}}>
      SimpleFoods
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
      48 hrs | Feb 2020
      </Typography>
      <Typography variant="body1" style={{marginBottom: "20px"}}>
      Awarded ‘Promising Ventures’ in the 2020 Entrepreneur Bootcamp for trying to solve food insecurities amongst students by connecting students who do not know how to cook with students who know via a webapp
      </Typography>
      </CardActionArea>

    </CardContent>
  </Card>
  )
}

export default Projects