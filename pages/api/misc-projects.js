import data from './misc-projects.json';

export const getMiscProjects = () => {
  return data;
};

const handler = (req, res) => {
  const projects = getMiscProjects();
  res.json(projects);
};

export default handler;
