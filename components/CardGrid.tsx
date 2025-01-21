import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { useTranslations } from "next-intl";

interface CardItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const cardData: CardItem[] = [
  {
    image: "/path/to/image1.jpg",
    title: "Case Title",
    subtitle: "Case sous-titre",
    description: "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant...",
    buttonText: "Forfait 1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Case Title",
    subtitle: "Case sous-titre",
    description: "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles...",
    buttonText: "Forfait 2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Case Title",
    subtitle: "Case sous-titre",
    description: "BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de...",
    buttonText: "Forfait 3",
  },
];

const CardGrid: React.FC = () => {
  const t = useTranslations();

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
        {t("bloc_1.title")}
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ marginBottom: "2rem", color: "text.secondary" }}>
        {t("bloc_1.subtitle")}
      </Typography>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia component="img" height="140" image={card.image} alt={t(`bloc_1.cases.${index}.category`)} />
              <CardContent>
                <Typography variant="subtitle2" color="secondary" sx={{ fontWeight: "bold" }}>
                  {t(`bloc_1.cases.${index}.category`)}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                  {t(`bloc_1.cases.${index}.tagline`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "0.5rem" }}>
                  {t(`bloc_1.cases.${index}.description`)}
                </Typography>
              </CardContent>
              <Box sx={{ padding: "1rem", textAlign: "center" }}>
                <Button variant="outlined" color="primary" endIcon={<span>&#x2192;</span>}>
                  {t(`bloc_1.cases.${index}.cta`)}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardGrid;
