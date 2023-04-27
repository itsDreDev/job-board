import { Container } from "@mantine/core";
import Layout from "../components/Layout";
import JobList from "../components/JobList";

const jobs = [
  // Add sample job data here
  { id: 1, title: "Full Stack Developer", company: "Tech Company" },
  { id: 2, title: "Frontend Developer", company: "Startup Inc." },
  { id: 3, title: "Project Manager", company: "Enterprise Ltd." },
];

const Home: React.FC = () => {
  return (
    <Layout>
      <Container>
        <JobList jobs={jobs} />
      </Container>
    </Layout>
  );
};

export default Home;
