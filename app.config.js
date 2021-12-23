export default ({ config }) => {
  console.log(config);
  return {
    name: "test name",
    slug: "test slug",
    ...config,
  };
};
