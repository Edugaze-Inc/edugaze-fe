import React from 'react';
import { FormControl, MenuItem, Typography, Select } from '@material-ui/core';
import useDevices from '../../../hooks/useDevices/useDevices';
import { useActiveSinkId } from 'src/hooks/useAppSinkId';

export default function AudioOutputList() {
  const { audioOutputDevices } = useDevices();
  const [activeSinkId, setActiveSinkId] = useActiveSinkId();
  const activeOutputLabel = audioOutputDevices.find(
    (device) => device.deviceId === activeSinkId
  )?.label;

  return (
    <div className="inputSelect">
      {audioOutputDevices.length > 1 ? (
        <FormControl fullWidth>
          <Typography variant="subtitle2" gutterBottom>
            Audio Output
          </Typography>
          <Select
            onChange={(e) => setActiveSinkId(e.target.value as string)}
            value={activeSinkId}
            variant="outlined"
          >
            {audioOutputDevices.map((device) => (
              <MenuItem value={device.deviceId} key={device.deviceId}>
                {device.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <>
          <Typography variant="subtitle2">Audio Output</Typography>
          <Typography>
            {activeOutputLabel || 'System Default Audio Output'}
          </Typography>
        </>
      )}
    </div>
  );
}
