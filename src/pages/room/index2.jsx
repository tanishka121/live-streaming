import React from "react";
import {useParams} from "react-router-dom"
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage = () =>{
    const {roomid} = useParams()

    const myMeeting = async (element)=>{
        const appId = 1596131820
        const serverSecret = "8f21884facc2f1d5324b54315c6b7fcd";
        const kitToken = ZegoUIKitPrebuilt. generateKitTokenForTest(
            appId,
            serverSecret,
            roomid,
            Date.now().toString(),
            'Gungun'
        )
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container : element,
            scenario : {
                mode: ZegoUIKitPrebuilt.VideoConference,
            }

    })
    }
    return(
        <div className="room-page">
            <div ref={myMeeting}>

            </div>
            
        </div>
    )

}

export default RoomPage