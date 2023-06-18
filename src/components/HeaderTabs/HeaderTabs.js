import React from "react";
import { AppBar, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { tabsClasses } from "@mui/material/Tabs";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Plan from "../Plan/Plan";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import WrapTextOutlinedIcon from "@mui/icons-material/WrapTextOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import Frame from "../Frame/Frame";

const HeaderTabs = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
            <AppBar
               position="static"  style={{ background: 'transparent', boxShadow: 'none'}}

             >
                <TabContext value={value}>
        
                        <TabList
                            onChange={handleChange}
                            TabIndicatorProps={{
                                sx: { opacity: 0.0 },
                            }}
                            variant="scrollable"
                            textColor="inherit"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    "&.Mui-disabled": { opacity: 0.3 },
                                },
                                height: "50px",
                                color: '#202020'
                            }}
                        >
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#4d99bd",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                   color:'#202020'
                                }}
                                indicatorColor="inherit"
                                icon={<TravelExploreOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                                label="Chart Review"
                                value="1"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#c95d79",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                   color: '#202020'
                                }}
                                label="Triage"
                                value="2"
                                icon={<FilePresentOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#4d99bd",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                   color: '#202020' 
                                }}
                                label="Assessment"
                                value="3"
                                icon={<AssessmentOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#f7ca2d",
                                    background: "white",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                   color: '#202020'
                                }}
                                label="Plan"
                                value="4"
                                icon={<LanguageOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#c95d79",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                    color: '#202020'
                                }}
                                label="Secreening"
                                value="5"
                                icon={<ListAltOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#78b9ad",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                    color: '#202020'
                                }}
                                label="Not'l periodic"
                                value="6"
                                icon={<CircleOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#4d99bd",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                   color: '#202020'
                                }}
                                label="Wrap-Up"
                                value="7"
                                icon={<WrapTextOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#c95d79",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                    color: '#202020'
                                }}
                                label="Covid-19 vaccenating"
                                value="8"
                                icon={<CoronavirusOutlinedIcon />}
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#c95d79",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                   color: '#202020'
                                }}
                                label={<SettingsIcon sx={{ backgroundColor: "#c5e5df" }} />}
                                value="8"
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            <Tab
                                sx={{
                                    width: "20%",
                                    background: "#c5e5df",
                                    border: 1,
                                    borderColor: "#78b9ad",
                                    borderTop: 3,
                                    borderTopColor: "#c95d79",
                                    margin: "0 3px",
                                    paddingTop: "0",
                                    color: '#202020'
                                }}
                                label={<ArrowDropDownIcon
                                    sx={{ backgroundColor: "#c5e5df", marginRight: "5px" }} />}
                                value="8"
                                aria-label="favorite"
                                iconPosition="start"
                            />
                            
                        </TabList>
                    <TabPanel value="4">
                        <Plan />
                    </TabPanel>
                <TabPanel value="3">
                    <Frame/>
                </TabPanel>
                </TabContext>
            </AppBar>
          
    );
};

export default HeaderTabs;