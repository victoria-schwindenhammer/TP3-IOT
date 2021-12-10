import useEffect from 'react';

function RC (){
    useEffect( () => {
        setInterval(RC, 10000);
      });
    const bpm = Math.floor(Math.random()*160) + 40;
    var msg= bpm + ' bpm'
    return msg;
  }

export default RC;