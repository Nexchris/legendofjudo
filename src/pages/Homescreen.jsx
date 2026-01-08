import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Wallpaper from '../images/misc/mainwallapaper.png';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HomeScreen() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-07T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Image de fond */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            paddingTop: '6rem',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${Wallpaper})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
            zIndex: 1,
          }}
        />

        {/* Contenu */}
        <Box
          sx={{
            width: '100vw',
            height: '84vh',
            position: 'relative',
            zIndex: 2,
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            px: 5,
          }}
        >
          {/* Texte historique */}
          <Box sx={{ maxWidth: '40%', position: 'relative' }}>
            <h1 style={{ fontSize: '4rem', lineHeight: 1.2 }}>
              Le judo français : son histoire, ses héros, son héritage ici...
            </h1>

            {/* Flèche animée */}
            <Box
              sx={{
                textAlign: 'center',
                mt: 2,
                animation: 'bounce 2s infinite',
                cursor: 'pointer',
              }}
            >
              <KeyboardArrowDownIcon sx={{ fontSize: 60, color: 'white' }} />
            </Box>
          </Box>

          {/* Bloc Grand Slam */}
          <Box sx={{ textAlign: 'right' }}>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Chau Philomene One' }}>
                {timeLeft.days} Jours : {timeLeft.hours} Heures : {timeLeft.minutes} Minutes : {timeLeft.seconds} Secondes
              </Typography>
            </Box>

            <Typography sx={{ fontSize: '8rem', fontFamily: 'Chau Philomene One', lineHeight: 0.9 }}>
              PARIS GRAND<br />SLAM 2026
            </Typography>

            <a href="https://www.parisgrandslamjudo.fr/">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#051163',
                  fontFamily: 'Chau Philomene One',
                  fontWeight: 700,
                  transition: '0.3s',
                  fontSize : { xs: 'auto', md: '1.2rem' },
                  '&:hover': { fontSize : '1.5rem' },
                marginBottom: '1rem'
                }}
              >
                Inscrivez-vous maintenant !
              </Button>
            </a>
          </Box>
        </Box>
      </Box>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
        `}
      </style>
    </>
  );
}

export default HomeScreen;
