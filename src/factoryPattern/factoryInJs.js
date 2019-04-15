const action = {
  function1: () => {console.log('function1')},
  function2: () => {console.log('function1')},
  function3: () => {console.log('function1')},
  function4: () => {console.log('function1')}
};

module.exports = (function(){
  return {
    action,
  };
})();