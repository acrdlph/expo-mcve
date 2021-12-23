export default ({ config }) => {
  console.log(config);
  return {
    name: "noname",
    ios: { supportsTablet: false },
    ...config,
  };
};
