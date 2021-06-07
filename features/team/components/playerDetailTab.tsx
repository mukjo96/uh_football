import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, BackTop } from "antd";
import {
    HistoryOutlined,
    BarChartOutlined,
    SolutionOutlined,
} from "@ant-design/icons";
import RecentMatches from "./recentMatches";
import CareerStatistics from "./careerStatistics";
import RelatedNews from "./relatedNews";

const { TabPane } = Tabs;

const PlayerDetailTab = ({ playerData }) => {
    return (
        <Container>
            <BackTop />
            <StyledTabs
                defaultActiveKey="1"
                centered={true}
                teamcolor={playerData.origin.teamColor}
            >
                <TabPane
                    tab={
                        <span>
                            <HistoryOutlined />
                            <span className="tabTitle">RECENT MATCHES</span>
                        </span>
                    }
                    key="1"
                >
                    <RecentMatches playerData={playerData} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <BarChartOutlined />
                            <span className="tabTitle">CAREER STATISTICS</span>
                        </span>
                    }
                    key="2"
                >
                    <CareerStatistics playerData={playerData} />
                </TabPane>
                {playerData.relatedNews && (
                    <TabPane
                        tab={
                            <span>
                                <SolutionOutlined />
                                <span className="tabTitle">RELATED NEWS</span>
                            </span>
                        }
                        key="3"
                    >
                        <RelatedNews playerData={playerData} />
                    </TabPane>
                )}
            </StyledTabs>
        </Container>
    );
};

export default PlayerDetailTab;

const Container = styled.div`
    border-radius: 0 0 15px 15px;
    padding-bottom: 24px;
    border-radius: 15px;
`;

const StyledTabs = styled(Tabs)<{ teamcolor: string }>`
    .ant-tabs-nav-list {
        width: 100%;
        justify-content: space-evenly;
    }
    .ant-tabs-tab {
        font-size: 16px;
        margin: 0;

        :hover {
            color: ${(props) => props.teamcolor};
        }
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${(props) => props.teamcolor};
    }

    .ant-tabs-ink-bar {
        background: ${(props) => props.teamcolor};
    }

    @media screen and (max-width: 768px) {
        .ant-tabs-nav-list {
            width: 100%;
            justify-content: space-evenly;
        }
        .anticon {
            margin-right: 0;
            margin-left: 0;
            padding: 0 12px;
        }
        .tabTitle {
            display: none;
        }
    }
`;
