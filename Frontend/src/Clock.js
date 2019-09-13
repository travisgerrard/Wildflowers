import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Text from './Style/Text';

const Clock = () => {
  const [time, setTime] = useState(
    moment().format('dddd, MMMM Do YYYY, h:mm a')
  );

  useEffect(() => {
    setInterval(
      () => setTime(moment().format('dddd, MMMM Do YYYY, h:mm a')),
      3000
    );
  });

  return (
    <Text sizeSmall style={{ textAlign: 'center', padding: 5 }}>
      {time}
    </Text>
  );
};

export default Clock;
