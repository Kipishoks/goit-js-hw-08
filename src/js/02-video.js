import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

// player.on('play', function () {
//         console.log('played the video!');
//     });

const getCurrentTime = function (data) {
    const currentTime = data.seconds;
    console.log(throttle(getCurrentTime, 1000));
    localStorage.setItem(TIME_KEY, JSON.stringify(currentTime))
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)) || 0);
;