import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { IVideo } from "../../types/video";

const Create = () => {
    const router = useRouter()
    const videos: IVideo[] = [
        { _id: '1', tittle: 'Fuck off', author: 'UAreGay', preview: '/client/img/roflanebalo.jpg/', video: 'https://www.youtube.com/watch?v=A0CfYSVzAZI&t=3945s' }

    ]
    return (
        <div>download page</div>
    );
};

export default Create;