import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import ParticipantList from '../ParticipantList/ParticipantList';
import MainParticipant from '../MainParticipant/MainParticipant';

const useStyles = makeStyles((theme: any) => {
  console.log(theme.sidebarWidth);

  const totalMobileSidebarHeight = `${
    theme.sidebarMobileHeight +
    theme.sidebarMobilePadding * 2 +
    theme.participantBorderWidth
  }px`;
  return {
    container: {
      position: 'relative',
      height: 'calc(100vh - 50px)',
      display: 'grid',
      gridTemplateColumns: `1fr ${theme.sidebarWidth}px`,
      gridTemplateRows: '100%',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: `100%`,
        gridTemplateRows: `calc(100% - ${totalMobileSidebarHeight}) ${totalMobileSidebarHeight}`,
      },
    },
    chatWindowOpen: {
      gridTemplateColumns: `1fr ${theme.sidebarWidth}px ${theme.chatWindowWidth}px`,
    },
  };
});

export default function Room() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container)}>
      <MainParticipant />
      <ParticipantList />
    </div>
  );
}
