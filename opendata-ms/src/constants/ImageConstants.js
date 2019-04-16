import { ICON } from './routerConstants';
const requireContext = require.context('../assets/icon', true, /^\.\/.*\.*$/);
const IconTypesMap = {};
requireContext.keys().map(i => {
  let type = i.match(/^.*\/(.*)\..*$/);
  IconTypesMap[type[1]] = ICON + '/' + i;
  return {
    type: type[1],
    path: ICON + '/' + i
  };
});

export default IconTypesMap;
