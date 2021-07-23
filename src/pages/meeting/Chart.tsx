// Created by Ziyad, Hager Jul 17 5:12 AM
import { Box, IconButton } from '@chakra-ui/react';
import { CChartBar  } from '@coreui/react-chartjs';

import { Emotions } from './Meeting';
import { RiEmotionLine } from 'react-icons/ri';
import { useState } from 'react';
type Props = {
  emotions: Record<Emotions, number>;
};

export function Chart({ emotions }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Box position="absolute" bottom={'60px'} zIndex={10} left={30}>
      {!open ? (
        <IconButton
          aria-label=""
          size="lg"
          icon={<RiEmotionLine />}
          onClick={() => setOpen(true)}
        />
      ) : (
        <CChartBar  
          style={{ width: 350 }}
          onClick={() => setOpen(false)}
          labels={[
            Emotions.HAPPY,
            Emotions.NEUTRAL,
            Emotions.OUT,
            Emotions.SAD,
            Emotions.SURPRISED,
            Emotions.DISGUSTED,
            Emotions.FEARFUL,
            Emotions.ANGRY,
          ]}
          datasets={[
            {
              label: '',
              data: [
                emotions.Happy,
                emotions.Neutral,
                emotions.Out,
                emotions.Sad,
                emotions.Surprised,
                emotions.Disgusted,
                emotions.Fearful,
                emotions.Angry,
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 205, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(201, 203, 207, 0.6)',
                'rgba(631, 192, 192, 0.6)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgba(631, 192, 192)',
              ],
            },
          ]}
        />
      )}
    </Box>
  );
}
