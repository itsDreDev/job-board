import { Paper } from "@mantine/core";
import JobItem from "./JobItem";

interface Job {
  id: number;
  title: string;
  company: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <Paper p="md" shadow="xs" key={job.id}>
          <JobItem job={job} />
        </Paper>
      ))}
    </div>
  );
};

export default JobList;
