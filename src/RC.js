import React, { useEffect } from 'react';

function RC (){
    const bpm = Math.floor(Math.random()*160) + 40;
    var msg= bpm + ' bpm'
    return msg;
    
  }

export default RC;