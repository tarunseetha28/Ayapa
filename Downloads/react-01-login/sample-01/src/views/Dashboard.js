import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Tabs from "../components/Tabs";

export const ProfileComponent = () => {
    const { user } = useAuth0();

    return (
        <Container className="mb-5">


            <Tabs style={{ cusrsor: "pointer" }}>
                <div label="Summary">
                    <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/p_xpah2xldqc" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
                <div label="Map">

                    <iframe src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/nFvhC" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
                <div label="Survey Map">
                    <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/p_9e9oizgdqc" width={1080} height={1000} frameBorder={0}></iframe>
                </div>

                <div label="Activity & visit">
                    <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/p_vpm9olyfqc" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
                <div label="Single survey">
                    <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/p_h4o13zleqc" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
                <div label="Combined survey">
                    <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/p_ifzfvlkpqc" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
                <div label="All Questions">
                    <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/p_dpn6qujxqc" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
                <div label="Route Map">
                    <iframe width="600" height="450" src="https://app.powerbi.com/reportEmbed?reportId=692c0f37-1a40-45d7-98ba-9a371df0dc1b&autoAuth=true&ctid=87390634-2b9d-48ca-ae68-2c102796ceb1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVrLXNvdXRoLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" width={1080} height={1000} frameBorder={0}></iframe>
                </div>
            </Tabs>



            {/* <Row>
                <iframe src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/nFvhC" width={1200} height={900} frameBorder={0}></iframe>
            </Row> */}


        </Container>

    );
};

export default withAuthenticationRequired(ProfileComponent);
