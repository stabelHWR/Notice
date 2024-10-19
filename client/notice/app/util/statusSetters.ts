import { PlayingStatus } from '@/types/noteTypes';
import { secondaryColorNeonBlue, StatusColors } from '@/constants/Colors';

export const setStatusColor = (status: PlayingStatus) => {
  const textColor =
    status === 'notPlayed'
      ? StatusColors.notPlayed.background
      : status === 'failed'
        ? StatusColors.error.background
        : status === 'success'
          ? StatusColors.success.background
          : secondaryColorNeonBlue;
  return textColor;
};
