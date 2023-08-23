import { SectionStatistic, StatsItem, StatsList } from "./Statistic.styled"

export const Statistic = ({ stats }) => {
    return (
        <SectionStatistic>
            <h2>UPLOAD STATS</h2>

            <StatsList>
                {createStatsMarkup(stats)}
            </StatsList>
        </SectionStatistic>
    )
}

function createStatsMarkup(stats) {
    return stats.map(stat =>
        <StatsItem key={stat.id}>
            <span>{stat.label} </span>
            <span>{stat.percentage}%</span>
        </StatsItem>
    )
}