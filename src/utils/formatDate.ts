import { format } from 'date-fns';

export const formatDate = (timeStamp: number) => {
  const date = new Date(timeStamp);

  return format(date, 'dd/MM/yyyy HH:mm');
};
