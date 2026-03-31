import React from 'react';
import TierList from '../components/TierList';
import { Bar } from 'react-chartjs-2';

const Profile = () => {
    // Sample data for the dashboard
    const userStats = {
        totalMinutesListened: 3000,
        librarySize: 150,
        dominantGenre: 'Rock',
    };

    // Sample data for monthly recap chart
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: 'Minutes Listened',
                data: [800, 900, 1300],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h1>User Stats Dashboard</h1>
            <p>Total Minutes Listened: {userStats.totalMinutesListened}</p>
            <p>Library Size: {userStats.librarySize} songs</p>
            <p>Dominant Genre: {userStats.dominantGenre}</p>

            <h2>TierList of Artists</h2>
            <TierList />

            <h2>Badges</h2>
            <div>
                <p>No badges earned yet.</p>
                {/* Add Badge components as needed */}
            </div>

            <h2>Monthly Recap</h2>
            <Bar data={monthlyData} />
        </div>
    );
};

export default Profile;