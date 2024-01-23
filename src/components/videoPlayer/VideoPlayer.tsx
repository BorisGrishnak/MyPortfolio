import React from "react";
import { Player } from "video-react";
import 'video-react/dist/video-react.css';

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    return (
        <div className="w-full max-w-screen-lg mx-auto">
            <Player autoPlay>
                <source src={src} />
            </Player>
        </div>
    );
};

export default VideoPlayer;