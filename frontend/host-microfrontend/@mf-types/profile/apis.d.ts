
    export type RemoteKeys = 'profile/ProfileSection';
    type PackageType<T> = T extends 'profile/ProfileSection' ? typeof import('profile/ProfileSection') :any;