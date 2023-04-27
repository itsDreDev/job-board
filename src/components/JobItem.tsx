import { Text } from "@mantine/core";

interface Job {
  id: number;
  title: string;
  company: string;
}

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <div>
      <Text weight={700}>{job.title}</Text>
      <Text size="xs" color="gray">
        {job.company}
      </Text>
    </div>
  );
};

export default JobItem;
