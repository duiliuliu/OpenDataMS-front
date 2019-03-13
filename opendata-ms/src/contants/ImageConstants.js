const requireContext = require.context('../assets/icon', true, /^\.\/.*\.*$/);
const IconTypesMap = {};
requireContext.keys().map((i) => {
    let type = i.match(/^.*\/(.*)\..*$/);
    IconTypesMap[type[1]] = './icon/' + i;
    return {
        'type': type[1],
        'path': './icon/' + i
    };
});

export default IconTypesMap;