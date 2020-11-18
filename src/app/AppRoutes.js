import React, {Component, Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

import Division from "./voting-system/main-components/Division";
import AddDivision from "./voting-system/action-components/division/AddDivision";
import EditDivision from "./voting-system/action-components/division/EditDivision";
import ShowDivision from "./voting-system/action-components/division/ShowDivision";

import District from "./voting-system/main-components/District";
import AddDistrict from "./voting-system/action-components/district/AddDistrict";
import EditDistrict from "./voting-system/action-components/district/EditDistrict";
import ShowDistrict from "./voting-system/action-components/district/ShowDistrict";

import Upazila from "./voting-system/main-components/Upazila";
import AddUpazila from "./voting-system/action-components/upazila/AddUpazila";
import EditUpazila from "./voting-system/action-components/upazila/EditUpazila";
import ShowUpazila from "./voting-system/action-components/upazila/ShowUpazila";

import UnionCouncil from "./voting-system/main-components/UnionCouncil";
import AddUnionCouncil from "./voting-system/action-components/unionCouncil/AddUnionCouncil";
import EditUnionCouncil from "./voting-system/action-components/unionCouncil/EditUnionCouncil";
import ShowUnionCouncil from "./voting-system/action-components/unionCouncil/ShowUnionCouncil";

import Parties from "./voting-system/main-components/Party";
import AddParty from "./voting-system/action-components/party/AddParty";
import EditParty from "./voting-system/action-components/party/EditParty";
import ShowParty from "./voting-system/action-components/party/ShowParty";

import VoteInfo from "./voting-system/main-components/VoteInfo";
import AddVoteInfo from "./voting-system/action-components/voteInfo/AddVoteInfo";
import EditVoteInfo from "./voting-system/action-components/voteInfo/EditVoteInfo";
import ShowVoteInfo from "./voting-system/action-components/voteInfo/ShowVoteInfo";

import Candidate from "./voting-system/main-components/Candidate";

import SeatNames from "./voting-system/main-components/SeatNames";
import ShowSeatNames from "./voting-system/action-components/seatNames/ShowSeatNames";
import EditSeatNames from "./voting-system/action-components/seatNames/EditSeatNames";
import AddSeatNames from "./voting-system/action-components/seatNames/AddSeatNames";

import VoteWiseVoterList from "./voting-system/main-components/VoteWiseVoterList";

import VoteCalculation from "./voting-system/main-components/VoteCalculation";

import Voter from "./voting-system/main-components/Voter";
import ShowVoter from "./voting-system/action-components/voter/ShowVoter";

const Dashboard = lazy(() => import('./dashboard/Dashboard'));



class AppRoutes extends Component {
    render() {
        return (
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard}/>

                    <Route exact path="/division" component={Division}/>
                    <Route exact path="/division/add" component={AddDivision}/>
                    <Route exact path="/division/edit/:id" component={EditDivision}/>
                    <Route exact path="/division/show/:id" component={ShowDivision}/>

                    <Route exact path="/district" component={District}/>
                    <Route exact path="/district/add" component={AddDistrict}/>
                    <Route exact path="/district/edit/:id" component={EditDistrict}/>
                    <Route exact path="/district/show/:id" component={ShowDistrict}/>

                    <Route exact path="/upazila" component={Upazila}/>
                    <Route exact path="/upazila/add" component={AddUpazila}/>
                    <Route exact path="/upazila/edit/:id" component={EditUpazila}/>
                    <Route exact path="/upazila/show/:id" component={ShowUpazila}/>

                    <Route exact path="/unionCouncil" component={UnionCouncil}/>
                    <Route exact path="/unionCouncil/add" component={AddUnionCouncil}/>
                    <Route exact path="/unionCouncil/edit/:id" component={EditUnionCouncil}/>
                    <Route exact path="/unionCouncil/show/:id" component={ShowUnionCouncil}/>

                    <Route exact path="/party" component={Parties}/>
                    <Route exact path="/party/add" component={AddParty}/>
                    <Route exact path="/party/edit/:id" component={EditParty}/>
                    <Route exact path="/party/show/:id" component={ShowParty}/>

                    <Route exact path="/voteInfo" component={VoteInfo}/>
                    <Route exact path="/voteInfo/add" component={AddVoteInfo}/>
                    <Route exact path="/voteInfo/edit/:id" component={EditVoteInfo}/>
                    <Route exact path="/voteInfo/show/:id" component={ShowVoteInfo}/>

                    <Route exact path="/candidate" component={Candidate}/>

                    <Route exact path={"/seatNames"} component={SeatNames}/>
                    <Route exact path={"/seatNames/show/:id"} component={ShowSeatNames}/>
                    <Route exact path={"/seatNames/edit/:id"} component={EditSeatNames}/>
                    <Route exact path={"/seatNames/add"} component={AddSeatNames}/>

                    <Route exact path={"/voter"} component={Voter}/>
                    <Route exact path={"/voter/show/:id"} component={ShowVoter}/>

                    <Route exact path={"/voteWiseVoter"} component={VoteWiseVoterList}/>

                    <Route exact path={"/voteCalculation"} component={VoteCalculation}/>

                    <Redirect to="/dashboard"/>
                </Switch>
            </Suspense>
        );
    }
}

export default AppRoutes;