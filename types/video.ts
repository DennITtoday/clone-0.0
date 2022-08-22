export interface IVideo {
    map(arg0: (video: any) => JSX.Element): import("react").ReactNode

    videoName: String
    description: String
    createdAt: string
    picture: String
    video: String
}
