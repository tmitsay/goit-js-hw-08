import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const CURRENT_TIME = 'videoplayer-current-time';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer, {
  loop: true,
  quality: '1080px',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0);
