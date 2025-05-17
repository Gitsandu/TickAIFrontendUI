import { Box, Grid, Paper, Typography } from '@mui/material';
import { ConfirmationNumber, People, Timeline, TrendingUp } from '@mui/icons-material';
import {
    LineChart,
    BarChart,
    PieChart,
    pieArcLabelClasses
  } from '@mui/x-charts';  

const mockLineData = [
    { name: 'Mon', tickets: 12, resolved: 10 },
    { name: 'Tue', tickets: 19, resolved: 15 },
    { name: 'Wed', tickets: 15, resolved: 13 },
    { name: 'Thu', tickets: 22, resolved: 18 },
    { name: 'Fri', tickets: 18, resolved: 15 },
    { name: 'Sat', tickets: 10, resolved: 9 },
    { name: 'Sun', tickets: 8, resolved: 7 },
];

const mockPieData = [
    { id: 0, value: 45, label: 'Technical' },
    { id: 1, value: 30, label: 'Billing' },
    { id: 2, value: 15, label: 'Account' },
    { id: 3, value: 10, label: 'General' },
];

const mockPriorityData = [
    { name: 'High', count: 35 },
    { name: 'Medium', count: 55 },
    { name: 'Low', count: 35 },
];

const DashboardCard = ({ title, value, icon }) => (
    <Paper
        elevation={3}
        sx={{
            p: 3,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 2,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
            },
        }}
    >
        <Box>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h3">{value}</Typography>
        </Box>
        <Box sx={{ color: 'primary.main', ml: 2 }}>{icon}</Box>
    </Paper>
);

const Dashboard = () => {
    return (
        <Box sx={{ height: '100%' }}>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12 }}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h4">Dashboard</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Total Tickets"
                        value="125"
                        icon={<ConfirmationNumber sx={{ fontSize: 56 }} />}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Active Agents"
                        value="8"
                        icon={<People sx={{ fontSize: 56 }} />}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Response Rate"
                        value="95%"
                        icon={<Timeline sx={{ fontSize: 56 }} />}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <DashboardCard
                        title="Resolution Rate"
                        value="92%"
                        icon={<TrendingUp sx={{ fontSize: 56 }} />}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
                {/* Ticket Trends Chart */}
                <Grid size={{
                    xs: 3

                }}>
                    <Paper
                        sx={{
                            p: 3,
                            height: '400px',
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Ticket Trends
                        </Typography>
                        <Box sx={{ width: '100%', height: 300 }}>
                            <LineChart
                                series={[
                                    { data: mockLineData.map(d => d.tickets), label: 'New Tickets', color: '#1976d2' },
                                    { data: mockLineData.map(d => d.resolved), label: 'Resolved', color: '#2e7d32' }
                                ]}
                                xAxis={[{ data: mockLineData.map(d => d.name), scaleType: 'band' }]}
                            />
                        </Box>
                    </Paper>
                </Grid>

                {/* Ticket Categories Chart */}
                <Grid size={{
                    xs: 6

                }}>                      <Paper
                    sx={{
                        p: 3,
                        height: '400px',
                        borderRadius: 2,
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                        <Typography variant="h6" gutterBottom>
                            Ticket Categories
                        </Typography>
                        <Box sx={{ flexGrow: 1, width: '100%' }}>
                            <PieChart
                                series={[{
                                    data: mockPieData,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30 },
                                }]}
                                height={300}
                                sx={{
                                    [`& .${pieArcLabelClasses.root}`]: {
                                        fill: 'white',
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </Box>
                    </Paper>
                </Grid>

                {/* Ticket Priority Distribution */}
                <Grid size={{
                    xs: 3

                }}>                    <Paper
                    sx={{
                        p: 3,
                        height: '400px',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                        <Typography variant="h6" gutterBottom>
                            Ticket Priority Distribution
                        </Typography>
                        <Box sx={{ width: '100%', height: 220 }}>
                            <BarChart
                                series={[{ data: mockPriorityData.map(d => d.count), label: 'Tickets', color: '#1976d2' }]}
                                xAxis={[{ data: mockPriorityData.map(d => d.name), scaleType: 'band' }]}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;