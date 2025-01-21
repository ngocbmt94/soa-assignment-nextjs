import { Box } from "@mui/material";

export default function BannerVideo() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <video controls autoPlay muted loop style={{ width: "100vw", height: "100vh", objectFit: "cover" }}>
        <source src="./banner-video.mov" />
        <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
      </video>
    </Box>
  );
}
