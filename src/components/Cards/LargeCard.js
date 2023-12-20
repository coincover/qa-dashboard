import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import MainCard from 'components/Cards/MainCard';
import SkeletonEarningCard from 'components/Cards/Skeleton/LargeCard';
// import EarningIcon from 'assets/images/icons/earning.svg';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
// import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
// import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
// import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';

const CardWrapper = styled(MainCard)(({ theme, backgroundColor }) => ({
  backgroundColor: theme.palette[backgroundColor].dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette[backgroundColor][800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette[backgroundColor][800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

const LargeCard = ({ isLoading, title, subtitle, icon, backgroundColor }) => {
  const theme = useTheme();
  const Icon = icon;

  return (
    <>
      {isLoading || String(title).includes('undefined') ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false} backgroundColor={backgroundColor} sx={{ boxShadow: theme.shadows[10] }}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette[backgroundColor][800],
                        mt: 1
                      }}
                    >
                      {typeof Icon === 'string' ? (
                        <img src={icon} alt="Notification" />
                      ) : (
                        <Icon stroke={1.5} size="1.3rem" color="#ffffff" />
                      )}
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{title}</Typography>
                  </Grid>
                  {/* <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark
                      }}
                    >
                      <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                    </Avatar>
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: theme.palette[backgroundColor][200]
                  }}
                >
                  {subtitle}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

LargeCard.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  backgroundColor: PropTypes.string
};

export default LargeCard;
