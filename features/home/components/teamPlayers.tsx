import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, List, Avatar, Result, Skeleton } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import BlockTitle from "./Title/blockTitle";

import PlayerInfo from "./playerInfo";
import { useSelector } from "react-redux";
import { RootStateInterface } from "redux/interfaces/ifRootState";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { playerListDataTypes } from "../api/cityDataTypes";
import { useTranslation } from "next-i18next";
import { CustomShapeDividerWave } from "@features/common/divider/customShapeDivider";

type propTypes = {
    dataList: playerListDataTypes[];
};
const TeamPlayers = ({ dataList }: propTypes) => {
    const [selectedId, setSelectedId] = useState(0);

    const data = [];

    dataList && playerDataToObjects();

    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );

    const { t } = useTranslation("common");

    return (
        <Container>
            <CustomShapeDividerWave color="#000000" small />
            <StyledTitle>
                <BlockTitle
                    title="PLAYERS"
                    link="players"
                    theme="light"
                    teamName={team.teamName}
                />
            </StyledTitle>
            <StyledRow>
                <Col xs={24} md={18} style={{ alignSelf: "center" }}>
                    {selectedId === 0 ? (
                        <Result
                            icon={
                                <SelectOutlined
                                    style={{ color: team.teamColor }}
                                />
                            }
                            title={t("Select your player!")}
                        />
                    ) : (
                        <PlayerInfo id={selectedId} />
                    )}
                </Col>
                <ListCol xs={24} md={6}>
                    <List
                        dataSource={
                            data.length > 0
                                ? data.reverse()
                                : [1, 2, 3, 4, 5, 6, 7, 8, 9]
                        }
                        size="large"
                        renderItem={(item) =>
                            item.name ? (
                                <StyledItem
                                    key={item.id}
                                    onClick={() => setSelectedId(item.id)}
                                    id={(selectedId === item.id).toString()}
                                    teamcolor={team.teamColor}
                                >
                                    <StyledMeta
                                        avatar={
                                            <Avatar
                                                size={48}
                                                shape="square"
                                                src={`https://images.fotmob.com/image_resources/playerimages/${item.id}.png`}
                                            />
                                        }
                                        title={
                                            <Col>
                                                <PlayerName>
                                                    {item.name}
                                                </PlayerName>
                                                <PlayerRole>
                                                    {item.role === "goalkeepers"
                                                        ? t("Goalkeeper")
                                                        : item.role ===
                                                          "defenders"
                                                        ? t("Defender")
                                                        : item.role ===
                                                          "midfielders"
                                                        ? t("Midfielder")
                                                        : t("Forward")}
                                                </PlayerRole>
                                            </Col>
                                        }
                                    />
                                </StyledItem>
                            ) : (
                                <StyledItem key={item}>
                                    <Skeleton
                                        avatar
                                        paragraph={{ rows: 2 }}
                                        title={false}
                                        active
                                    />
                                </StyledItem>
                            )
                        }
                    ></List>
                </ListCol>
            </StyledRow>
        </Container>
    );

    function playerDataToObjects() {
        dataList.map((players) => {
            players[0] !== "coach" &&
                players[1].map((player) => {
                    data.push({
                        id: player.id,
                        name: player.name,
                        role: player.role,
                    });
                });
        });
    }
};

export default TeamPlayers;

const Container = styled.div`
    position: relative;
`;

const StyledTitle = styled.div`
    padding: 28px;
    @media screen and (max-width: 768px) {
        padding: 4vw;
    }
`;

const StyledRow = styled(Row)``;

const ListCol = styled(Col)`
    height: 393px;
    overflow: auto;
`;

const StyledItem = styled(List.Item)<{ id?: string; teamcolor?: string }>`
    background-color: ${(props) =>
        props.id === "true" && props.teamcolor + "19"};
`;

const StyledMeta = styled(List.Item.Meta)`
    .ant-list-item-meta-content {
        align-self: center;
    }
`;

const PlayerName = styled.h3`
    font-size: 14px;
    margin: 0;
`;
const PlayerRole = styled.h5`
    font-size: 10px;
    color: darkgray;
    margin: 0;
`;
