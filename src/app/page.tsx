import ImageCarousel from "@/components/ImageCarousel";
import SlotSection from "@/components/SlotSection";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container component="section" maxWidth="xl">
      <Stack pt={3}>
        <ImageCarousel />
        <SlotSection />
      </Stack>
    </Container>
  );
}
