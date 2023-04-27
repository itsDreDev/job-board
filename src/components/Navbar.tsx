import { Container, Col, Grid, Text } from "@mantine/core";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Grid>
        <Col>
          <Text weight={700} size="lg">
            Job Board
          </Text>
        </Col>
      </Grid>
    </Container>
  );
};

export default Navbar;
