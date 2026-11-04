// One place to edit your name, links and projects.
export const site = {
  name: 'Mitchell Boesche',
  initials: 'MB',
  description:
    'Data engineer in Minnesota. Writing about SQL, Python, Snowflake and side projects.',
  email: 'mjboesche123@gmail.com',
  github: 'https://github.com/mitchellboesche',
  linkedin: 'https://www.linkedin.com/in/mitchell-boesche-b15947135/',
};

export type Project = {
  title: string;
  blurb: string;
  tags: string;
  href: string;
  icon: 'db' | 'chart' | 'home';
};

export const projects: Project[] = [
  {
    title: 'NFL data warehouse',
    blurb: 'A local DuckDB warehouse with a weekly refresh, feeding fantasy and betting analysis.',
    tags: 'python · duckdb · sql',
    href: '/blog/fantasy_football/nfl-warehouse-duckdb/',
    icon: 'db',
  },
  {
    title: 'Fantasy draft guide',
    blurb: 'An interactive draft board built on a market-blend ranking model.',
    tags: 'modeling · web',
    href: '/blog/fantasy_football/#',
    icon: 'chart',
  },
  {
    title: 'Mortgage payoff planner',
    blurb: 'A small web app for testing extra-payment scenarios and seeing the payoff date move!',
    tags: 'web app · finance',
    href: '/apps/mortgage_payoff_calculator',
    icon: 'home',
  },
];
