import PropTypes from 'prop-types';
import { IconBug, IconHeadphones, IconShieldLock } from '@tabler/icons';
import { Box, Card, CardContent, CardHeader, Stack, SvgIcon, Typography, useTheme } from '@mui/material';
import { Chart } from './Chart';
import JiraTicketSummaryCardSkeleton from 'components/Cards/Skeleton/JiraTicketSummaryCard';
const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent'
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.warning.main],
    dataLabels: {
      enabled: false
    },
    labels,
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      fillSeriesColor: false
    }
  };
};

const iconMap = {
  Bugs: (
    <SvgIcon>
      <IconBug />
    </SvgIcon>
  ),
  Defects: (
    <SvgIcon>
      <IconHeadphones />
    </SvgIcon>
  ),
  Security: (
    <SvgIcon>
      <IconShieldLock />
    </SvgIcon>
  )
};

export const OverviewTraffic = (props) => {
  const { chartSeries, labels, sx } = props;
  const chartOptions = useChartOptions(labels);

  return (
    <>
      {chartSeries && chartSeries.every((value) => value === undefined) ? (
        <JiraTicketSummaryCardSkeleton />
      ) : (
        <Card sx={{ ...sx, height: '100%' }}>
          <CardHeader title="Jira Ticket Summary" sx={{ padding: '14px', alignContent: 'center' }} />
          <CardContent sx={{ padding: '10px' }}>
            <Chart height={240} options={chartOptions} series={chartSeries} type="donut" width="100%" />
            <Stack alignItems="center" direction="row" justifyContent="center" spacing={4}>
              {chartSeries.map((item, index) => {
                const label = labels[index];

                return (
                  <Box
                    key={label}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    {iconMap[label]}
                    <Typography sx={{ my: 1 }} variant="h4">
                      {label}
                    </Typography>
                    <Typography color="text.secondary" variant="subtitle">
                      {item}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
};

OverviewTraffic.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object
};
