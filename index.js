  
  function superbowlWin(record) {
    const winningYearEntry = record.find(entry => entry.result === 'W' && entry.year === '2015');
  
    return winningYearEntry ? winningYearEntry.year : undefined; 
  }
  
  const winningYear = superbowlWin(record);
  
  console.log(winningYear); 
  